let administrationPage = function (){
    
    let devCompl_item = element(by.cssContainingText('.ms-ListItem-secondaryText','dev-compl@amdax.com'));
    let devClientRep_item = element(by.cssContainingText('.ms-ListItem-secondaryText', 'dev-clientrep@amdax.com'));
    let adminTester_item = element(by.cssContainingText('.ms-ListItem-secondaryText', 'admin_tester@amdaxb2ctesting.onmicrosoft.com'));
    let onOffSwitch = element(by.css('.check.is-info'));
    let saveButton = element(by.cssContainingText('.button.no-border.is-info.is-outlined','Save'));
    let checkbox_Operation = element(by.cssContainingText('.ms-Label', 'Operation'));
    let checkbox_FinanceMgr = element(by.cssContainingText('.ms-Label', 'FinanceMgr'));
    let checkbox_Audit = element(by.cssContainingText('.ms-Label', 'Audit'));
    let checkbox_ClientRep = element(by.cssContainingText('.ms-Label', 'Client Rep'));
    let checkbox_ClientRepManager = element(by.cssContainingText('.ms-Label', 'Client Rep Manager'));
    let checkbox_Compliance = element(by.cssContainingText('.ms-Label', 'Compliance'));
    let checkbox_ComplianceManager = element(by.cssContainingText('.ms-Label', 'Compliance Manager'));
    let checkbox_StaffTrader = element(by.cssContainingText('.ms-Label', 'StaffTrader'));
    let checkbox_Admin = element(by.cssContainingText('.ms-Label', 'Admin'));
    let confirmDialogueYes = element(by.xpath('//*[@id="app"]/div/div[2]/div/div[2]/div[1]/span/div[2]/div[3]/div/button[1]'));
    let confirmDialogueNo = element(by.xpath('//*[@id="app"]/div/div[2]/div/div[2]/div[1]/span/div[2]/div[3]/div/button[2]'));
    let filterButton = element(by.css('.mdi.mdi-filter-menu-outline'));
    let searchBox = element(by.css('.input'));
    let sortButton = element(by.css('.mdi.mdi-sort'))

    this.checkbox_Admin_select = function(){
        checkbox_Admin.click();
    }

    this.sortButton_select = function(){
        sortButton.click();
    }
    this.searchBox_select = function(){
        searchBox.click();
    }
    this.searchBox_text = function(searchText){
        searchBox.sendKeys(searchText);
    }

    this.filterButton_select = function(){
        filterButton.click();
    }

    this.checkbox_Operation_select = function(){
        checkbox_Operation.click();
    }

    this.checkbox_FinanceMgr_select = function(){
        checkbox_FinanceMgr.click();
    }

    this.checkbox_Audit_select = function(){
        checkbox_Audit.click();
    }

    this.checkbox_ClientRep_select = function(){
        checkbox_ClientRep.click();
    }

    this.checkbox_ClientRepManager_select = function(){
        checkbox_ClientRepManager.click();
    }

    this.checkbox_Compliance_select = function(){
        checkbox_Compliance.click();
    }

    this.checkbox_ComplianceManager_select = function(){
        checkbox_ComplianceManager.click();
    }

    this.checkbox_StaffTrader_select = function(){
        checkbox_StaffTrader.click();
    }

    this.checkbox_Admin_select = function(){
        checkbox_StaffTrader.click();
    }

    this.devCompl_select = function(){
        devCompl_item.click();
    };

    this.devClientRep_select = function(){
        devClientRep_item.click();
    };

    this.adminTester_select = function(){
        adminTester_item.click();
    };

    this.onOffSwitch_select = function(){
        onOffSwitch.click();
    };

    this.saveButton_select = function(){
        saveButton.click();
    };
    
    this.confirmDialogueYes_select = function(){
        confirmDialogueYes.click();
    };

    this.confirmDialogueNo_select = function(){
        confirmDialogueNo.click();
    };
}

module.exports = new administrationPage();