describe('Protractor Synchronization steps',function() {  


	it('Open None Angular js website Sync',function() {

    browser.waitForAngularEnabled(false);
    browser.get("http://www.itgeared.com/demo/1506-ajax-loading.html");
    
    element(by.css("a[href*='loadAjax']")).click();

    var EC = protractor.ExpectedConditions;
    browser.wait(EC.invisibilityOf(element(by.id("loader"))), 8000);

    element(by.id("results")).getText().then(function(result){
      console.log(result);
    });

	})
})