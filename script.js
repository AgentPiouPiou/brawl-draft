// Met en MAJUSCULE automatiquement
function formatTag() {
    let input = document.getElementById("tag");
    input.value = input.value.toUpperCase();
}

// Appel backend
async function getPlayer() {
    let tag = document.getElementById("tag").value;

    if (!tag) {
        document.getElementById("result").innerText = "Entre un tag";
        return;
    }

    try {
        const res = await fetch(`http://localhost:3000/player/${tag}`);
        const data = await res.json();

        if (data.name) {
            document.getElementById("result").innerText =
                "Pseudo : " + data.name;
        } else {
            document.getElementById("result").innerText =
                "Erreur : joueur introuvable";
        }

    } catch (err) {
        document.getElementById("result").innerText =
            "Erreur serveur";
    }
}
