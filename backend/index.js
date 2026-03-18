// index.js - Backend BrawlDraft en ES Module
import express from "express";
import fetch from "node-fetch"; // ou 'undici' si Node >= 18
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const TOKEN = process.env.BRAWL_API_TOKEN;

// Route dynamique pour récupérer le pseudo d'un joueur
app.get("/player/:tag", async (req, res) => {
  const playerTag = req.params.tag.toUpperCase();

  try {
    const response = await fetch(
      `https://api.brawlstars.com/v1/players/${encodeURIComponent(playerTag)}`,
      { headers: { Authorization: `Bearer ${TOKEN}` } }
    );

    if (!response.ok) return res.status(response.status).send("Erreur API Brawl Stars");

    const data = await response.json();
    return res.json({ name: data.name });
  } catch (err) {
    console.error(err);
    return res.status(500).send("Erreur serveur");
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
