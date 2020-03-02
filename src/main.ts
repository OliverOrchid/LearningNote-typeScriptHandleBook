import {sayHello} from "./greet" ;

// //#1
// function hello(arg:string){
//     console.log(arg);
// }

// hello("Hi,OLIVER01!");



// //#2
// console.log(sayHello("TypeScript02"));

function showHello(divName:string,name:string){
    const ele = document.getElementById(divName); //另见 index.html L9
    ele.innerText= sayHello(name);
}

showHello("greeting","OLIVERORCHID! Welcome to TSWorld~~~");