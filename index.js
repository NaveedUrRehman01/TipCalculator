
 let bill = document.getElementById('billOrder').value;
 let numOfPeople  = document.getElementById('numOfPeople').value;
 let custom  = document.getElementById('custom').value;

 function getBill(){
    
    var billPerPerson = bill / numOfPeople;
    var tip = billPerPerson * 0.05;
    var totalBillPerPerson = billPerPerson + tip; 
    document.getElementById('tipamount').innerHTML = "$" + tip.toFixed(2);
    document.getElementById('total').innerHTML = "$" + totalBillPerPerson.toFixed(2)
  
}
function getBill2(){
    
    var billPerPerson = bill / numOfPeople;
    var tip = billPerPerson * 0.10;
    var totalBillPerPerson = billPerPerson + tip;
    document.getElementById('tipamount').innerHTML = "$" + tip.toFixed(2);
    document.getElementById('total').innerHTML = "$" + totalBillPerPerson.toFixed(2)
   
}
function getBill3(){
    
    var billPerPerson = bill / numOfPeople;
    var tip = billPerPerson * 0.15;
    var totalBillPerPerson = billPerPerson + tip;
    document.getElementById('tipamount').innerHTML = "$" + tip.toFixed(2);
    document.getElementById('total').innerHTML = "$" + totalBillPerPerson.toFixed(2)
   
}
function getBill4(){
    
    var billPerPerson = bill / numOfPeople;
    var tip = billPerPerson * 0.25;
    var totalBillPerPerson = billPerPerson + tip;
    document.getElementById('tipamount').innerHTML = "$" + tip.toFixed(2);
    document.getElementById('total').innerHTML = "$" + totalBillPerPerson.toFixed(2)
}
function getBill5(){
    
    var billPerPerson = bill / numOfPeople;
    var tip = billPerPerson * 0.50;
    var totalBillPerPerson = billPerPerson + tip;
    document.getElementById('tipamount').innerHTML = "$" + tip.toFixed(2);
    document.getElementById('total').innerHTML = "$" + totalBillPerPerson.toFixed(2)
}
function CustomBill(){
    
    var billPerPerson = bill / numOfPeople;
    var tip = billPerPerson * custom / 100;
    var totalBillPerPerson = billPerPerson + tip;
    document.getElementById('tipamount').innerHTML = "$" + tip.toFixed(2);
    document.getElementById('total').innerHTML = "$" + totalBillPerPerson.toFixed(2)

}
function Reset(){
     document.getElementById('billOrder').value = "0";
      document.getElementById('numOfPeople').value = "0";
      document.getElementById('custom').value = " ";
      document.getElementById('tipamount').innerHTML = "$0.00"
      document.getElementById('total').innerHTML = "$0.00" 
     console.log(custom)
}