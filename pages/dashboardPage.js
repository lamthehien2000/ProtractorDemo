let dashboardPage = function(){

    let AdministrationOption = element(by.cssContainingText('.menu-item-label','Administration'));
    let PersonsOption = element(by.cssContainingText('.menu-item-label','Persons'));

    this.PersonsOptionClick = function(){
        PersonsOption.Click();
    }

    this.AdministrationClick = function(){
       AdministrationOption.Click();
    };

};

module.exports = new dashboardPage();