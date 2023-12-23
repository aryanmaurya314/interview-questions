const os = require("os");

// print os in nodejs
console.log("Printing os details: ");
console.log({
  osType: os.type(),
  uptime: os.uptime(), // in seconds
  machine: os.machine(),
  hostname: os.hostname(),
  homeDirectory: os.homedir(),
  arch: os.arch(),
  userInfo: os.userInfo(),
});
