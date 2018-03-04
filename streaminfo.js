const onvif = require('node-onvif');
var sourceFile = require('./config.js');

// Create an OnvifDevice object
let device = new onvif.OnvifDevice({
  xaddr: sourceFile.xaddr,
  user : sourceFile.user,
  pass : sourceFile.pass
});

// Initialize the OnvifDevice object
device.init().then(() => {
  // Get the UDP stream URL
  let url = device.getUdpStreamUrl();
  console.log(url);
}).catch((error) => {
  console.error(error);
});
