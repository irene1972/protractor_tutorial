exports.config = {
  // launch locally when fields directConnect and seleniumAddress are not provided
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs:  [
          //'01_spec1.js',
          //'02_ElementBasics.js',
          //'03_ElementBasicsWithJasmine.js',
          //'04_ElementBasicsIfNotAngularWeb.js',
          '05_ChainLocators.js',
          //'06_ElementAll.js',
          //'07_Functions.js',
          //'08_DropDown.js',
          ],
  capabilities: {
    //'browserName': 'firefox',
    //'browserName': 'internet explorer',
    //'browserName': 'MicrosoftEdge',
    'browserName': 'chrome',
  }

  };
