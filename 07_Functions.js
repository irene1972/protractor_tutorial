'use strict';

describe('Chain locators demo all elements', function() {

	function add(a, b){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click();
	}

	it('Open Angular js website', function() {
	  browser.get('http://juliemr.github.io/protractor-demo/');
		
		//element(by.model("first")).sendKeys("3");
		//element(by.model("second")).sendKeys("5");
		//element(by.id("gobutton")).click();

		add( 3, 5 );
		add( 2, 7 );
		add( 1, 4 );
		add( 3, 8 );
		add( 4, 3 );

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