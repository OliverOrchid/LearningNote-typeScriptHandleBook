
//作用域对象组成了一个名为作用域链（scope chain）的（调用）链。它和 JavaScript 的对象
//系统使用的原型（prototype）链相类似。

function makeAdder(a){
    return function(b) {
        return a+b;
    }
}
var add5 = makeAdder(5);
var add20 = makeAdder(20);
console.log(add5(6));
console.log(add20(7));


// console.log(parseInt("10ab123",8));

// var obj1 = {};

// // var obj2 = new Object();

// var obj = {
//     name:"Carrot",
//     "_for":"Max",
//     details:{
// //         color:"Orange",
// //         weight:"300g"

// //     }
// // }

// // console.log("NO1"+obj._for);
// // console.log("NO2"+obj.details.weight);


// function  pplus(...oliver){
    
//     var total=1;

//     // for(i = 0, j = arguments.length;i<j;i++){
        
//          // total *= arguments[i];
//     // }
//     // 
//     // return ;

//     for(let item of oliver){
//         total *= item;
        
//     }
//     return total;

// }

// sumTest = pplus(3,6,-8,);
// console.log(sumTest);   


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

// // var a=1 , b=2;
// // (function(){
// //     var b=3;
// //     a+=b;
// // })();

// // console.log("a="+a+"   b="+b);



// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////


// function countChars(elm) {
//     if (elm.nodeType == 3) { // TEXT_NODE 文本节点
//     return elm.nodeValue.length;
//     }
//     var count = 0;
//     for (var i = 0, child; child = elm.childNodes[i]; i++) {
//     count += countChars(child);
//     }
//     return count;
//     }




// function makePerson(first, last){
//     return{
//         first:first,
//         last:last,
//         FullNameReversed:function(){
//             return this.last + ","+this.first;
//         },
//         FullName: function(){
//             return this.first+" "+this.last;
//         }

//     }
// }

// function personFullName(person){
//     return person.first + ' '+person.last;

// }

// function personFullNameReversed(person){
//     return person.last+ ',' + person.first
// }

// s = makePerson("Simon","Willison");

// console.log(s.FullNameReversed()+"\n");

// console.log(s.FullName()+"\n"); 

// var temp = s.FullName;

// console.log(temp());

// //PROGRESS!!!!!!!!!!!!!!
// //JavaScript 允许在一个函数内部定义函数，这一点我们在之前的 makePerson() 例子中也见
















