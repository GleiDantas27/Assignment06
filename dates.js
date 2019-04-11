/*eslint-env browser*/

//STEP 1


/*

var getDaysInMonth = function (month, year) {
    "use strict";
    return new Date(year, month, 0).getDate();
};

window.console.log(getDaysInMonth(2, 2019));

*/


//STEP 2

/*
var month_name = function(dt){
mlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
  return mlist[dt.getMonth()];
};
window.console.log(month_name(new Date("08/27/2019")));

*/

//STEP 3


/*

var is_weekend = function (date1) {
    "use strict";
    var dt = new Date(date1);
    if(dt.getDay() == 6 || dt.getDay() == 0)
       {
        return "weekend";
        } 
    else {
        return "It`s not weekend man!";
    }
 
window.console.log(is_weekend('December 11, 2019'));


*/



//STEP 4


/*
var yesterday =  function (date1) {
    "use strict";
    var dt = new Date(date1);
    return new Date((dt.setDate(dt.getDate() - 1))).toString();
};
window.console.log(yesterday('April 10, 2019'));

*/



//STEP 5


/*

window.console.log(new Date().toString().substr(0, 1));


*/





