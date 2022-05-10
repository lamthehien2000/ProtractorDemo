let administrationPage = require('../pages/administrationPage.js');
let homepage = require('../pages/homepage.js');

describe('Sorting', function(){

    it('Sorting = Ascending', function(){
        
        browser.waitForAngularEnabled(false);
        
        //browser.get('https://amdaxportal-qc.azurewebsites.net/');
        homepage.get('https://amdaxportal-dev.azurewebsites.net/user-management');
        
        var browserWait = protractor.ExpectedConditions;

         //Wait for the element to appear
         browser.wait(browserWait.presenceOf($('.ms-List')), 50000);
         browser.sleep(10000);

         administrationPage.filterButton_select();
         browser.sleep(3000);

           //Select ALL option
           element(by.id('filterControl_All')).click();   
           browser.sleep(5000);    

       // let mytable = $$('.ms-List').last()
       // let allRows = mytable.$$('li')
       // let myData = allRows.map(async(ele, index) => {
       //     let data = ele.$$('span.ms-ListItem-primaryText').get(0)
       //     return await data.getText()
       // });

       var sorted = [] , unSorted = [] , i =0;
       var ele = element.all(by.css('.ms-ListItem-primaryText'));
       ele.each(function(eachName){
           eachName.getText().then(function(name){
               unSorted[i] = name;
               i++;
           });
       }).then(function(){
           //check sorting
           sorted = unSorted.slice();
           sorted.sort(); //use sort function of Javascript
           console.log("After Sorting: " + sorted);
          // console.log("Before Sorting:" + unSorted);
          // expect(sorted).toEqual(unSorted);
       });

       //Sorting the list by sort button
       var sorted1=[], j=0;
       administrationPage.sortButton_select();
       element(by.cssContainingText('.dropdown-item','Ascending')).click();
       browser.sleep(3000);
       ele.each(function(eachName_sorted){
        eachName_sorted.getText().then(function(name1){
            sorted1[j] = name1;
            j++;
        }).then(function(){
            console.log("Before Comparison: " + sorted1);
        })
       });
       expect(sorted).toEqual(unSorted);
       // expect(ele.getText()).toEqual(sorted);

       //Get all the names after soring by SORT button

       
       // console.log("Before sorting: " + await myData);
       // (await myData).sort()
       // console.log("After sorting: " + await myData);
      
        // administrationPage.sortButton_select();          

       // administrationPage.searchBox_text('Chi Admin');

       // browser.wait(browserWait.presenceOf($('.ms-ListItem-primaryText')), 5000);
        
        //Get and compare search result
       // var searchResult = element(by.cssContainingText('ms-ListItem-primaryText','Chi Admin'));
       // expect(searchResult.getText()).toEqual('Chi Admin');   
    });

    it('Sorting = Descending', function(){
        
        browser.waitForAngularEnabled(false);
        
        //browser.get('https://amdaxportal-qc.azurewebsites.net/');
        homepage.get('https://amdaxportal-dev.azurewebsites.net/user-management');
        
        var browserWait = protractor.ExpectedConditions;

         //Wait for the element to appear
         browser.wait(browserWait.presenceOf($('.ms-List')), 50000);
         browser.sleep(10000);

         administrationPage.filterButton_select();
         browser.sleep(3000);

           //Select ALL option
           element(by.id('filterControl_All')).click();   
           browser.sleep(5000);    

       // let mytable = $$('.ms-List').last()
       // let allRows = mytable.$$('li')
       // let myData = allRows.map(async(ele, index) => {
       //     let data = ele.$$('span.ms-ListItem-primaryText').get(0)
       //     return await data.getText()
       // });

       var sorted = [] , unSorted = [] , i =0;
       var ele = element.all(by.css('.ms-ListItem-primaryText'));
       ele.each(function(eachName){
           eachName.getText().then(function(name){
               unSorted[i] = name;
               i++;
           });
       }).then(function(){
           //check sorting
           sorted = unSorted.slice();
           sorted.reverse(); //use sort function of Javascript
           console.log("After Sorting: " + sorted);
          // console.log("Before Sorting:" + unSorted);
          // expect(sorted).toEqual(unSorted);
       });

       //Sorting the list by sort button
       var sorted1=[], j=0;
       administrationPage.sortButton_select();
       element(by.cssContainingText('.dropdown-item','Descending')).click();
       browser.sleep(3000);
       ele.each(function(eachName_sorted){
        eachName_sorted.getText().then(function(name1){
            sorted1[j] = name1;
            j++;
        }).then(function(){
            console.log("Before Comparison: " + sorted1);
        })
       });
       expect(sorted).toEqual(unSorted);
    
    });

});
