const { searchBox_text } = require('../pages/administrationPage.js');
let administrationPage = require('../pages/administrationPage.js');
let homepage = require('../pages/homepage.js');

describe('Searching', function(){

    it('Searching for a name', function(){
        
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
        element(by.id('filterControl_All')).click();   
        browser.sleep(5000);        

        administrationPage.searchBox_text('Chi Admin');

        browser.wait(browserWait.presenceOf($('.ms-ListItem-primaryText')), 5000);
        
        //Get and compare search result
        var searchResult = element(by.cssContainingText('ms-ListItem-primaryText','Chi Admin'));
        expect(searchResult.getText()).toEqual('Chi Admin');   
    });

});
