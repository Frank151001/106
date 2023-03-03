// var button = document.getElementById("addBtn");
// button.innerText="Add";

function sayHello(name){
    console.log("Hello World!"+name);
}
let year=2023;

function test(){
    console.log("do something");
}

function numbers(){
    for(let i=0;i<=20;i++){
     if(i!=5){
         console.log(i);
     }
    }
}

function sum(num1,num2){
    let result = num1+num2;
    console.log(result);
    return result;
}
function limit(stop){
    
    for(let i=0;i<=stop;i++){

        if(i==5){
            console.log("5");
        }
       }
}

function init(){
    test();
    numbers();
    sayHello("Samantha");
    sayHello("Sergio");
    console.log(year);
    sum();
}
window.onload=init;