'use strict';

describe('Chain locators demo all elements', function() {
	it('Open Angular js website', function() {
	  browser.get('http://juliemr.github.io/protractor-demo/');
		
		//
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("5");
		element(by.id("gobutton")).click();

		//element(by.repeater('result in memory')).element(by.css("td:nth-child(3)")).getText().then(function(resul){
			//console.log(resul);
		//});

		element(by.model("first")).sendKeys("2");
		element(by.model("second")).sendKeys("7");
		element(by.id("gobutton")).click();

		element(by.model("first")).sendKeys("1");
		element(by.model("second")).sendKeys("4");
		element(by.id("gobutton")).click();

		//element.(by.repeater('result in memory')).element(by.css("td:nth-child(3)")).getText().then(function(resul){
			//console.log(resul);
		//});

		//devuelve la array con tres filas
		element.all(by.repeater('result in memory')).count().then(function(resul){
			console.log(resul);
			console.log('********');
		});

		//hacemos un loop sobre la array de tres filas extrayendo el texto de la útima columna de cada fila
		element.all(by.repeater('result in memory')).each(function(item){
			item.element(by.css("td:nth-child(3)")).getText().then(function(resul){
				console.log(resul);
			});
		});


		
		
	  })
	});