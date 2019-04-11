/*eslint-env browser*/

//STEP 1

/*

function alphabet_order(str) {
    "use strict";
    return str.split('').sort().join('');
}  
window.console.log(alphabet_order("aburrido"));


*/


//STEP 2


/*

var capitalize;
capitalize = function (str1) {
    "use strict";
    return str1.charAt(0).toUpperCase() + str1.slice(1);
};
    
window.console.log(capitalize('despasiado por favor!'));


*/

//STEP 3


/*

function vowel_count(str1) {
    "use strict";
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;
  
    for (var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
window.console.log(vowel_count("arriba"));


*/

//STEP 4

/*

function makeid(l) {
    "use strict";
    var text = "";
    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i=0; i < l; i++ )
{  
text += char_list.charAt(Math.floor(Math.random() * char_list.length));
}
return text;
}
window.console.log(makeid(3));

*/


//STEP 5

/*

function Longest_Country_Name(country_name) {
    "use strict";
    return country_name.reduce(function (lname, country)
        {
            return lname.length > country.length ? lname : country;
        }, 
        "");
}
window.console.log(Longest_Country_Name(["Chile", "Peru", "Brasil"]));

*/