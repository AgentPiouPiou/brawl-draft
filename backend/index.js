import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const TOKEN = process.env.BRAWL_API_TOKEN;

app.get("/player/:tag", async (req, res) => {
  const rawTag = req.params.tag.toUpperCase();
  const tag = encodeURIComponent(rawTag.replace(/^#/, ""));

  try {
    const response = await fetch(
      `https://api.brawlstars.com/v1/players/${tag}`,
      { headers: { Authorization: `Bearer ${TOKEN}` } }
    );

    if (!response.ok) {
      const text = await response.text();
      console.error("Brawl Stars API error:", text);
      return res.status(response.status).send("Erreur API Brawl Stars");
    }

    const data = await response.json();
    return res.json({ name: data.name });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Erreur serveur");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
