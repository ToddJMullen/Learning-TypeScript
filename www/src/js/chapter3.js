console.log("Chapter 3...");
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
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
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
