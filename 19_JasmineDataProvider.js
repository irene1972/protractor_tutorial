'use strict';

describe('Protractor Element Demo', function() {

	var obj = require("./15_JsObjectDemo.js");
	var using = require('jasmine-data-provider');
	var objdata = require("./DataProvider.js");

	beforeEach(function() {
		
		obj.getURL();

	});

	using(objdata.DataDriven, function (data, description) {
			it('Testing Calculator function', function() {

				//obj.firstinput.sendKeys("8");
				//obj.secondinput.sendKeys("1");
		
				obj.firstinput.sendKeys(data.firstinput);
				obj.secondinput.sendKeys(data.secondeinput);
				
				obj.gobutton.click();
		
				obj.result.getText().then(function(resul){
					console.log(resul);
				});
		
				//expect(obj.result.getText()).toBe("9");
				expect(obj.result.getText()).toBe(data.result);
				
				});
		});
		
		afterEach(function() {
			console.log("Test is completed");
		});

	});