const onvif = require('node-onvif');
const fs = require('fs');
var sourceFile = require('./config.js');

// Create an OnvifDevice object
let device = new onvif.OnvifDevice({
  xaddr: sourceFile.xaddr,
  user : sourceFile.user,
  pass : sourceFile.pass
});

// Initialize the OnvifDevice object
device.init().then(() => {
  // Get the data of the snapshot
  console.log('fetching the data of the snapshot...');
  return device.fetchSnapshot();
}).then((res) => {
  // Save the data to a file
  fs.writeFileSync('snapshot.jpg', res.body, {encoding: 'binary'});
  console.log('Done!');
}).catch((error) => {
  console.error(error);
});
