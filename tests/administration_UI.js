let administrationPage = require('../pages/administrationPage.js');
let homepage = require('../pages/homepage.js');

describe('Administration', function(){

    it('Administration - UI Verification', function(){
        
        browser.waitForAngularEnabled(false);

        //browser.get('https://amdaxportal-qc.azurewebsites.net/');
        homepage.get('https://amdaxportal-dev.azurewebsites.net/user-management');
        
        var browserWait = protractor.ExpectedConditions;

         //Wait for the element to appear
         browser.wait(browserWait.presenceOf($('.ms-List')), 50000); //presence of list
         browser.sleep(30000);

         administrationPage.devCompl_select();
         browser.sleep(5000);

         browser.wait(browserWait.presenceOf($('.check.is-info')),1000); // presence of ON OFF switch
         browser.wait(browserWait.presenceOf($('.field.is-small')),2000); // presence of text fields
         browser.wait(browserWait.presenceOf($('.ms-Label'),'Compliance'),3000);
         browser.wait(browserWait.presenceOf($('.ms-Label'),'Admin'),4000);
         browser.wait(browserWait.presenceOf($('.ms-Label'),'Client Rep'),5000);  
         browser.wait(browserWait.presenceOf($('.icon.is-small'), 'Save'),6000);
         browser.wait(browserWait.presenceOf($('.icon.is-small'), 'Cancel'),7000);
         var textfields = $$('.field.is-small');
         expect(textfields.count()).toBe(3);
         browser.sleep(5000);
    });

});
