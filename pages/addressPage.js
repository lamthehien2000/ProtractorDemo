let addressPage = function (){
    let addressTab = element(by.id('addresses-label'));
   let addButton = element(by.css('.mdi.mdi-plus'));
    let line1 = $$('.input.is-small').first();
    let postalCode = $$('.input.is-small').get(1);
    let city = $$('.input.is-small').get(2);
    let saveButton = $$('.button.no-border.is-info.is-outlined').get(2);
    let approveButton = element(by.xpath('//span[.="Approve"]'));

    this.approveButton_select = function(){
        approveButton.click();
    }

    this.saveButton_select = function(){
        saveButton.click();
    }

    this.line1_input = function(line1Text){
        line1.sendKeys(line1Text);
    }

    this.postalCode_input = function(postalText){
        postalCode.sendKeys(postalText);
    }

    this.city_input = function(cityText){
        city.sendKeys(cityText);
    }

    this.addButton_select = function(){
        addButton.click();
    }

    this.addressTab_select = function(){
        addressTab.click();
    }
  


}
module.exports = new addressPage();