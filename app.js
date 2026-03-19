const modeSelect = document.getElementById("mode");
const mapSelect = document.getElementById("map");

// charger modes
modes.forEach(mode => {
  const option = document.createElement("option");
  option.value = mode;
  option.textContent = mode;
  modeSelect.appendChild(option);
});

// changer maps quand mode change
modeSelect.addEventListener("change", () => {
  loadMaps();
});

function loadMaps() {
  const selectedMode = modeSelect.value;
  mapSelect.innerHTML = "";

  maps[selectedMode].forEach(map => {
    const option = document.createElement("option");
    option.value = map;
    option.textContent = map;
    mapSelect.appendChild(option);
  });
}

// lancer draft
function startDraft() {
  const selectedMap = mapSelect.value;

  const sorted = [...brawlers].sort((a, b) => b.winrate - a.winrate);

  const list = document.getElementById("recommendations");
  list.innerHTML = "";

  sorted.forEach(brawler => {
    const li = document.createElement("li");
    li.textContent = `${brawler.name} (WR: ${brawler.winrate}%)`;
    list.appendChild(li);
  });
}

// init
loadMaps();
