import express from "express";
import axios from "axios";
import { sendConfirmationEmail } from "../services/emailService.js";
import User from "../schemas/User.js";

const router = express.Router();

router.post("/submit", async (req, res) => {
  const { firstname, lastname, sex, age, city, phone, email, referrer } =
    req.body;

  if (!firstname || !lastname || !sex || !age || !city || !phone || !email) {
    return res.status(400).json({ message: "נא למלא את כל השדות" });
  }

  if (!referrer) {
    return res.status(400).json({
      message:
        "ההרשמה חייבת להתבצע דרך קישור הפנייה. אם הגעת לכאן ללא קישור, אנא פנה לצוות V-me",
    });
  }

  const user = new User({
    firstname,
    lastname,
    sex,
    age,
    city,
    phone,
    email,
    referrer,
  });

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

    // Try to save the user in MongoDB
    await user.save();

    res
      .status(200)
      .json({ message: "Contact created and email sent", data: response.data });
  } catch (error) {
    console.error("Submission error:", error.response?.data || error.message);

    // Check for HubSpot duplicate email error
    const hubSpotError = error.response?.data;
    const isHubSpotDuplicateError =
      error.response?.status === 409 ||
      hubSpotError?.message?.includes("already exists") ||
      hubSpotError?.category === "CONFLICT";

    if (isHubSpotDuplicateError) {
      return res.status(409).json({
        message: "נראה שנרשמת כבר עם כתובת מייל זו. אין צורך להירשם שוב :)",
      });
    }

    // Check for Mongoose/Mongoduplicate email error
    if (error.code === 11000 && error.keyPattern?.email) {
      return res.status(409).json({
        message: "נראה שנרשמת כבר עם כתובת מייל זו. אין צורך להירשם שוב :)",
      });
    }

    // Check for other validation errors
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: `נתונים לא תקינים: ${error.message} אנא בדוק את השדות ונסה שוב.`,
      });
    }

    // Fallback server error
    res.status(500).json({
      message: "אירעה שגיאה בשרת... אנא נסו שוב בעוד מספר דקות.",
    });
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
