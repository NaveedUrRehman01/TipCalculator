
let custom  = document.getElementById('custom').value;

 function getBill(){
    let bill = document.getElementById('billOrder').value;
    let numOfPeople  = document.getElementById('numOfPeople').value;
 
    var billPerPerson = (bill / numOfPeople);
    var tip = billPerPerson * 0.05;
    var totalBillPerPerson = billPerPerson + tip; 
    document.getElementById('tipamount').innerHTML = "$" + tip.toFixed(2);
    document.getElementById('total').innerHTML = "$" + totalBillPerPerson.toFixed(2)
    
}
function getBill2(){
    let bill = document.getElementById('billOrder').value;
    let numOfPeople  = document.getElementById('numOfPeople').value;
   
    var billPerPerson = bill / numOfPeople;
    var tip = billPerPerson * 0.10;
    var totalBillPerPerson = billPerPerson + tip;
    document.getElementById('tipamount').innerHTML = "$" + tip.toFixed(2);
    document.getElementById('total').innerHTML = "$" + totalBillPerPerson.toFixed(2)
}
function getBill3(){
    let bill = document.getElementById('billOrder').value;
    let numOfPeople  = document.getElementById('numOfPeople').value;
    var billPerPerson = bill / numOfPeople;
    var tip = billPerPerson * 0.15;
    var totalBillPerPerson = billPerPerson + tip;
    document.getElementById('tipamount').innerHTML = "$" + tip.toFixed(2);
    document.getElementById('total').innerHTML = "$" + totalBillPerPerson.toFixed(2)
    
}
function getBill4(){
    let bill = document.getElementById('billOrder').value;
    let numOfPeople  = document.getElementById('numOfPeople').value;
    var billPerPerson = bill / numOfPeople;
    var tip = billPerPerson * 0.25;
    var totalBillPerPerson = billPerPerson + tip;
    document.getElementById('tipamount').innerHTML = "$" + tip.toFixed(2);
    document.getElementById('total').innerHTML = "$" + totalBillPerPerson.toFixed(2)
    
}
function getBill5(){
    let bill = document.getElementById('billOrder').value;
    let numOfPeople  = document.getElementById('numOfPeople').value;
    var billPerPerson = bill / numOfPeople;
    var tip = billPerPerson * 0.50;
    var totalBillPerPerson = billPerPerson + tip;
    document.getElementById('tipamount').innerHTML = "$" + tip.toFixed(2);
    document.getElementById('total').innerHTML = "$" + totalBillPerPerson.toFixed(2)
   
}
function CustomBill(){
    let bill = document.getElementById('billOrder').value;
    let numOfPeople  = document.getElementById('numOfPeople').value;
    var billPerPerson = bill / numOfPeople;
    var tip = billPerPerson * custom / 100;
    var totalBillPerPerson = billPerPerson + tip;
    document.getElementById('tipamount').innerHTML = "$" + tip.toFixed(2);
    document.getElementById('total').innerHTML = "$" + totalBillPerPerson.toFixed(2)
    
}
function Reset(){
    let bill = document.getElementById('billOrder').value;
    let numOfPeople  = document.getElementById('numOfPeople').value;
    
    document.getElementById('billOrder').value = '';
      document.getElementById('numOfPeople').value = '';
      document.getElementById('custom').value = '';
      document.getElementById('tipamount').innerHTML = "$" + 0 +".00";
      document.getElementById('total').innerHTML = "$" + 0 +".00" ;
     console.log(custom)
   
}