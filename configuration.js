exports.config = {
  // launch locally when fields directConnect and seleniumAddress are not provided
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['03_ElementBasics_with_jasmine.js'],
  
  capabilities: {
    //'browserName': 'firefox',
    //'browserName': 'internet explorer',
    //'browserName': 'MicrosoftEdge',
    'browserName': 'chrome',
  }
  };
