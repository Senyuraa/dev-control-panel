const settings = {
  autoDeploy: false,
  errorTracking: true,
  debugMode: false,
  performanceBoost: false,
};

function toggleSetting(key) {
  if (settings.hasOwnProperty(key)) {
    settings[key] = !settings[key];
  }
}
