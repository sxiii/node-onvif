const onvif = require('node-onvif');
var sourceFile = require('./config.js');

// Create an OnvifDevice object
let device = new onvif.OnvifDevice({
  xaddr: sourceFile.xaddr,
  user : sourceFile.user,
  pass : sourceFile.pass
});

// Initialize the OnvifDevice object
device.init().then((info) => {
  // Show the detailed information of the device.
  console.log(JSON.stringify(info, null, '  '));
}).catch((error) => {
  console.error(error);
});
