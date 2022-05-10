let personsPage = require('../pages/personsPage.js');
let homepage = require('../pages/homepage.js');
let professionalPage = require('../pages/professionalPage.js');

describe('Financial Page', function(){

    it('Financial - Add and Approve', function(){
        
        browser.waitForAngularEnabled(false);

        //browser.get('https://amdaxportal-qc.azurewebsites.net/');
        homepage.get('https://amdaxportal-dev.azurewebsites.net/person-management');
        
      //  homepage.get('https://amdaxportal-dev.azurewebsites.net/profile/44fa104c-0d5f-4853-6a05-08da2f487564/professional-information');
      //  browser.sleep(15000);
        var browserWait = protractor.ExpectedConditions;

        // Wait for the element to appear
         browser.wait(browserWait.presenceOf($('.ms-List')), 50000); //presence of list
         browser.sleep(5000);

         personsPage.filterButton_select();
         browser.sleep(1000);

         //Select the created person
         personsPage.filterButton_All_select();
         browser.sleep(1000);

         personsPage.selectAll_firstItem_select();
         browser.wait(browserWait.presenceOf($('.ms-List')), 50000); //presence of list
         browser.sleep(5000);
        
        professionalPage.proTab_select();
        browser.sleep(10000);

        professionalPage.dropdownEmployment_select();
        browser.sleep(2000);

        browser.wait(browserWait.visibilityOf($('option')), 3000);
        professionalPage.dropdownUnemployed_select();
        browser.sleep(1000);

        professionalPage.switchPersonalHolding_select();
        browser.sleep(1000)

        professionalPage.switchAttention_select();
        browser.sleep(1000);

        professionalPage.switchSelfEmployed_select();
        browser.sleep(1000);

        let drowpdownIndustries_ = $$('.select.is-small').get(2); browser.sleep(2000);
        drowpdownIndustries_.click();
        
        browser.wait(browserWait.visibilityOf($('option')), 3000);
        professionalPage.drowpdownCrowdfunding_select();
        browser.sleep(1000);

        professionalPage.jobTitle_input('Automation Test');
        browser.sleep(1000);

        professionalPage.businessName_input('Automation Test Business Name'); 
        browser.sleep(3000);

        professionalPage.saveButton_select();
        browser.sleep(15000);


        // financialPage.saveButton_select(); browser.sleep(10000);

        // var Approve = element(by.xpath('//span[.="Approve"]'));
        // browser.executeScript("arguments[0].click();", Approve.getWebElement());
        // browser.sleep(30000);

    });
        
    
});
