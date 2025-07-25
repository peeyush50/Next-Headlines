const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());

const API_KEY = "64b73b5f330948c599d643b7f013068f";
const BASE_URL = "https://newsapi.org/v2/everything?q=";

app.get("/news", async (req, res) => {
    const query = req.query.q || "India";
    try {
        const response = await axios.get(`${BASE_URL}${query}&apiKey=${API_KEY}`);
        res.json(response.data);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ status: "error", message: "Failed to fetch news" });
    }
});

app.listen(PORT, () => {
    console.log(`✅ Backend running on http://localhost:${PORT}`);
});
