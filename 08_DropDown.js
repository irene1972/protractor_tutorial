'use strict';

describe('Chain locators demo all elements', function() {

	function calc(a, b, operator){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);

		//hacemos un loop de todos los operadores posibles para ver cual de ellos coincide con la variable operador que le enviamos
		element.all(by.tagName("option")).each(function(item){
			item.getAttribute("value").then(function(value){
				console.log(value);
				if( value == operator ){
					item.click();
				}

			});
		});

		element(by.id("gobutton")).click();
	}

	it('Open Angular js website', function() {
	  browser.get('http://juliemr.github.io/protractor-demo/');
		
		//element(by.model("first")).sendKeys("3");
		//element(by.model("second")).sendKeys("5");
		//element(by.id("gobutton")).click();

		calc( 3, 5, 'ADDITION' );
		calc( 2, 7, 'DIVISION' );
		calc( 1, 4, 'MODULO' );
		calc( 3, 8, 'MULTIPLICATION' );
		calc( 4, 3, 'SUBTRACTION' );


		
		element.all(by.repeater('result in memory')).count().then(function(resul){
			console.log(resul);
			console.log('********');
		});

		element.all(by.repeater('result in memory')).each(function(item){
			item.element(by.css("td:nth-child(3)")).getText().then(function(resul){
				console.log(resul);
			});
		});
		

		
		
	  })
	});