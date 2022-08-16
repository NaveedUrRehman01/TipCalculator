
 const bill = document.getElementById('billOrder').value;
 const numOfPeople  = document.getElementById('numOfPeople').value;
 const custom  = document.getElementById('custom').value;

 function getBill(){
    
    const billPerPerson = bill / numOfPeople;
    const tip = billPerPerson * 0.05;
    const totalBillPerPerson = billPerPerson + tip; 
    document.getElementById('tipamount').innerHTML = "$" + tip.toFixed(2);
    document.getElementById('total').innerHTML = "$" + totalBillPerPerson.toFixed(2)
  
}
function getBill2(){
    
    const billPerPerson = bill / numOfPeople;
    const tip = billPerPerson * 0.10;
    const totalBillPerPerson = billPerPerson + tip;
    document.getElementById('tipamount').innerHTML = "$" + tip.toFixed(2);
    document.getElementById('total').innerHTML = "$" + totalBillPerPerson.toFixed(2)
   
}
function getBill3(){
    
    const billPerPerson = bill / numOfPeople;
    const tip = billPerPerson * 0.15;
    const totalBillPerPerson = billPerPerson + tip;
    document.getElementById('tipamount').innerHTML = "$" + tip.toFixed(2);
    document.getElementById('total').innerHTML = "$" + totalBillPerPerson.toFixed(2)
   
}
function getBill4(){
    
    const billPerPerson = bill / numOfPeople;
    const tip = billPerPerson * 0.25;
    const totalBillPerPerson = billPerPerson + tip;
    document.getElementById('tipamount').innerHTML = "$" + tip.toFixed(2);
    document.getElementById('total').innerHTML = "$" + totalBillPerPerson.toFixed(2)
}
function getBill5(){
    
    const billPerPerson = bill / numOfPeople;
    const tip = billPerPerson * 0.50;
    const totalBillPerPerson = billPerPerson + tip;
    document.getElementById('tipamount').innerHTML = "$" + tip.toFixed(2);
    document.getElementById('total').innerHTML = "$" + totalBillPerPerson.toFixed(2)
}
function CustomBill(){
    
    const billPerPerson = bill / numOfPeople;
    const tip = billPerPerson * custom / 100;
    const totalBillPerPerson = billPerPerson + tip;
    document.getElementById('tipamount').innerHTML = "$" + tip.toFixed(2);
    document.getElementById('total').innerHTML = "$" + totalBillPerPerson.toFixed(2)
}
