const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const doctor = {
  email: "drvictor@practo.com",
  password: "123456"
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email === doctor.email && password === doctor.password) {
    res.json({ success: true, message: "Login successful" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
