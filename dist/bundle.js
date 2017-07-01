(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    return `Hello ${name}
	From Node &amp; TypeScript.`;
}
exports.sayHello = sayHello;

},{}],2:[function(require,module,exports){
"use strict";
//this file is a result of following alone @https://www.typescriptlang.org/docs/handbook/gulp.html
//in an effort to actually have something that works besides npm
Object.defineProperty(exports, "__esModule", { value: true });
const greet_1 = require("./greet");
// console.log( sayHello("Inline "))
function showHello(divId, name) {
    const elem = document.getElementById(divId);
    elem.innerText = greet_1.sayHello(name);
}
showHello("greeting", "TypeScript");

},{"./greet":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2UvZ3JlZXQudHMiLCJzb3VyY2UvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsa0JBQTBCLElBQVk7SUFDckMsTUFBTSxDQUFDLFNBQVMsSUFBSTs2QkFDUSxDQUFDO0FBQzlCLENBQUM7QUFIRCw0QkFHQzs7OztBQ0hELGtHQUFrRztBQUNsRyxnRUFBZ0U7O0FBRWhFLG1DQUFtQztBQUVuQyxvQ0FBb0M7QUFFcEMsbUJBQW1CLEtBQVksRUFBRSxJQUFXO0lBQzNDLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFHRCxTQUFTLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBmdW5jdGlvbiBzYXlIZWxsbyggbmFtZTogc3RyaW5nICl7XG5cdHJldHVybiBgSGVsbG8gJHtuYW1lfVxuXHRGcm9tIE5vZGUgJmFtcDsgVHlwZVNjcmlwdC5gO1xufVxuIiwiLy90aGlzIGZpbGUgaXMgYSByZXN1bHQgb2YgZm9sbG93aW5nIGFsb25lIEBodHRwczovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmcvZG9jcy9oYW5kYm9vay9ndWxwLmh0bWxcbi8vaW4gYW4gZWZmb3J0IHRvIGFjdHVhbGx5IGhhdmUgc29tZXRoaW5nIHRoYXQgd29ya3MgYmVzaWRlcyBucG1cblxuaW1wb3J0IHsgc2F5SGVsbG8gfVx0ZnJvbSBcIi4vZ3JlZXRcIjtcblxuLy8gY29uc29sZS5sb2coIHNheUhlbGxvKFwiSW5saW5lIFwiKSlcblxuZnVuY3Rpb24gc2hvd0hlbGxvKGRpdklkOnN0cmluZywgbmFtZTpzdHJpbmcpe1xuXHRjb25zdCBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGl2SWQpO1xuXHRlbGVtLmlubmVyVGV4dCA9IHNheUhlbGxvKG5hbWUpO1xufVxuXG5cbnNob3dIZWxsbyhcImdyZWV0aW5nXCIsIFwiVHlwZVNjcmlwdFwiKTtcbiJdfQ==
