function calculator(){

  this.firstinput = element(by.model("first"));
  this.secondinput = element(by.model("second"));
  this.gobutton = element(by.id("gobutton"));
  this.result = element(by.css("h2.ng-binding"));

  this.getURL = function(){
    browser.get('http://juliemr.github.io/protractor-demo/');
  }
}

module.exports = new calculator();