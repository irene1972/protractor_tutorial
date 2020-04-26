'use strict';

//Corregido por el profesor. It works!!
describe('Actions Demo OK by Teacher', function() {
    it('Open holodify web', async function() {
   
     await browser.waitForAngularEnabled(false);
     await browser.get('https://www.holidify.com/places/barcelona/');
      
     await element(by.id('header-autocomplete')).sendKeys('london');
     await browser.sleep(2000);
     await browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
     await browser.sleep(2000);
     await browser.actions().sendKeys(protractor.Key.ENTER).perform();
   
      });
      
});
		