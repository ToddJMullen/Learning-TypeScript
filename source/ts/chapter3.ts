//Chapter 3, Working with functions
//I'm just going to goof around with some of the elementary examples covering the
//basics of ts so that there is something to compile and give me somehting to
//tinker with as far as code goes and see what Atom does, how it does it, & try to get used to it more.
//...though I'll be hard pressed to ever prefer it over Netbeans... xD



//functions
console.log("Chapter 3...");


console.log(greetNamed("ToddJMullen"));
//console.log(greetUnnamed("ToddJMullen"));//won't work b/c fn expression won't be defined

//function declaration
//parsed/evaluated as read
function greetNamed( name: string ):string
{
	if( name ){
		return "Hello " + name;
	}
}


//function expression
//We can also declate the type of the function variable/expression
var greetUnnamed: (name:string) => string//fn with one string input that returns a string
//Js engine cannot evaluate it until assignment is done & is not hoisted to/before the console.log above.
greetUnnamed = function(name:string):string
{
	if( name ){
		return "Hi " + name;
	}
}
console.log(greetUnnamed("ToddJMullen"));//will work b/c is after completed assignment

//combine type declaration, assignement, & definition in one
var greet2: (name:string) => string
			 = function(name:string):string
{
	return "Hello from greet 2 " + name;
}

//functions with normal params
function add(a:number, b:number, c:number):number
{
	return a + b + c;
}
console.log( "add(1):", add(1) );
console.log( "add(1,2):", add(1,2) );
console.log( "add(1,2,3):", add(1,2,3) );


//make one optional with manual defaulting
function add2or3(a:number, b:number, c?:number):number
{
	return a + b + (c === undefined ? 0 : c );
}
console.log( "add2or3(1):", add2or3(1) );
console.log( "add2or3(1,2):", add2or3(1,2) );
console.log( "add2or3(1,2,3):", add2or3(1,2,3) );


//make one option & one optional with default
function add3(a:number, b?:number, c:number = 0):number
{
	b = (b !== undefined) ? b : 0;
	return a + b + c;
}
console.log( "add3(1):", add3(1) );
console.log( "add3(1,2):", add3(1,2) );
console.log( "add3(1,2,3):", add3(1,2,3) );



//use rest params so that the fn allows unlimited/variable params
function addNumbers( ...nums:number[] ):number
{//if target is below ES6, ts will rebuild this using two loops
//one to extract from arguments, another to add
//in that case, don't use the rest param demarcator "..."
	var total:number = 0;
	for( var i = 0; i < nums.length; i++ ){
		total += nums[i];
	}
	return total;
}

console.log( "addNumbers(1):", addNumbers(1) );
console.log( "addNumbers(1,2):", addNumbers(1,2) );
console.log( "addNumbers(1,2,3):", addNumbers(1,2,3) );
console.log( "addNumbers(1,2,3,4):", addNumbers(1,2,3,4) );
console.log( "addNumbers(1,2,3,4,5):", addNumbers(1,2,3,4,5) );

//function overloading








