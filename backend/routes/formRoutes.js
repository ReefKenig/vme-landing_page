import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/submit", async (req, res) => {
  const { firstname, lastname, sex, age, city, phone, email, referrer } =
    req.body;

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
        age: age.toString(),
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

    res
      .status(200)
      .json({ message: "Contact created in HubSpot", data: response.data });
  } catch (error) {
    console.error("HubSpot error:", error.response?.data || error.message);
    res.status(500).json({ message: "Failed to create contact in HubSpot" });
  }
});

export default router;
