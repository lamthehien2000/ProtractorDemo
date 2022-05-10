let homepage = function(){

    let signInName_input = element(by.id('signInName'));
    let password_input =  element(by.id('password'));
    let signIn_input = element(by.id('next'));

    this.get = function(url){
        browser.get(url);
    };

    this.enterSignInName = function(signInName_text){
        signInName_input.sendKeys(signInName_text);
        
    };

    this.enterPassword = function(password_text){
        password_input.sendKeys(password_text);
    };

    this.clickSignIn = function(){
        signIn_input.click();
    };

};

module.exports = new homepage();