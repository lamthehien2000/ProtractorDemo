let administrationPage = require('../pages/administrationPage.js');
let homepage = require('../pages/homepage.js');

describe('Roles editing - Adding and removing roles', function(){

    it('Adding and removing some roles', function(){
        
        browser.waitForAngularEnabled(false);
        
        //browser.get('https://amdaxportal-qc.azurewebsites.net/');
        homepage.get('https://amdaxportal-dev.azurewebsites.net/user-management');
        
        var browserWait = protractor.ExpectedConditions;
         //Wait for the element to appear
         browser.wait(browserWait.presenceOf($('.ms-List')), 30000);
         
         browser.sleep(10000);

        administrationPage.adminTester_select();

        browser.wait(browserWait.presenceOf($('.card-content')), 20000);
        
        administrationPage.checkbox_Admin_select();
        administrationPage.checkbox_ClientRepManager_select();
        administrationPage.checkbox_ComplianceManager_select();
        administrationPage.checkbox_Audit_select();
        administrationPage.checkbox_ClientRep_select();
        administrationPage.checkbox_Compliance_select();
        administrationPage.checkbox_FinanceMgr_select();
        administrationPage.checkbox_Operation_select();

        //Select SAVE button
        administrationPage.saveButton_select();

        //wait confirmation dialogue and click YES
        browser.wait(browserWait.presenceOf($('.ms-Dialog-title')), 50000);

         administrationPage.confirmDialogueYes_select();
        
        browser.wait(browserWait.presenceOf($('.snackbar.is-success.is-bottom-right.fadeOut.v-leave-to')), 10000);
        var successText = element(by.css('.text'));
        expect(successText.getText()).toEqual('Success');

        browser.sleep('10000');
    });

});