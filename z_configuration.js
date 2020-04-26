exports.config = {
  // launch locally when fields directConnect and seleniumAddress are not provided
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs:  [
          //'01_spec1.js',
          //'02_ElementBasics.js',
          //'03_ElementBasicsWithJasmine.js',
          //'04_ElementBasicsIfNotAngularWeb.js',
          //'05_ChainLocators.js',
          //'06_ElementAll.js',
          //'07_Functions.js',
          //'08_DropDown.js',
          //'09_Actions.js',
          //'11_Alerts.js',
          //'12_Frames.js',
          //'13_Sync.js',
          //'14_PracticeForm.js',
          //'17_basicsPageObjectMechanism.js',
          '18_setupAndTeardown.js',
          ],
  onPrepare: function() {
    //aquí se ponen aquellas cosas que queremos que se ejecuten siempre antes de un test
    browser.driver.manage().window().maximize();
  },
  capabilities: {
    //'browserName': 'firefox',
    //'browserName': 'internet explorer',
    //'browserName': 'MicrosoftEdge',
    'browserName': 'chrome',
    'goog:chromeOptions': {w3c: false},
  }

  };
