site.msg("Chapter 3...", 63);
console.log(greetNamed("ToddJMullen"));
function greetNamed(name) {
    if (name) {
        return "Hello " + name;
    }
}
var greetUnnamed;
greetUnnamed = function (name) {
    if (name) {
        return "Hi " + name;
    }
};
console.log(greetUnnamed("ToddJMullen"));
var greet2 = function (name) {
    return "Hello from greet 2 " + name;
};
function add(a, b, c) {
    return a + b + c;
}
console.log("add(1):", add(1));
console.log("add(1,2):", add(1, 2));
console.log("add(1,2,3):", add(1, 2, 3));
function add2or3(a, b, c) {
    return a + b + (c === undefined ? 0 : c);
}
console.log("add2or3(1):", add2or3(1));
console.log("add2or3(1,2):", add2or3(1, 2));
console.log("add2or3(1,2,3):", add2or3(1, 2, 3));
function add3(a, b, c) {
    if (c === void 0) { c = 0; }
    b = (b !== undefined) ? b : 0;
    return a + b + c;
}
console.log("add3(1):", add3(1));
console.log("add3(1,2):", add3(1, 2));
console.log("add3(1,2,3):", add3(1, 2, 3));
function addNumbers() {
    var nums = [];
    for (var _a = 0; _a < arguments.length; _a++) {
        nums[_a] = arguments[_a];
    }
    var total = 0;
    for (var i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total;
}
console.log("addNumbers(1):", addNumbers(1));
console.log("addNumbers(1,2):", addNumbers(1, 2));
console.log("addNumbers(1,2,3):", addNumbers(1, 2, 3));
console.log("addNumbers(1,2,3,4):", addNumbers(1, 2, 3, 4));
console.log("addNumbers(1,2,3,4,5):", addNumbers(1, 2, 3, 4, 5));
function greet(value) {
    var str = "";
    switch (typeof value) {
        case "string":
            str = "Hello  " + value;
            break;
        case "number":
            str = "I see you're " + value + " years old.";
            break;
        case "boolean":
            str = value ? "I'm hungry too!" : "You're not hungry, but I am.";
            break;
        default:
            str = "Unknown input param type: " + typeof value;
            console.log(str);
            throw str;
    }
    return str;
}
console.log("greet('Todd'):", greet("Todd"));
console.log("greet(23):", greet(23));
console.log("greet(true):", greet(true));
console.info("\n\nSpecial overloaded signatures");
;
function createElement(tagName) {
    var elem;
    switch (tagName) {
        case "div":
            elem = document.createElement("div");
            break;
        case "span":
            elem = document.createElement("span");
            break;
        case "canvas":
            elem = document.createElement("canvas");
            break;
        default:
            elem = document.createElement(tagName);
            break;
    }
    return elem;
}
console.log("createElement('div')", createElement('div'));
console.log("createElement('span')", createElement('span'));
console.log("createElement('canvas')", createElement('canvas'));
console.log("createElement('p')", createElement('p'));
var globalBar = 0;
console.info("\n\nDefine an IIFE & pass it the global scope object");
(function (global) {
    var foo = 9;
    globalBar = 1;
    console.log("IIFE(globalBar)", globalBar);
    global.globalBar = 2;
    console.log("IIFE(global.globalBar)", global.globalBar);
})(this);
console.info("\n\nUsing the IIFE pattern to isolate  variables");
site.msg("Note to self, this (TypeScript) is not using current native Javascript 'Class IIFE patterns' (ES5 & under)"
    + "\nIt is transpiling the Javascript into mre familiar paradigms"
    + ", but not the sort that will protext a private var.", site.counter.get());
var Counter = (function () {
    function Counter() {
        console.log("Counter::constructor()");
        this.reset();
    }
    Counter.prototype.get = function () {
        console.log("Counter::get()");
        return this._i;
    };
    Counter.prototype.set = function (i) {
        console.log("Counter::set()", i);
        this._i = i;
    };
    Counter.prototype.increment = function () {
        console.log("Counter::increment()");
        ++this._i;
    };
    Counter.prototype.decrement = function () {
        console.log("Counter::decrement()");
        --this._i;
    };
    Counter.prototype.reset = function () {
        console.log("Counter::reset()");
        this._i = 0;
    };
    return Counter;
}());
var counter = new Counter();
console.log("Counter.get()", counter.get());
counter.set(17);
console.log("Set the page # of this code:\ncounter.set(77)\counter.get()", counter.get());
console.log("counter.increment()\counter.get()", counter.get());
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log("4 x counter.increment()\ncounter.get()", counter.get());
counter.decrement();
console.log("1 x counter.decrement()\ncounter.get()", counter.get());
counter.reset();
counter.set(77);
console.log("Reset & Set the page # of this code:\ncounter.reset()//superfluous call"
    + "\ncounter.set(77)\ncounter.get()", counter.get());
site.msg("Fourteen pages into Chapter 3 &ndash; if you can't tell you're not looking hard enough. 8)", counter.get());
