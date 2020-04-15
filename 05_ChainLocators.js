'use strict';

describe('Chain locators demo', function() {
	it('Open Angular js website', function() {
	  browser.get('http://juliemr.github.io/protractor-demo/');
		
		//
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("5");
		
		//si queremos cambiar el operador por defecto
		//element(by.model('operator')).element(by.css('option:nth-child(4)')).click();

		element(by.id("gobutton")).click();

		element(by.repeater('result in memory')).element(by.css("td:nth-child(3)")).getText().then(function(resul){
			console.log(resul);
		});


		
		
	  })
	});