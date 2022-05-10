let personsPage = require('../pages/personsPage.js');
let homepage = require('../pages/homepage.js');

describe('Persons Page', function(){

    it('Persons - Add screen', function(){
        
        browser.waitForAngularEnabled(false);

        //browser.get('https://amdaxportal-qc.azurewebsites.net/');
        homepage.get('https://amdaxportal-dev.azurewebsites.net/person-management');
        
        var browserWait = protractor.ExpectedConditions;

         //Wait for the element to appear
         browser.wait(browserWait.presenceOf($('.ms-List')), 50000); //presence of list
         browser.sleep(30000);

        personsPage.addButton_click();
         
         //Check there are 2 dropdowns Salutation and Preferred Language
         var dropdown = $$('.select.is-small');
         expect(dropdown.count()).toBe(2);
         browser.sleep(3000);

        //Check there are 6 textfields
        var textfields = $$('.input.is-small');
        expect(textfields.count()).toBe(6);
        browser.sleep(3000);

    });

});
