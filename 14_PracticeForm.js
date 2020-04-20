describe('Protractor Form steps',function() {  

  function selectItems(deviceName){
    element.all(by.tagName("app-card")).each(function(item){
      item.element(by.css("h4[class='card-title'] a")).getText().then(function(textName){
        if( textName == deviceName ){
          //click on Add button
          item.element(by.css("button[class*='btn-info']")).click();

          
        }
      });

    });
  }

	it('Open Angular js website Form',function() {

    browser.get("https://qaclickacademy.github.io/protocommerce/");
    
    //Verificamos que obtenemos un mensaje de success al cumplimentar todos los campos mandatorios del formulario
    element(by.name("name")).sendKeys("Mystudents");
    //element(by.name("email")).sendKeys("Mystudents");
    element(by.css("input[name='email']")).sendKeys("mystudents@gmail.com");
    element(by.id("exampleInputPassword1")).sendKeys("password2");
    
    //element(by.id("exampleCheck1")).click();
    element(by.css("input[type='checkbox']")).click();
    
    element(by.cssContainingText("[id='exampleFormControlSelect1'] option", "Female")).click();
    
    //element.all(by.name("inlineRadioOptions")).get(0).click();
    element.all(by.name("inlineRadioOptions")).first().click();
    
    //element(by.css("input[value='Submit']")).click().then(function(){
    element(by.buttonText("Submit")).click().then(function(){
      browser.sleep(2000);
      element(by.css("div[class*='success']")).getText().then(function(textSuccess){
        console.log(textSuccess);
      });
    });

    //Verificamos que aparece un mensaje de error (al poner solo un caracter en el input name)
    element(by.name("name")).clear();
    element(by.name("name")).sendKeys("M").then(function(){
      element(by.css("div[class*='danger']")).getText().then(function(textDanger){
        browser.sleep(2000);
        console.log(textDanger);
      });
    });
    
    //Probar el link a la shop 
    //element(by.css("a[href*='shop']")).click().then(function(){
    element(by.linkText("Shop")).click().then(function(){
      //take 4 cards into list
      //go throw each index in the list 
      //get the title
      //if title = desired title then in that index I will select add button
      
      /*
      element.all(by.tagName("app-card")).each(function(item){
        item.element(by.css("h4[class='card-title'] a")).getText().then(function(textName){
          if( textName == 'Samsung Note 8' ){
            //click on Add button
            item.element(by.css("button[class*='btn-info']")).click();

            
          }
        });

      });
      */

      selectItems('Samsung Note 8');
      selectItems('Nokia Edge');

      element(by.partialLinkText("Checkout")).getText().then(function(textCheckout){
        //console.log(textCheckout);
        browser.sleep(3000);
        var res = textCheckout.split("(");
        var num = Number(res[1].trim().charAt(0));
        expect(num).toBe(2);
        
      });

    });

	})
})