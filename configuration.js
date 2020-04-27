var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

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
          //'09_Actions_bis.js',
          //'11_Alerts.js',
          //'12_Frames.js',
          //'13_Sync.js',
          //'14_PracticeForm.js',
          //'17_basicsPageObjectMechanism.js',
          //'18_setupAndTeardown.js',
          //'19_JasmineDataProvider.js',
          '20_JasmineProtractorHtmlReport.js'
          ],
  onPrepare: function() {
    //aquí se ponen aquellas cosas que queremos que se ejecuten siempre antes de un test
    browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(
      new Jasmine2HtmlReporter({
        savePath: 'target/screenshots'
      })
    );
  },
  suites:{
      Smoke:[
          '05_ChainLocators.js',
          '08_DropDown.js',
      ],
      Regression: '02_ElementBasics.js'
  },
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  },
  capabilities: {
    //'browserName': 'firefox',
    //'browserName': 'internet explorer',
    //'browserName': 'MicrosoftEdge',
    'browserName': 'chrome',
    'goog:chromeOptions': {w3c: false},
  }

  };
