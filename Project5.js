function checkCashRegister(price, cash, cid) { // price = 3.26, cash = 100
    var output = {status: "placeholder", change: []};
    // Here is your change, ma'am.

    let reversedCid = cid.slice().reverse();

    const CURRENCY_ARR = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
    let changeTotal = cash - price; // 0.5 = 20-19.5
    changeTotal = Math.round(changeTotal*100) / 100;

    for(let i=0; i<CURRENCY_ARR.length; i++){
        let ratio = Math.floor(changeTotal/CURRENCY_ARR[i]); //ratio = Math.floor(0.5/100) = 0.005
        if(ratio >= 1){
            let cashAmmountReq = CURRENCY_ARR[i]*ratio; // 10*3 = 30
            if(cashAmmountReq > reversedCid[i][1]){ // 30 > 20
                // console.log("cashAmmountReq = " + cashAmmountReq);
                // console.log("reversedCid[i][1] = " +  reversedCid[i][1]);

                output.change.push(reversedCid[i]); // ["TWENTY", 60]
                changeTotal = Math.round(changeTotal*100) / 100;
                changeTotal-=reversedCid[i][1];   // 96.74 - 60 = 36.74  
            }else{
                // console.log("cashAmmountReq = " + cashAmmountReq);
                // console.log("reversedCid[i][1] = " +  reversedCid[i][1]);

                reversedCid[i][1]=cashAmmountReq;
                output.change.push(reversedCid[i]);

                changeTotal-=cashAmmountReq; 
                changeTotal = Math.round(changeTotal*100) / 100;
                // console.log('changeTotal = ' + changeTotal)
            }

        }else{
            
            console.log( i + "tbd")


        }
    }
    console.log(output.change)



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
  

  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
  
  checkCashRegister(3.26, 100,  [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],                                  ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 

  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])