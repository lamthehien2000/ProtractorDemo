let freelancerPage = function(){
       let drowpdownCrowdfunding = element.all(by.css('[value="25"]')).get(1);
       let tradingName = $$('.input.is-danger.is-small').first();
       let website = element(by.xpath('//div[@class="card-content"]//div[2]//input[@class="input is-danger is-small"]'));
       let VAT = element(by.xpath('//div[@class="card-content"]//div[@class="columns is-multiline"]/div[3]//input[@class="input is-danger is-small"]'));
       let CCI = element(by.xpath('//div[@class="card-content"]//div[4]//input[@class="input is-danger is-small"]'));
       let revenue = element(by.css('.input.false.is-small'));
       let drowpdownIndustries = element(by.css('.select.is-small.is-danger'));
       let attentionButton = $$('.check.is-info').get(1);
       let saveButton = element(by.xpath('//span[contains(text(), "Save")]'));
       let freelancerTab = element(by.id('freelancer-information-label'));
    // let dropdownEmployment = element.{all(by.css('.select.is-small')).first();

    this.saveButton_select = function(){
        saveButton.click();
    }
    
    this.attentionButton_select = function(){
        attentionButton.click()
    }

    this.drowpdownCrowdfunding_select = function(){
        drowpdownCrowdfunding.click();
    }

    this.drowpdownIndustries_select = function(){
        drowpdownIndustries.click();
    }

    this.revenue_input = function(number){
        revenue.sendKeys(number);
    }

    this.CCI_input = function(text1){
        CCI.sendKeys(text1);
    }

    this.website_input = function(text1){
        website.sendKeys(text1);
    }

    this.VAT_input = function(text2){
        VAT.sendKeys(text2);
    }
       this.freelancerTab_select = function(){
         freelancerTab.click();
       }

        this.tradingName_input = function(text){
         tradingName.sendKeys(text);
      }

    
}

module.exports = new freelancerPage();