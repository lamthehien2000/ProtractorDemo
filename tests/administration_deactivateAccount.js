let administrationPage = require('../pages/administrationPage.js');
let homepage = require('../pages/homepage.js');

describe('Administration page functionality', function(){

    it('Deactivate an account', function(){
        
        browser.waitForAngularEnabled(false);
        
        //browser.get('https://amdaxportal-qc.azurewebsites.net/');
        homepage.get('https://amdaxportal-dev.azurewebsites.net/user-management');
        
        var browserWait = protractor.ExpectedConditions;

         //Wait for the element to appear
         browser.wait(browserWait.presenceOf($('.ms-ListItem-secondaryText')), 50000);
         
         //element(by.cssContainingText('.menu-item-label','Accounts')).click();
         
         administrationPage.devCompl_select();

        browser.wait(browserWait.presenceOf($('.card-content')), 50000);
        administrationPage.onOffSwitch_select();
        
        //Select SAVE button
        administrationPage.saveButton_select();

        //wait confirmation dialogue and click YES
        browser.wait(browserWait.presenceOf($('.ms-Dialog-title')), 50000);
       
    //    browser.wait(browserWait.elementToBeClickable($('#app > div > div:nth-child(3) > div > div.layout_right > div:nth-child(1) > span > div.ms-Dialog.is-open > div.ms-Dialog-actions > div > button.ms-Button.ms-Button--primary')), 5000);

         administrationPage.confirmDialogueYes_select();
        
        browser.wait(browserWait.presenceOf($('.snackbar.is-success.is-bottom-right.fadeOut.v-leave-to')), 10000);
        var successText = element(by.css('.text'));
        expect(successText.getText()).toEqual('Success');

        browser.sleep('10000');

        //Verify On/off Switch text 'NO'
        administrationPage.devCompl_select();
        browser.wait(browserWait.presenceOf($('.card-content')), 50000);
        var onOffSwitch_text = element(by.css('.control-label'));
        expect(onOffSwitch_text.getText()).toEqual('No');


        browser.sleep('10000');
    });

});