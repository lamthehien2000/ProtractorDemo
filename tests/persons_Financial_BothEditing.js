let personsPage = require('../pages/personsPage.js');
let homepage = require('../pages/homepage.js');
let financialPage = require('../pages/financialPage.js');

describe('Financial Page', function(){

    it('Financial - Both - Edit and Approve', function(){
        
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
        
        financialPage.finTab_select()
        browser.sleep(10000);

        financialPage.dropdown_type();
        browser.sleep(1000);

        financialPage.dropdown_Both_select();
        browser.sleep(3000);

// Proof of bank (0)
        let path = require("path");
        let filePath = "/Users/hien.lam/Google Drive/Testing Image/Dutch passport lady.png";
        let fpath = path.resolve(__dirname, filePath);
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        let filename = $$('input[type="file"]').first();
        filename.sendKeys(fpath);
        browser.sleep(2000);
// Proof of funds (1)
        let path1 = require("path");
        let filePath1 = "/Users/hien.lam/Google Drive/Testing Image/Dutch passport lady.png";
        let fpath1 = path1.resolve(__dirname, filePath1);
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        let filename1 = $$('input[type="file"]').get(1);
        filename1.sendKeys(fpath1);
        browser.sleep(2000);
// Source of Crypto(2)
        let path2 = require("path");
        let filePath2 = "/Users/hien.lam/Google Drive/Testing Image/Dutch passport lady.png";
        let fpath2 = path2.resolve(__dirname, filePath2);
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        let filename2 = $$('input[type="file"]').get(2);
        filename2.sendKeys(fpath2);
        browser.sleep(2000);
//  Deposits on Exchange(3)
        let path3 = require("path");
        let filePath3 = "/Users/hien.lam/Google Drive/Testing Image/Dutch passport lady.png";
        let fpath3 = path3.resolve(__dirname, filePath3);
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        let filename3 = $$('input[type="file"]').get(3);
        filename1.sendKeys(fpath3);
        browser.sleep(2000);
// Trading history - exchange(4)
        let path4 = require("path");
        let filePath4 = "/Users/hien.lam/Google Drive/Testing Image/Dutch passport lady.png";
        let fpath4 = path4.resolve(__dirname, filePath4);
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        let filename4 = $$('input[type="file"]').get(4);
        filename4.sendKeys(fpath4);
        browser.sleep(2000);
// Trading history - external wallet(5)
        let path5 = require("path");
        let filePath5 = "/Users/hien.lam/Google Drive/Testing Image/Dutch passport lady.png";
        let fpath5 = path5.resolve(__dirname, filePath5);
        browser.ignoreSynchronization = true;
        browser.sleep(2000);
        let filename5 = $$('input[type="file"]').get(5);
        filename5.sendKeys(fpath5);
        browser.sleep(2000);

        var saveButton_Pending = element.all(by.cssContainingText('.button.no-border.is-info.is-outlined', 'Save'));
        saveButton_Pending.click();
        browser.sleep(15000);

        var Approve = element(by.xpath('//span[.="Approve"]'));
        browser.executeScript("arguments[0].click();", Approve.getWebElement());
        browser.sleep(15000);

    });
        
    
});
