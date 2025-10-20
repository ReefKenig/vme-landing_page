import cron from "node-cron";
import mongoose from "mongoose";
import User from "../schemas/User.js"; // your Mongoose model
import { sendWhatsapp } from "./whatsappService.js";

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/landingPage", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// --- Cron job ---
// Run every 10 minutes between 9:00–20:59, Sunday to Friday
cron.schedule("*/1 9-20 * * 0-5", async () => {
console.log("RUNNING CRON");

  try {
    // Get current Israel local time
    const now = new Date();
    const israelTime = now.toLocaleString("en-US", { timeZone: "Asia/Jerusalem" });
    const currentHour = new Date(israelTime).getHours();
    const currentDay = new Date(israelTime).getDay(); // 6 = Saturday

    // Extra safety: skip if Saturday
    if (currentDay === 6) {
      console.log("It's Saturday (Shabbat) – skipping reminders.");
      return;
    }

    const threeHoursAgo = new Date(Date.now() - 3 * 60 * 60 * 1000);

    // Find users added >3 hours ago who haven't booked
    const usersToRemind = await User.find({
      createdAt: { $lte: threeHoursAgo },
      calendlyBooked: false,
      reminderSent: false,
    });

    for (const user of usersToRemind) {
      // await sendWhatsapp(
      //   `whatsapp:${user.phoneNumber}`,
      //   `שלום ${user.name}, שכחת לקבוע פגישה עם היוצר של האפליקציה? לחץ כאן כדי לקבוע: https://calendly.com/yourname/beta-call`
      // );
      user.reminderSent = true;
      await user.save();
      console.log(`Sent WhatsApp reminder to ${user.firstname}`);
    }
  } catch (err) {
    console.error("Cron job error:", err);
  }
});
