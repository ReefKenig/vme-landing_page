import mongoose from "mongoose";

const uri = "mongodb://localhost:27017/landingPage"; // replace with your MongoDB URI
mongoose.connect(uri, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB!");
});

export default mongoose;
