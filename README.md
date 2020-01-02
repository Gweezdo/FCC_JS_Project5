# FCC_JS_Project5
Free Code Camp JavaScript Project 5 - Cash Register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Currency Unit	            Amount
Penny	                    $0.01 (PENNY)
Nickel	                    $0.05 (NICKEL)
Dime	                    $0.1 (DIME)
Quarter	                    $0.25 (QUARTER)
Dollar	                    $1 (DOLLAR)
Five Dollars	            $5 (FIVE)
Ten Dollars	                $10 (TEN)
Twenty Dollars	            $20 (TWENTY)
One-hundred Dollars	        $100 (ONE HUNDRED)


First thoughts on how to solve:

// get the difference between the purchase price and the cash given by the client: delta_x = cash - price;
// run a for loop that iterates through a currencyUnitArray, starting with "One-hundred Dollars" (100) and ending with "Penny" (0.01)
// run an "if" statement checking if Math.floor(delta_x/currencyUnitArray[i]) > 1
// if true:
           currencyAmmountRequired =  Math.floor(delta_x/currencyUnitArray[i]) * currencyUnitArray[i]
           if(currencyAmmountRequired > cid[i][1]){
               // use the ammount available in the cash register (cid[i][1])
               // push this to the change array i.e. ["TWENTY", 60]
               // delta_x - cid[i][1]
           }else
            // use delta_x - currencyAmmountRequired

// if false:
            increment "i" and check again