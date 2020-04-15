'use strict';

describe('Protractor Element Demo 3', function() {
	it('Locators', function() {
		browser.waitForAngularEnabled(false);
		browser.get('https://www.google.com/');

		browser.waitForAngularEnabled(true);
		browser.get('http://juliemr.github.io/protractor-demo/');
		
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("5");
		
		element(by.id("gobutton")).click();

		//element(by.css("h2.ng-binding")).getText().then(function(result){
			//console.log(result);
		//});

		//Jasmine takes care of promise resolve
		//ESPERAMOS de algo que SEA algo
		//expect(element(by.css("h2.ng-binding")).getText()).toBe("10");
		expect(element(by.css("h2.ng-binding")).getText()).toBe("8");


		
		
	  })
	});