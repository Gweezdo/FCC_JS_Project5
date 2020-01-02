function checkCashRegister(price, cash, cid) { // price = 3.26, cash = 100
    var output = {status: "placeholder", change: []};
    // Here is your change, ma'am.

    let reversedCid = cid.slice().reverse();

    const CURRENCY_ARR = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
    let changeTotal = cash - price; // 96.74 = 100-3.26

    for(let i=0; i<CURRENCY_ARR.length; i++){
        let ratio = Math.floor(changeTotal/CURRENCY_ARR[i]); //ratio = Math.floor(96.74/20) = 4
        if(ratio >= 1){
            let cashAmmountReq = CURRENCY_ARR[i]*ratio; // 20*4 = 80
            if(cashAmmountReq > reversedCid[i][1]){ // 80 > 60
                console.log("cashAmmountReq = " + cashAmmountReq);
                console.log("reversedCid[i][1] = " +  reversedCid[i][1]);

                out.change.push(reversedCid[i]); // ["TWENTY", 60]
                changeTotal-reversedCid[i][1];   // 96.74 - 60
                console.log('changeTotal = ' + changeTotal)   
            }

        }else{


        }
    }



    // tests:

    // out.status = "Open";
    // console.log(out.status);
    // out.change.push(["PENNY", 1.01]);
    // out.change.push(["DIME", 3.1]);
    // console.log(out.change);



    // return change;


  }
  
  // Example cash-in-drawer array:
  // [["PENNY", 1.01],
  // ["NICKEL", 2.05],
  // ["DIME", 3.1],
  // ["QUARTER", 4.25],
  // ["ONE", 90],
  // ["FIVE", 55],
  // ["TEN", 20],
  // ["TWENTY", 60],
  // ["ONE HUNDRED", 100]]
  
  checkCashRegister(3.26, 100,  [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],                                  ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 