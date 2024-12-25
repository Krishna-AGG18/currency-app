const base_url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies" 
let amount = eval(document.getElementById("amount").value);
let dropdowns = document.querySelectorAll(".item2 select");
// console.log(dropdowns);

for (code in countryList){
    console.log(code, countryList[code]);
}