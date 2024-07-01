/// W7(92) Closures

//closure with adding methods
function createAccount(initial){
var balance =initial;
return {
    withdraw : function (amout){
    if (balance-amout >= 0){
        balance = balance-amout
        return "success your new balance is : " + balance
    }else {
        return "failed"
    }
},
    deposit : function (amout){
    balance = balance + amout 
    return "succes your new balance is :" + balance
},
checkBalance : function (){
    return "your balance is "+ balance 
}
};
}
 var zahraAccount = createAccount()

 