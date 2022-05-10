let legitimationPage = function (){

    let legiTab = element(by.id('legitimation-label'));
    let addButton = element(by.css('.mdi.mdi-plus'));
    let uploadButton = element(by.xpath('//span[.="Upload"]'));
    let fileUploadButton = element(by.css('.mdi.mdi-upload.mdi-48px'));
    let IDcheckButton = $$('.check.is-info').first();
    let sanctionButton = $$('.check.is-info').get(1);
    let attentionButton = $$('.check.is-info').get(2);
    let birthplace = $$('.input.is-small').get(1);
    let birthname = $$('.input.is-small').get(2);
    let docNum = $$('.input.is-small').get(3);
    let placeIssue = $$('.input.is-small').get(5);
    let saveButton = $$('.button.no-border.is-info.is-outlined').get(2);

    this.saveButton_select = function(){
        saveButton.click();
    }
    
    this.placeIssue_input = function(placeIssueText){
        placeIssue.sendKeys(placeIssueText);
    }
    this.docNum_input = function(docNumText){
        docNum.sendKeys(docNumText);
    }

    this.birthname_input = function(birthnameText){
        birthname.sendKeys(birthnameText);
    }
    this.birthplace_input = function(birthplaceText){
        birthplace.sendKeys(birthplaceText);
    }

    this.IDcheckButton_select = function(){
        IDcheckButton.click()
    }

    this.sanctionButton_select = function(){
        sanctionButton.click()
    }

    this.attentionButton_select = function(){
        attentionButton.click()
    }

    this.legiTab_select = function(){
        legiTab.click();
    }

    this.addButton_click = function(){
        addButton.click();
    }

    this.uploadButton_click = function(){
        browser.executeScript("arguments[0].click();", uploadButton.getWebElement());
    }

    this.fileUploadButton_click = function(){
        fileUploadButton.click();
    }


}
module.exports = new legitimationPage();