import express from "express";
import axios from "axios";
import { sendConfirmationEmail } from "../services/emailService.js";
import { scheduleReminder, sendWhatsapp } from "../services/whatsappService.js";
import User from "../schemas/User.js";

const router = express.Router();

router.post("/submit", async (req, res) => {
  const { firstname, lastname, sex, age, city, phone, email, referrer } =
    req.body;
    const user = new User({firstname, lastname, sex, age, city, phone, email, referrer  });
    sendWhatsapp(user.phone, "hi there!");
  if (
    !firstname ||
    !lastname ||
    !sex ||
    !age ||
    !city ||
    !phone ||
    !email ||
    !referrer
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // HubSpot API endpoint
    const url = "https://api.hubapi.com/crm/v3/objects/contacts";

    // HubSpot contact properties
    const payload = {
      properties: {
        firstname,
        lastname,
        sex,
        age: age,
        city,
        phone,
        email,
        referrer,
      },
    };

    const response = await axios.post(url, payload, {
      headers: {
        Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
        "Content-Type": "application/json",
      },
    });

    // Send confirmation email
    await sendConfirmationEmail(email, firstname);

    // Schedule WhatsApp reminder
    if (phone) {
      scheduleReminder(phone, firstname);
    }
 
    await user.save();
    res
      .status(200)
      .json({ message: "Contact created and email sent", data: response.data });
  } catch (error) {
    console.error("Submission error:", error.response?.data || error.message);
    res.status(500).json({ message: "Submission Failed" });
  }
});



router.post("/calendly/webhook", async (req, res) => {

  try {
    const event = req.body;

    if (event.event === "invitee.created") {
       const email = event.payload?.email;
      console.log("New Calendly booking from:", email);

      // Update the user in MongoDB
      await User.findOneAndUpdate(
        { email },
        { calendlyBooked: true },
        { new: true }
      );
    }

    res.status(200).send("OK");
  } catch (err) {
    console.error("Calendly webhook error:", err);
    res.status(500).send("Server error");
  }
});
export default router;
