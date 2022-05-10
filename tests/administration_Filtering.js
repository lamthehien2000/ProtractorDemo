let administrationPage = require('../pages/administrationPage.js');
let homepage = require('../pages/homepage.js');

describe('Filtering', function(){

    it('Filtering = inactive', function(){
        
        browser.waitForAngularEnabled(false);
        
        //browser.get('https://amdaxportal-qc.azurewebsites.net/');
        homepage.get('https://amdaxportal-dev.azurewebsites.net/user-management');
        
        var browserWait = protractor.ExpectedConditions;

         //Wait for the element to appear
         browser.wait(browserWait.presenceOf($('.ms-List')), 30000);
         
         //element(by.cssContainingText('.menu-item-label','Accounts')).click();
         browser.sleep(5000);

        administrationPage.filterButton_select();

        //Select Inactive option
        element(by.id('inactive_UserManagement')).click();   
        browser.sleep(5000);        


        browser.wait(browserWait.presenceOf($('.icon.has-text-danger.is-small')), 5000);

        browser.sleep('10000');
    });

});