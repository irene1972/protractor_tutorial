'use strict';

describe('Protractor Element Demo', function() {

	var obj = require("./15_JsObjectDemo.js");

	beforeEach(function() {
		
		obj.getURL();

	});

	it('Testing Calculator function', function() {

		obj.firstinput.sendKeys("3");
		obj.secondinput.sendKeys("5");
		
		obj.gobutton.click();

		obj.result.getText().then(function(resul){
			console.log(resul);
		});

		expect(obj.result.getText()).toBe("8");
		
		});
		
		afterEach(function() {
			console.log("Test is completed");
		});

	});