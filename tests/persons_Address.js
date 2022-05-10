let personsPage = require('../pages/personsPage.js');
let homepage = require('../pages/homepage.js');
let addressPage = require('../pages/addressPage.js');

describe('Address Page', function(){

    it('Address - Add and Approve', function(){
        
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
        
         addressPage.addressTab_select(); browser.sleep(10000);
          addressPage.addButton_select();browser.sleep(3000);

         addressPage.line1_input('117 LCT'); browser.sleep(1000);
         addressPage.postalCode_input('123456'); browser.sleep(1000);
         addressPage.city_input('Ho Chi Minh'); browser.sleep(3000);

         addressPage.saveButton_select();
         browser.sleep(10000);

      //   var firstAddress = element(by.cssContainingText('.ms-ListItem-primaryText','117 LCT/Ho Chi Minh'));
      //  firstAddress.click();
      //  browser.sleep(5000);
         
        //click APPROVE
       var elm = element(by.xpath('//span[.="Approve"]'));
       browser.executeScript("arguments[0].click();", elm.getWebElement());

       // addressPage.approveButton_select();
        browser.sleep(10000);

    });
     
});
