const input = document.getElementById("playerTag");
const button = document.getElementById("submitBtn");
const result = document.getElementById("result");

// Ajoute # au début si besoin
input.value = "#";

// Forcer majuscules à chaque saisie
input.addEventListener("input", () => {
    let val = input.value.toUpperCase();

    // toujours garder # au début
    if (!val.startsWith("#")) val = "#" + val.replace(/^#*/, "");
    
    input.value = val;
});

// Click sur Valider
button.addEventListener("click", async () => {
    const tag = input.value.replace("#",""); // on envoie le tag sans #

    result.textContent = "Chargement...";

    try {
        const res = await fetch(`https://brawl-draft-backend.onrender.com/player/${tag}`);
        if (!res.ok) throw new Error("Erreur serveur");

        const data = await res.json();

        // Affiche juste le pseudo pour l'instant
        result.textContent = data.name || "Aucun résultat";

    } catch (err) {
        result.textContent = err.message;
    }
});
