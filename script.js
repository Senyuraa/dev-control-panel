let systemOn = true;

function toggleSystem() {
  systemOn = !systemOn;
  addLog(systemOn ? "System started" : "System stopped");
}

function addLog(msg) {
  const logs = document.getElementById("logs");
  const line = document.createElement("div");
  line.textContent = `[${new Date().toLocaleTimeString()}] ${msg || randomLog()}`;
  logs.prepend(line);
}

function changeTheme() {
  document.body.classList.toggle("alt-theme");
  addLog("Theme switched");
}

setInterval(() => {
  document.getElementById("cpu").textContent =
    Math.floor(Math.random() * 60) + "%";
  document.getElementById("ram").textContent =
    (Math.random() * 8).toFixed(1) + " GB";
}, 2000);
