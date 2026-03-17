require("dotenv").config(); //for local running only

if (!process.env.EMAIL || !process.env.PASSWORD) {
  throw new Error("missing email or password environment variables");
}

const express = require("express");
const cors = require("cors");
const { sendRegistrationMail } = require("./src/mailer");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/register", async (req, res) => {
  const { name, email, contact, timeSlot } = req.body;
  if (!name || !email || !contact || !timeSlot) {
    return res.status(400).json({ error: "missing required fields" });
  }

  try {
    await sendRegistrationMail({ name, email, contact, timeSlot });
    res.status(200).json({ message: "registration successful admin notified" });
  } catch (error) {
    console.error("error: ", error);
    res.status(500).json({ error: "failed to send notification to admin" });
  }
});

const PORT = process.env.PORT || 3000; //for local otherwise railway will auto assign port
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
