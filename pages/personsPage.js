let personsPage = function(){

    let addButton = element(by.css('.mdi.mdi-plus'));
    let salutationDropdown = $$('.select.is-small').first();
    let preferredLanguage = $$('.select.is-small(1)');
    let textCallingName =  $$('.input.is-small').first();
    let textFirstName = $$('.input.is-small').get(1);
    let textlastName = $$('.input.is-small').get(2);
    let textEmail = $$('.input.is-small').get(3);
    let textMobile = $$('.input.is-small').get(4);
    let textLandline = $$('.input.is-small').get(5);
    let filterButton = element(by.css('.mdi.mdi-filter-menu-outline'));
    let filterControl_optionAll = element(by.id('filterControl_All'));
    let selectAll_firstItem = $$('.ms-ListItem.listItem').first();
    
    this.selectAll_firstItem_select = function(){
        selectAll_firstItem.click();
    }

    this.filterButton_All_select = function(){
        filterControl_optionAll.click();
    }

    this.filterButton_select = function(){
        filterButton.click();
    }

    this.textLandline_input = function(landline) {
        textLandline.sendKeys(landline);
    }

    this.textEmail_input = function(email) {
        textEmail.sendKeys(email);
    }

    this.textMobile_input = function(mobile) {
        textMobile.sendKeys(mobile);
    }

    this.textFirstName_input = function(firstName) {
        textFirstName.sendKeys(firstName);
    }

    this.lastName_input = function(lastName){
        textlastName.sendKeys(lastName);
    }

    this.textCallingName_input = function(callingName){
        textCallingName.sendKeys(callingName);
    }

    this.addButton_click = function(){
        addButton.click();
    };

    this.salutationDropdown_select = function(){
        salutationDropdown.click();
    }

    this.preferredLanguage_select = function(){
        preferredLanguage.click();
    }

};

module.exports = new personsPage();