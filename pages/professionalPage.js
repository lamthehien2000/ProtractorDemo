let professionalPage = function(){
    let dropdownUnemployed = element.all(by.css('[value="5"]')).first();
    let switchPersonalHolding = $$('.check.is-info').first();
    let switchSelfEmployed = $$('.check.is-info').get(1);
    let switchAttention = $$('.check.is-info').get(2);
    let drowpdownCrowdfunding = element.all(by.css('[value="25"]')).get(1);
    let jobTitle = $$('.input.is-small').first();
    let businessName = $$('.input.is-small').get(1);
    let saveButton = element(by.xpath('//span[contains(text(), "Save")]'));
    let proTab = element(by.id('professional-information-label'));
    let dropdownEmployment = element.all(by.css('.select.is-small')).first();

    this.dropdownEmployment_select = function(){
        dropdownEmployment.click();
    }

    this.proTab_select = function(){
        proTab.click();
    }

    this.saveButton_select = function(){
        saveButton.click();
    }

    this.jobTitle_input = function(text){
        jobTitle.sendKeys(text);
    }

    this.businessName_input = function(text1){
        businessName.sendKeys(text1);
    }

    this.drowpdownCrowdfunding_select = function(){
        drowpdownCrowdfunding.click();
    }

    this.switchAttention_select = function(){
        switchAttention.click();
    }
    this.switchSelfEmployed_select = function(){
        switchSelfEmployed.click();
    }
    this.switchPersonalHolding_select = function(){
        switchPersonalHolding.click();
    }

    this.dropdownUnemployed_select = function(){
        dropdownUnemployed.click();
    }
    
}

module.exports = new professionalPage();