(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    return "Hello from " + name;
}
exports.sayHello = sayHello;
},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greet_1 = require("./greet");
// //#1
// function hello(arg:string){
//     console.log(arg);
// }
// hello("Hi,OLIVER01!");
// //#2
// console.log(sayHello("TypeScript02"));
function showHello(divName, name) {
    var ele = document.getElementById(divName); //另见 index.html L9
    ele.innerText = greet_1.sayHello(name);
}
showHello("greeting", "OLIVERORCHID! Welcome to TSWorld~~~");
},{"./greet":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZ3JlZXQudHMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsU0FBZ0IsUUFBUSxDQUFDLElBQVc7SUFDaEMsT0FBTyxnQkFBYyxJQUFNLENBQUM7QUFDaEMsQ0FBQztBQUZELDRCQUVDOzs7O0FDRkQsaUNBQWtDO0FBRWxDLE9BQU87QUFDUCw4QkFBOEI7QUFDOUIsd0JBQXdCO0FBQ3hCLElBQUk7QUFFSix5QkFBeUI7QUFJekIsT0FBTztBQUNQLHlDQUF5QztBQUV6QyxTQUFTLFNBQVMsQ0FBQyxPQUFjLEVBQUMsSUFBVztJQUN6QyxJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsa0JBQWtCO0lBQ2hFLEdBQUcsQ0FBQyxTQUFTLEdBQUUsZ0JBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsQyxDQUFDO0FBRUQsU0FBUyxDQUFDLFVBQVUsRUFBQyxxQ0FBcUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZXhwb3J0IGZ1bmN0aW9uIHNheUhlbGxvKG5hbWU6c3RyaW5nKXtcclxuICAgIHJldHVybiBgSGVsbG8gZnJvbSAke25hbWV9YDtcclxufSIsImltcG9ydCB7c2F5SGVsbG99IGZyb20gXCIuL2dyZWV0XCIgO1xyXG5cclxuLy8gLy8jMVxyXG4vLyBmdW5jdGlvbiBoZWxsbyhhcmc6c3RyaW5nKXtcclxuLy8gICAgIGNvbnNvbGUubG9nKGFyZyk7XHJcbi8vIH1cclxuXHJcbi8vIGhlbGxvKFwiSGksT0xJVkVSMDEhXCIpO1xyXG5cclxuXHJcblxyXG4vLyAvLyMyXHJcbi8vIGNvbnNvbGUubG9nKHNheUhlbGxvKFwiVHlwZVNjcmlwdDAyXCIpKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dIZWxsbyhkaXZOYW1lOnN0cmluZyxuYW1lOnN0cmluZyl7XHJcbiAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaXZOYW1lKTsgLy/lj6bop4EgaW5kZXguaHRtbCBMOVxyXG4gICAgZWxlLmlubmVyVGV4dD0gc2F5SGVsbG8obmFtZSk7XHJcbn1cclxuXHJcbnNob3dIZWxsbyhcImdyZWV0aW5nXCIsXCJPTElWRVJPUkNISUQhIFdlbGNvbWUgdG8gVFNXb3JsZH5+flwiKTsiXX0=
