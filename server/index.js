const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, "../client"))); // serve frontend

const API_KEY = "64b73b5f330948c599d643b7f013068f";

app.get("/news", async (req, res) => {
  const query = req.query.q || "India";
  try {
    const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
