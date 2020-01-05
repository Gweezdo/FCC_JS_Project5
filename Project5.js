function checkCashRegister(price, cash, cid) { // price = 3.26, cash = 100
    let changeArr = [];
    // Here is your change, ma'am.

    let reversedCid = cid.slice().reverse();

    const CURRENCY_ARR = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];

    // Total change required by customer
    let changeTotal = cash - price; 
    changeTotal = Math.round(changeTotal*100) / 100;
    console.log("changeTotal = " + changeTotal);

    // Total cash available in register
    let registerTotal = cid.flat().filter((x, i) => i % 2).reduce( (x, sum) => sum+=x);
    registerTotal = Math.round(registerTotal*100) / 100;
    console.log("registerTotal = " + registerTotal);
    

    // First test - if more change is required than what is available, return insufficient funds
    if(changeTotal > registerTotal){
        let output = {status: "INSUFFICIENT_FUNDS", change: []};
        console.log("changeTotal > registerTotal:");
        console.log(output);
        return output;
    }
    
    // Else if less change is required OR an equal ammount of change, execute the following code:

    for(let i=0; i<CURRENCY_ARR.length; i++){
        let ratio = Math.floor(changeTotal/CURRENCY_ARR[i]); 
        //if ratio >= 1 it means you can take change from this slot in the cash register, DEPENDING if there are bills/coins available to take.

        //if ratio is < 1 it means that you cannot take change from the slot, even if there are bills/coins available, because the teller needs much less than the current bill/coin slot.

        // *********************************************************************************
        if(ratio >= 1){
            let cashAmmountReq = CURRENCY_ARR[i]*ratio;         // Cash ammount of bills/coins required by the teller from this specific slot. 
            if(cashAmmountReq > reversedCid[i][1]){             // Checks for availability of bills/coins in slot. If True, more bills/coins are needed than what are available.

                changeArr.push(reversedCid[i]);             // Takes all the bills/coins that are available, i.e. push to output change object. 
                changeTotal = Math.round(changeTotal*100) / 100;
                changeTotal-=reversedCid[i][1];                 // Subtract the value of bills/coins just taken from the slot from the total ammount of change due to the client.  
                                                                // i increments by 1. New ratio is calculated based on the updated "changeTotal"
                registerTotal-=reversedCid[i][1];    

            }else{                                              // if cashAmmountRed is less than what is available in slot, i.e. more bills/coins in slot than what we need to take, we simply take the ammount needed.
                reversedCid[i][1]=cashAmmountReq;               
                changeArr.push(reversedCid[i]);
                
                changeTotal-=cashAmmountReq;                    // Subtract the value of bills/coins just taken from the slot from the total ammount of change due to the client.
                changeTotal = Math.round(changeTotal*100) / 100;
                registerTotal-=cashAmmountReq;
            }
        }         
        // *********************************************************************************

    }
    

    console.log("changeTotalAfter = " + changeTotal);
    console.log("registerTotalAfter = " + registerTotal);
    

    if(changeTotal == 0 && registerTotal == 0 ){ 
        let output = {status: "CLOSED", change: cid}
        console.log("changeTotal == 0 && registerTotal == 0:");
        console.log(output);
        return output;

    }else if(changeTotal == 0 && registerTotal > 0){
       let output = {status: "OPEN", change: changeArr}
       console.log("changeTotal == 0 && registerTotal > 0:");
       console.log(output);
       return output;
    }else if(changeTotal > 0 && registerTotal > 0){
        let output = {status: "INSUFFICIENT_FUNDS", change: []};
        console.log("changeTotal > 0 && registerTotal > 0:");
        console.log(output);
        return output; 
    }
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
  

//   checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
  
//   checkCashRegister(3.26, 100,  [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) 

//   checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

//   checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

//   checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])