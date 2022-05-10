let personsPage = require('../pages/personsPage.js');
let homepage = require('../pages/homepage.js');
let financialPage = require('../pages/financialPage.js');

describe('Financial Page', function(){

    it('Financial - Add and Approve', function(){
        
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
        
        financialPage.finTab_select();
        browser.sleep(10000);

        financialPage.dropdown_type();
        browser.sleep(1000);

        financialPage.dropdown_Euro_select();
        browser.sleep(1000)

        financialPage.totalWorth_input('99999999');
        browser.sleep(1000);

        financialPage.initialInvestment_input('111111');
        browser.sleep(1000);

        financialPage.expectedInvestment_input('1000000');
        browser.sleep(1000);

        financialPage.investmentSource_input('Automation Testing');
        browser.sleep(1000);

        financialPage.bankAcc_input('NL02ABNA0123456789'); browser.sleep(3000);

        //Upload for Proof source of funds
        // let path = require("path");
        // let filePath = "/Users/hien.lam/Google Drive/Testing Image/Dutch passport lady.png";
        // let fpath = path.resolve(__dirname, filePath);
        // browser.ignoreSynchronization = true;
        // browser.sleep(3000);
        // let filename = $$('input[type="file"]').get(1);
        // filename.sendKeys(fpath);
        //  browser.sleep(10000);


        // financialPage.saveButton_select(); browser.sleep(10000);

        // var Approve = element(by.xpath('//span[.="Approve"]'));
        // browser.executeScript("arguments[0].click();", Approve.getWebElement());
        // browser.sleep(30000);

    });
        
    
});
