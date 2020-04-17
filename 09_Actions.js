'use strict';

//No ha funcionado, el primero porque no es capaz de hacer acciones
//El segundo porque la web del tuturial ya no existe

describe('Actions Demo', function() {
	it('Open holodify web', function() {

		browser.waitForAngularEnabled(false);
	  browser.get('https://www.holidify.com/places/barcelona/');
		
		browser.actions().mouseMove(element(by.id('header-autocomplete')).sendKeys('london')).perform();
		
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		/*
		browser.actions().click().perform().then(function(){
			browser.sleep(5000);
		});
		*/

		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
			browser.sleep(5000);
		});


	  })
	});
	
describe('Actions demo2',function() {  


	it('Open Posse website',function() {
		//moving the mouse into that textbox
		//sendkeys
		//keyboard arrow
		//Keyboard enter
		browser.waitForAngularEnabled(true);
		browser.get("https://posse.com/");
		element(by.model("userInputQuery")).sendKeys("river");
		browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("london")).perform();



		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){

			browser.sleep(2000);

			expect(element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()).toEqual(7);


			element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).get(0).click();
			element(by.css("a[ng-href*='London/River Island']")).click().then(function(){
				
				browser.getTitle().then(function(title){
					console.log( title + "-> Title of the page before switchng" );
				});

				browser.getAllWindowHandles().then(function(handles){

					browser.switchTo().window(handles[1]);
					browser.getTitle().then(function(title){

						console.log( title + "-> Title of the page after switchng" );
						//browser.sleep(3000);

					});
					
					
				});

			})

		})

	})
		})