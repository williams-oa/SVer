const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// Define your routes
app.get("/api/Students", (req, res) => {
  res.json({ users: ["studentOne", "studentTwo", "studentThree"] });
});

app.get("/api/Universities", (req, res) => {
  res.json({ users: ["UniversityOne", "UniversityTwo", "UniversityThree"] });
});

app.get("/api/Vendors", (req, res) => {
  res.json({ users: ["VendorOne", "VendorTwo", "VendorThree"] });
});

app.listen(5000, () => {
  console.log("server is listening");
});
