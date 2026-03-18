async function getPlayer() {
    const tag = document.getElementById("tag").value;

    const res = await fetch(`http://localhost:3000/player/${tag}`);
    const data = await res.json();

    document.getElementById("result").innerHTML =
        `Pseudo : ${data.name}`;
}
