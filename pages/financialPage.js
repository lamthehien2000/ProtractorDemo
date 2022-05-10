let financialPage = function(){
    let finTab = element(by.id('financial-information-label'));
    let dropdown_type = $('.select.is-small');
    let dropdown_Crypto = element(by.cssContainingText('Option', 'Crypto'));
    let dropdown_Euro = element(by.cssContainingText('Option', 'Euro'));
    let dropdown_Both = element(by.cssContainingText('Option', 'Both'));
    let totalWorth = $$('input.false.is-small').first();
    let initialInvestment = $$('input.false.is-small').get(1);
    let expectedInvestment = $$('input.false.is-small').get(2);
    let investmentSource = element(by.xpath('//fieldset[1]//input[@class="input is-small"]'));
    let bankAcc = element(by.xpath('//fieldset[1]//div[@class="field is-small"]//input[@class="input is-small"]'));
    let saveButton = $$('.button.no-border.is-info.is-outlined').first();

    this.saveButton_select = function(){
        saveButton.click();
    }

    this.investmentSource_input = function(source){
        investmentSource.sendKeys(source);
    }

    this.bankAcc_input = function(backAccNo){
        bankAcc.sendKeys(backAccNo);
    }

    this.totalWorth_input = function(money){
        totalWorth.sendKeys(money)
    }

    this.initialInvestment_input = function(money1){
        initialInvestment.sendKeys(money1)
    }

    this.expectedInvestment_input = function(money2){
        expectedInvestment.sendKeys(money2)
    }

    this.finTab_select = function(){
        finTab.click();
    }

    this.dropdown_type = function(){
        dropdown_type.click();
    }

    this.dropdown_Crypto_select = function(Crypto){
        dropdown_Crypto.click();
    }
    this.dropdown_Euro_select = function(Euro){
        dropdown_Euro.click();
    }
    this.dropdown_Both_select = function(Both){
        dropdown_Both.click();
    }

}       

module.exports = new financialPage();