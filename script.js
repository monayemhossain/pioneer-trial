var loginBtn = document.getElementById("login");

// login button event handler
loginBtn.addEventListener("click",function () {
    var loginArea = document.getElementById("login-area");
    loginArea.style.display="none";

   var transaction =  document.getElementById("transaction-area");
   transaction.style.display ="block";
   
});

// transaction button event handler

var deposit = document.getElementById("addDeposit");

deposit.addEventListener("click", function(){
   var depositAmount =document.getElementById("depositAmount").value;
   var depositNumber = parseFloat(depositAmount);
   
});


