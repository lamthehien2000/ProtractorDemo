let administrationPage = require('../pages/administrationPage.js');
let homepage = require('../pages/homepage.js');

describe('Administration page functionality', function(){

    it('activate an account', function(){
        
        browser.waitForAngularEnabled(false);
        
        //browser.get('https://amdaxportal-qc.azurewebsites.net/');
        homepage.get('https://amdaxportal-dev.azurewebsites.net/user-management');
        
        var browserWait = protractor.ExpectedConditions;

         //Wait for the element to appear
         browser.wait(browserWait.presenceOf($('.ms-List')), 30000);
         
         //element(by.cssContainingText('.menu-item-label','Accounts')).click();
         browser.sleep(10000);

         el = element(by.xpath('//span[.="dev-clientrep@amdax.com"]'));
         browser.executeScript('arguments[0].scrollIntoView()', el.getWebElement());

         administrationPage.devClientRep_select();

        browser.wait(browserWait.presenceOf($('.card-content')), 20000);

         el1 = element(by.cssContainingText('.button.no-border.is-info.is-outlined','Save'));
         browser.executeScript('arguments[0].scrollIntoView()', el1.getWebElement());

        administrationPage.onOffSwitch_select();
        
        //Select SAVE button
        administrationPage.saveButton_select();

        //wait confirmation dialogue and click YES
        browser.wait(browserWait.presenceOf($('.ms-Dialog-title')), 50000);

         administrationPage.confirmDialogueYes_select();
        
        browser.wait(browserWait.presenceOf($('.snackbar.is-success.is-bottom-right.fadeOut.v-leave-to')), 10000);
        var successText = element(by.css('.text'));
        expect(successText.getText()).toEqual('Success');

        browser.sleep('10000');

        //Verify On/off Switch text 'NO'
        administrationPage.devCompl_select();
        browser.wait(browserWait.presenceOf($('.card-content')), 50000);
        var onOffSwitch_text = element(by.css('.control-label'));
        expect(onOffSwitch_text.getText()).toEqual('Yes');


        browser.sleep('10000');
    });

});