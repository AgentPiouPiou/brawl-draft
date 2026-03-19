const API = "https://brawl-draft-zeta.vercel.app/api/player";

async function loadPlayer() {
  const tag = document.getElementById("tag").value;

  const res = await fetch(`${API}?tag=${encodeURIComponent(tag)}`);
  const data = await res.json();

  document.getElementById("output").textContent =
    JSON.stringify(data, null, 2);
}
