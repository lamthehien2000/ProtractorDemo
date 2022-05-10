let homepage = require('../pages/homepage.js');

describe('log in function', function(){

    it('log in test', function(){
        
        browser.waitForAngularEnabled(false);
        
        //browser.get('https://amdaxportal-qc.azurewebsites.net/');
        homepage.get('https://amdaxportal-qc.azurewebsites.net/');
        
        var browserWait = protractor.ExpectedConditions;
        
        // Waits for the element with id 'abc' to be present on the dom.
        browser.wait(browserWait.presenceOf($('#signInName')), 30000);

        //fill in username and password, then NEXT
        //element(by.id('signInName')).sendKeys('dev-compl@amdax.com');
        homepage.enterSignInName('dev-compl@amdax.com');
        
        //element(by.id('password')).sendKeys('Abtvn@20108');
        homepage.enterPassword('Abtvn@20108');

       // element(by.id('next')).click();
        homepage.clickSignIn();

         //Wait for the element to appear
         browser.wait(browserWait.presenceOf($('#app')), 30000);
         element(by.cssContainingText('.menu-item-label','Accounts')).click();
         
        
         browser.wait(browserWait.presenceOf($('#app')), 30000);

         browser.sleep('30000');
    });

});