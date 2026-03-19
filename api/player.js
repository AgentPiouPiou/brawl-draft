export default async function handler(req, res) {
  const { tag } = req.query;

  const response = await fetch(
    `https://api.brawlstars.com/v1/players/${encodeURIComponent(tag)}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.BRAWL_TOKEN}`
      }
    }
  );

  const data = await response.json();

  res.status(200).json(data);
}
