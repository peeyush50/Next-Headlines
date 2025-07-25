const express = require("express");
const axios = require("axios");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const API_KEY = "64b73b5f330948c599d643b7f013068f";
const NEWS_API_URL = "https://newsapi.org/v2/everything";

app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));

app.get("/news", async (req, res) => {
    const query = req.query.q || "India";

    try {
        const response = await axios.get(`${NEWS_API_URL}?q=${query}&apiKey=${API_KEY}`);
        res.json(response.data);
    } catch (err) {
        console.error("Error fetching news:", err.message);
        res.status(500).json({ error: "Failed to fetch news" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
