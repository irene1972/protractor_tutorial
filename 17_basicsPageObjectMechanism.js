'use strict';

describe('Protractor Element Demo', function() {

	var obj = require("./15_JsObjectDemo.js");

	it('Locators', function() {
		
	  obj.getURL();
		
		obj.firstinput.sendKeys("3");
		obj.secondinput.sendKeys("5");
		
		obj.gobutton.click();

		obj.result.getText().then(function(resul){
			console.log(resul);
		});

		expect(obj.result.getText()).toBe("8");
		
	  })
	});