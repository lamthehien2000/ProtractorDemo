let personsPage = require('../pages/personsPage.js');
let homepage = require('../pages/homepage.js');
let freelancerPage = require('../pages/freelancerPage.js');

describe('Freelancer Page', function(){

    it('Freelancer - Add and Approve', function(){
        

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
        
        freelancerPage.freelancerTab_select();
        browser.sleep(10000);

        freelancerPage.tradingName_input('AutoTest Trading Name');
        browser.sleep(2000);

        freelancerPage.revenue_input('3000000');
        browser.sleep(1000);

        freelancerPage.website_input('www.google.com');
        browser.sleep(1000);

        freelancerPage.VAT_input('VAT BTW input');
        browser.sleep(1000);

        freelancerPage.CCI_input('CCI KVK input');
        browser.sleep(1000);

        browser.wait(browserWait.visibilityOf($('option')), 3000);
        freelancerPage.drowpdownIndustries_select();
        browser.sleep(1000);
        freelancerPage.drowpdownCrowdfunding_select();
        browser.sleep(2000);

        freelancerPage.attentionButton_select(); browser.sleep(3000);
        freelancerPage.saveButton_select(); browser.sleep(15000);

        

         var Approve = element(by.xpath('//span[.="Approve"]'));
         browser.executeScript("arguments[0].click();", Approve.getWebElement());
         browser.sleep(30000);

    });
        
    
});
