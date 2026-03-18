async function getPlayer() {
    let tag = document.getElementById("tag").value;

    try {
        const res = await fetch(`http://localhost:3000/player/${tag}`);
        const data = await res.json();

        console.log(data); // 🔥 debug

        if (data.name) {
            document.getElementById("result").innerText =
                "Pseudo : " + data.name;
        } else {
            document.getElementById("result").innerText =
                "Erreur API";
        }

    } catch (err) {
        document.getElementById("result").innerText =
            "Backend non accessible";
    }
}
