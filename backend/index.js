const express = require('express');
const fetch = require('node-fetch'); // si tu utilises node-fetch
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const TOKEN = process.env.BRAWL_API_TOKEN;

// Route dynamique pour récupérer le pseudo à partir du tag
app.get('/player/:tag', async (req, res) => {
  const playerTag = req.params.tag.toUpperCase(); // toujours en majuscules

  try {
    const response = await fetch(`https://api.brawlstars.com/v1/players/${encodeURIComponent(playerTag)}`, {
      headers: { Authorization: `Bearer ${TOKEN}` }
    });

    if (!response.ok) return res.status(response.status).send('Erreur API Brawl Stars');

    const data = await response.json();
    return res.json({ name: data.name }); // renvoie uniquement le pseudo
  } catch (err) {
    console.error(err);
    return res.status(500).send('Erreur serveur');
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
