## Node ONVIF
This small source code repository helps you to write own nodejs-based ONVIF camera application or set up system hotkeys to use the camera. This repository aims to make the super-easy, basic camera controls with NodeJS. 

## Dependencies & requirements
* node
* node modules: xml2js, html, node-onvif
* npm
* any camera that supports ONVIF

## Functions
* Find cameras over the network
* Identify their UID, IPC and IP (onvifcamtest.js)
* Get information on found camera: manufacturer, model, firmware, serial number, id (caminfo.js)
* Find real RTSP stream address (streaminfo.js)
* Turn the camera left, right, up, down; zoom in & out (files: turnleft.js, turnright.js, turnup.js, turndown.js; zoomin.js, zoomout.js)
* Get snapshot from the camera (getsnapshot.js)

## Notes
* Not all PTZ functions work with all PTZ cameras (for example, zoom functions may absent)
* Not every camera has the same snapshot functionality (so, the getsnapshot might return 404 error)
* There might be some errors worth noting or fixing (if you find them, please create an issue here)

## How to use
.1. Install dependencies (npm, git and then npm modules): ubuntu sample - `sudo apt install npm git; npm install xml2js html node-onvif`
.2. Clone this repository: `git clone https://github.com/sxiii/node-onvif`
.3. Enter the repo directory: `cd node-onvif`
.4. Run the detection JS node script to find IP of the camera: `node onvifcamtest.js`
.5. Copy the IP & Port address to clipboard or remember them.
.6. Open the config.js file and replace the IP & Port with yours. Save & close the file.
.7. Now you can run any .js file in the folder like: `node streaminfo.js`

## Example of config.js file
Please replace the IP, port and user/pass combination according to found information (onvifcamtest.js output) and/or the datasheet of the camera. The file should look like this:
```
module.exports = { 
  xaddr: 'http://192.168.1.100:5000/onvif/device_service',
  user : 'admin',
  pass : '123456'
 };
```
All other scripts (except onvifcamtest.js) takes camera configuration from this file. 

### Sample output of onvifcamtest.js
```
Start the discovery process.
1 devices were found.
- urn:uuid:2419d68a-2dd2-21b2-a205-000C437D0EF6
  - IPC 10704807
  - http://192.168.1.100:5000/onvif/device_service
```

### Sample output of caminfo.js
```
{
  "Manufacturer": "Technology",
  "Model": "IPC",
  "FirmwareVersion": "21.00.00.35",
  "SerialNumber": "10704807",
  "HardwareId": "Ver 2.1"
}
```

### Sample output of streaminfo.js
```
rtsp://192.168.1.100:554/onvif1
```

### Sample output of getstapshot.js

### Sample output of any rotation or zoom files
```
Done!
```

## Further development, community help, issues etc.
I would like to improve this repo but not making it monstrous. If you have your commits for better ONVIF snapshot features or some other useful (but still small) functions, please add them. Found a bug? Make an issue in this repo. You can support my work - contact me on telegram @fakesnowden for details.

### Additional info
* NodeJS website: https://nodejs.org
* Credits to the samples from https://github.com/futomi/node-onvif
