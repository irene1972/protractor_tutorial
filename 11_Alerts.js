'use strict';
	
describe('Protractor Alert steps',function() {  


	it('Open None Angular js website Alert',function() {

		browser.waitForAngularEnabled(false);
    browser.get("https://www.rahulshettyacademy.com/AutomationPractice/");
    
    //En esta ocasión el botón confirm NO abre una ventana, sino un alert. 
    //Por eso luego hacemos switch a un alert y NO a una ventana
    element(by.id('confirmbtn')).click().then(function(){
      browser.sleep(3000);
    });
    browser.switchTo().alert().accept().then(function(){
      browser.sleep(3000);
    });

    //Misma operación pulsando el botón cancelar del alert
    element(by.id('confirmbtn')).click().then(function(){
      browser.sleep(3000);
    });
    browser.switchTo().alert().dismiss().then(function(){
      browser.sleep(3000);
    });

	})
})