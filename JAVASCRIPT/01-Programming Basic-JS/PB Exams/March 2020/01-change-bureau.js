function changeBureau(input){
    let bitcoins = Number(input[0]);
    let yuans = Number(input[1]);
    let taxes = Number(input[2]);

    let bitcoinPrice = 1168;
    let usd = 1.76;
    let yuanPrice = usd * 0.15;
    let euro = 1.95;
    
    let bitcoinToLev = bitcoins * bitcoinPrice;
    let yuanToLev = yuans * yuanPrice;

    let moneyToEuro = (bitcoinToLev + yuanToLev) / euro;
    moneyToEuro = moneyToEuro - (moneyToEuro * (taxes / 100) )

    console.log(moneyToEuro.toFixed(2));


}


changeBureau(["7",
"50200.12",
"3"])
