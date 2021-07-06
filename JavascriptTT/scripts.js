function add(a,b){
    console.log("Addition of "+a+" and "+b+" is "+(a+b))
    document.getElementById('domdom').innerHTML = (a+b);
}

function subtract(a,b){
    console.log("Subtraction of "+a+" and "+b+" is "+(a-b))
    document.getElementById('domdom').innerHTML = (a-b);
}

function multiply(a,b){
    console.log("Multiplication of "+a+" and "+b+" is "+(a*b))
    document.getElementById('domdom').innerHTML = (a*b);
}

function divide(a,b){
if (b!=0){
    console.log("Division of "+a+" and "+b+" is "+(a/b));
    document.getElementById('domdom').innerHTML = (a/b);
}
else{
    console.log("Division by Zero Error");
    document.getElementById('domdom').innerHTML = "Error";
}
}