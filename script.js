// METTRE ICI L'URL DE TON BACKEND SUR RENDER
const backendURL = "https://brawl-draft-backend.onrender.com";

const input = document.getElementById("playerTag");
const button = document.getElementById("submitBtn");
const result = document.getElementById("result");

// transforme en majuscule et ajoute # au début si absent
input.addEventListener("input", () => {
  let val = input.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
  if (!val.startsWith("#")) val = "#" + val;
  input.value = val;
});

button.addEventListener("click", async () => {
  const tag = input.value;
  if (!tag) return;

  result.textContent = "Chargement...";

  try {
    const res = await fetch(`${backendURL}/player/${tag}`);
    if (!res.ok) throw new Error("Erreur serveur");

    const data = await res.json();
    result.textContent = `Pseudo : ${data.name}`;
  } catch (err) {
    console.error(err);
    result.textContent = "Erreur serveur";
  }
});
