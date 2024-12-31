const base_url = "https://v6.exchangerate-api.com/v6/3fe915dbd326da91b14f152e/latest"
let amount = document.getElementById("amt").value;
let dropdowns = document.querySelectorAll(".dropdown select");
let flag = document.querySelectorAll(".select-container img");
let button = document.getElementById("getrate");
let fromcurr = document.querySelector(".from select");
let tocurr = document.querySelector(".to select")
let msg = document.querySelector(".msg")

dropdowns.forEach((elem) => {
    for (code in countryList) {
        // console.log(code, countryList[code]);
        newoption = document.createElement("option");
        newoption.innerText = code;
        newoption.value = code;
        if (elem.name === "from" && code === "USD") {
            newoption.selected = "selected";
        } else if (elem.name === "to" && code === "INR") {
            newoption.selected = "selected";    
        }
        elem.append(newoption);
    }
    elem.addEventListener("change", elem => {
        let curCode = elem.target.value;
        let countryCode = countryList[curCode];
        let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
        let img = elem.target.parentElement.querySelector("img");
        img.src = newsrc;
        updateRate();
    })
})

const updateRate = async ()=>{
    let amount = document.getElementById("amt").value;
    if(amount.trim() === "" || amount < 1){
        amount = 1;
    }
    const url = `${base_url}/${fromcurr.value.toUpperCase()}`;
    let response = await fetch(url);
    let data = await response.json();
    let allrate = data.conversion_rates;

    let rate = parseFloat(allrate[tocurr.value.toUpperCase()]);
    let totalamt = rate* eval(amount);
    msg.innerText = `${amount} ${fromcurr.value} = ${totalamt.toFixed(3)} ${tocurr.value}`;
}
button.addEventListener("click",(event)=>{
    event.preventDefault();
    updateRate();
})
window.addEventListener("load",(evt)=>{
    updateRate();
})