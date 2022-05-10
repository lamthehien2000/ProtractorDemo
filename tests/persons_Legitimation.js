let personsPage = require('../pages/personsPage.js');
let homepage = require('../pages/homepage.js');
let addressPage = require('../pages/addressPage.js');
let legitimationPage = require('../pages/legitimationPage.js');

describe('Legitimation Page', function(){

    it('Legitimation - Add and Approve', function(){
        
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
        
        legitimationPage.legiTab_select();
        browser.sleep(10000);

        legitimationPage.addButton_click();
        browser.sleep(3000);

        legitimationPage.uploadButton_click();
        browser.sleep(3000);

        let path = require("path");
        //var fileToUpload = '../Dutch passport lady.png';
        let filePath = "/Users/hien.lam/Google Drive/Testing Image/Dutch passport lady.png";
        let fpath = path.resolve(__dirname, filePath);
        browser.ignoreSynchronization = true;
        browser.sleep(5000);

        let filename = $('input[type="file"]');
        filename.sendKeys(fpath);
         browser.sleep(5000);

        let okButton = element(by.css('.button.commandButton.is-info')); browser.sleep(1000);
        okButton.click();
         //legitimationPage.fileUploadButton_click();
         browser.sleep(5000);

        legitimationPage.birthname_input('James Lam'); browser.sleep(1000);
        legitimationPage.birthplace_input('Vietnam'); browser.sleep(1000);
        legitimationPage.docNum_input('654321'); browser.sleep(1000);
        legitimationPage.placeIssue_input('Netherlands'); browser.sleep(5000);

        legitimationPage.saveButton_select(); browser.sleep(10000);

        
        var Approve = element(by.xpath('//span[.="Approve"]'));
        browser.executeScript("arguments[0].click();", Approve  .getWebElement());
        browswer.sleep(10000);

    });
        
    
});
