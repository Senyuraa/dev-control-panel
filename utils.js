function randomLog() {
  return systemLogs[Math.floor(Math.random() * systemLogs.length)];
}

function randomCPU() {
  return Math.floor(Math.random() * 70) + "%";
}

function randomRAM() {
  return (Math.random() * 8).toFixed(1) + " GB";
}

function randomNetwork() {
  return metrics.network[
    Math.floor(Math.random() * metrics.network.length)
  ];
}

function formatTime() {
  return new Date().toLocaleTimeString();
}
