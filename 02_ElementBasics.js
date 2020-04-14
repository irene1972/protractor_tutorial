'use strict';

describe('Protractor Element Demo', function() {
	it('Locators', function() {
	  browser.get('http://juliemr.github.io/protractor-demo/');
		
		element(by.model("first")).sendKeys("3");
		//*Nota: no es necesario esperar 5 segundos en este paso para ver resultados porque ahora se está realizando la espera en el último step que tiene el then
		//element(by.model("second")).sendKeys("5").then(function(){
			//browser.sleep(5000);
		//});
		element(by.model("second")).sendKeys("5");
		
		element(by.id("gobutton")).click();

		//*Nota2: aquí tenemos dos formas válidas diferentes de seleccionar el texto contenido en un elemento by css
		//element(by.css("h2[class='ng-binding']")).getText();
		//element(by.css("h2.ng-binding")).getText();


		//*Nota3: 	
		// console.log(element(by.css("h2.ng-binding")).getText()); ----> Importante!! esta línea no funcionará de esta forma ha de escribirse como está funcionando más abajo
		//				¿porqué?
		//				real output will display only when you resolve promise
		//				recordemos...
		//				protractor for 90% of methods will resolve promise automatically
		//				los datos recuperados del navegador no resuelven la promesa (10%)
		//				there could be 2 potential problems hwere. 
		//					1 - Secuence is not garanteed 
		//					2 - El resultado debe extraerse solo cuando la promesa ha sido resuelta y no antes!!
		// para ello este handicap se resuelve de la siguiente forma
		element(by.css("h2.ng-binding")).getText().then(function(result){
			console.log(result);
		});



		
		
	  })
	});