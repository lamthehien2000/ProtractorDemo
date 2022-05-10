let homepage = require('../pages/homepage.js');
//let dashboardPage = require('../pages/dashboardPage.js');

describe('navigation function on dashboard', function(){

    it('navigate to Accounts option', function(){
        
        browser.waitForAngularEnabled(false);
        
        //browser.get('https://amdaxportal-qc.azurewebsites.net/');
        homepage.get('https://amdaxportal-qc.azurewebsites.net/account-management');

       // var browserWait = protractor.ExpectedConditions;
        // Waits for the element with id 'abc' to be present on the dom.
       // browser.wait(browserWait.presenceOf($('#signInName')), 30000);

        //fill in username and password, then NEXT
        //element(by.id('signInName')).sendKeys('dev-compl@amdax.com');
        //homepage.enterSignInName('dev-compl@amdax.com');
        
        //element(by.id('password')).sendKeys('Abtvn@20108');
       // homepage.enterPassword('Abtvn@20108');

        // element(by.id('next')).click();
       // homepage.clickSignIn();

       

        //Select Accounts option

        browser.sleep('30000');
    });

});