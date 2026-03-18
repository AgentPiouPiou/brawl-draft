import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3000;
const API_TOKEN = process.env.BRAWL_API_TOKEN;  // mettre ta clé ici via .env

app.get("/player/:tag", async (req, res) => {
  const tag = req.params.tag.toUpperCase().replace("#", "%23");
  try {
    const response = await fetch(`https://api.brawlstars.com/v1/players/${tag}`, {
      headers: { Authorization: `Bearer ${API_TOKEN}` }
    });
    const data = await response.json();
    res.json({ name: data.name });
  } catch (e) {
    res.status(500).json({ error: "Erreur serveur" });
  }
});

app.listen(PORT, () => console.log(`Backend démarré sur ${PORT}`));
