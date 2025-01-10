const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const config = require("./config/config");
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(express.json());

// Enable CORS for all origins
app.use(cors());

mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Database connected successfully"))
  .catch((err) => console.error("Database connection error:", err));

app.use("/api/users", userRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});