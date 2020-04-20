//import { Driver } from "selenium-webdriver/chrome";

	
describe('Protractor Frames',function() {  


	it('Open None Angular js website that contains a Frame',function() {

    browser.waitForAngularEnabled(false);
    
    browser.driver.manage().window().maximize();

    browser.get("https://www.rahulshettyacademy.com/AutomationPractice/");
    
    //Esto así, no funcionará, porque está dentro de un Frame, y ha de ponerse un step que cambie al iframe (switchTo)...
    //element(by.css("a[href*='sign_in']")).getText().then(function(text_ref){
      //console.log("text_ref");
    //});
    
    browser.switchTo().frame('courses-iframe');
    element(by.css("a[href*='sign_in']")).getText().then(function(text_ref){
      console.log(text_ref);
    });

	})
})