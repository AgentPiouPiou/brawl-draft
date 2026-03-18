const express = require("express");
const axios = require("axios");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/player/:tag", async (req, res) => {
    try {
        const tag = encodeURIComponent(req.params.tag);

        const response = await axios.get(
            `https://api.brawlstars.com/v1/players/${tag}`,
            {
                headers: {
                    Authorization: `Bearer ${process.env.API_KEY}`
                }
            }
        );

        res.json({ name: response.data.name });

    } catch (e) {
        res.status(500).json({ error: "Erreur API" });
    }
});

app.listen(3000, () => console.log("Server running"));
