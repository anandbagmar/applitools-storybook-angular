module.exports = {
  apiKey: process.env.APPLITOOLS_API_KEY,
  serverUrl: "https://eyes.applitools.com",
  batchName: "Storybook_Angular - Eyes & UFG",
  testConcurrency: 10,
  showLogs: false,
  browser: [
    // See https://applitools.com/tutorials/sdks/storybook/browsers for additional supported browsers and devices.
    { width: 1024, height: 768, name: "chrome" },
    { width: 1400, height: 1200, name: "firefox" },
    { width: 1600, height: 1200, name: "edgechromium" },
    { width: 1200, height: 1200, name: "safari" },
    { deviceName: "Galaxy S20" },
    { deviceName: "iPhone 15 Pro" },
    { deviceName: "Pixel 2", screenOrientation: "portrait" },
    { deviceName: "Nexus 10", screenOrientation: "landscape" },
  ],
};
