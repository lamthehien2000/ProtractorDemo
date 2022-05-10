let personsPage = require('../pages/personsPage.js');
let homepage = require('../pages/homepage.js');
let pepPage = require('../pages/pepPage.js');

describe('PEP Page', function(){

    it('PEP - Add and Approve', function(){
        
        browser.waitForAngularEnabled(false);

        //browser.get('https://amdaxportal-qc.azurewebsites.net/');
        homepage.get('https://amdaxportal-dev.azurewebsites.net/person-management');
        
        var browserWait = protractor.ExpectedConditions;
         //Wait for the element to appear
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

         pepPage.pepTab_select(); browser.sleep(10000);
         
         pepPage.qualify_select(); browser.sleep(2000);
         pepPage.qualifyYES_select(); browser.sleep(2000);

         pepPage.familyMember_select(); browser.sleep(2000);
         pepPage.familyMemberYES_select(); browser.sleep(2000);

         pepPage.statement_input('With Russia’s traditional May 9 "Victory Day" approaching, there is speculation that President Vladimir Putin will use the day to declare some form of success in his invasion, or ramp up his assault o'); 
         browser.sleep(2000);

        pepPage.USperson_select();
         pepPage.USpersonYES_select(); browser.sleep(2000);
         
        pepPage.SSN_input('023662661978'); browser.sleep(3000);

       // browser.wait(browserWait.presenceOf(by.xpath('//span[contains(text(), "Save")]')), 3000);
       // pepPage.saveButton_select(); browser.sleep(10000);
    //    pepPage.approveButton_select(); browser.sleep(15000);

        //click APPROVE
        var elm = element(by.xpath('//span[.="Save"]'));
        browser.executeScript("arguments[0].click();", elm.getWebElement());
        browser.sleep(10000);

        pepPage.approveButton_select();
        browser.sleep(15000);

    });

});
