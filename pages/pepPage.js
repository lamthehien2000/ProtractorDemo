let pepPage = function(){
    let qualify = $$('.select.is-small').first();
    let familyMember = $$('.select.is-small').get(1);
    let USperson = $$('.select.is-small').get(2);
    let qualifyYES = element.all(by.xpath('//*[@id="contentIdForA11y3"]/div/div/div[1]/div[1]/span/div/div/span/select/option[1]')).first();
    let familyMemberYES = element(by.xpath('//*[@id="contentIdForA11y3"]/div/div/div[1]/div[3]/span/div/div/span/select/option[1]'));
    let USpersonYES = element.all(by.xpath('//*[@id="contentIdForA11y3"]/div/div/div[1]/div[1]/span/div/div/span/select/option[1]')).get(1);
    let statement = $('.textarea.is-small');
    let SSN = $('.input.is-small');
    let saveButton = element(by.xpath('//span[contains(text(), "Save")]'));
    let pepTab = element(by.id('pep-information-label'));
    let approveButton = element(by.xpath('//span[.="Approve"]'));
    
    this.approveButton_select = function(){
        browser.executeScript("arguments[0].click();", approveButton.getWebElement());
    }
    this.pepTab_select = function(){
        pepTab.click();
    }
    this.saveButton_select = function(){
        saveButton.click();
    }

    this.qualify_select = function(){
        qualify.click();
    }
    this.familyMember_select = function(){
        familyMember.click();
    }
    this.USperson_select = function(){
        USperson.click();
    }
    this.qualifyYES_select = function(){
        qualifyYES.click();
    }
    this.familyMemberYES_select = function(){
        familyMemberYES.click();
    }
    this.USpersonYES_select = function(){
        USpersonYES.click();
    }
    this.statement_input = function(text1){
        statement.sendKeys(text1);
    }
    this.SSN_input = function(text2){
        SSN.sendKeys(text2);
    }

}

module.exports = new pepPage();