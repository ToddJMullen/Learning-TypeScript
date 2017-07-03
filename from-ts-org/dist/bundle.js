(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    return `Hello ${name}
	From Node and TypeScript.`;
}
exports.sayHello = sayHello;

},{}],2:[function(require,module,exports){
"use strict";
//this file is a result of following alone @https://www.typescriptlang.org/docs/handbook/gulp.html
//in an effort to actually have something that works besides npm
Object.defineProperty(exports, "__esModule", { value: true });
const greet_1 = require("./greet");
// console.log( sayHello("Inline "))
function showHello(divId, msg) {
    const elem = document.getElementById(divId);
    elem.innerText = greet_1.sayHello(`${msg}!`);
}
showHello("greeting", "TypeScript");

},{"./greet":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzb3VyY2UvZ3JlZXQudHMiLCJzb3VyY2UvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsa0JBQTBCLElBQVk7SUFDckMsTUFBTSxDQUFDLFNBQVMsSUFBSTsyQkFDTSxDQUFDO0FBQzVCLENBQUM7QUFIRCw0QkFHQzs7OztBQ0hELGtHQUFrRztBQUNsRyxnRUFBZ0U7O0FBRWhFLG1DQUFtQztBQUVuQyxvQ0FBb0M7QUFFcEMsbUJBQW1CLEtBQVksRUFBRSxHQUFVO0lBQzFDLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxnQkFBUSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBRUQsU0FBUyxDQUFDLFVBQVUsRUFBRSxZQUFZLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJleHBvcnQgZnVuY3Rpb24gc2F5SGVsbG8oIG5hbWU6IHN0cmluZyApe1xuXHRyZXR1cm4gYEhlbGxvICR7bmFtZX1cblx0RnJvbSBOb2RlIGFuZCBUeXBlU2NyaXB0LmA7XG59XG4iLCIvL3RoaXMgZmlsZSBpcyBhIHJlc3VsdCBvZiBmb2xsb3dpbmcgYWxvbmUgQGh0dHBzOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy9kb2NzL2hhbmRib29rL2d1bHAuaHRtbFxuLy9pbiBhbiBlZmZvcnQgdG8gYWN0dWFsbHkgaGF2ZSBzb21ldGhpbmcgdGhhdCB3b3JrcyBiZXNpZGVzIG5wbVxuXG5pbXBvcnQgeyBzYXlIZWxsbyB9XHRmcm9tIFwiLi9ncmVldFwiO1xuXG4vLyBjb25zb2xlLmxvZyggc2F5SGVsbG8oXCJJbmxpbmUgXCIpKVxuXG5mdW5jdGlvbiBzaG93SGVsbG8oZGl2SWQ6c3RyaW5nLCBtc2c6c3RyaW5nKXtcblx0Y29uc3QgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdklkKTtcblx0ZWxlbS5pbm5lclRleHQgPSBzYXlIZWxsbyhgJHttc2d9IWApO1xufVxuXG5zaG93SGVsbG8oXCJncmVldGluZ1wiLCBcIlR5cGVTY3JpcHRcIik7XG4iXX0=
