//Chapter 3, Working with functions
//I'm just going to goof around with some of the elementary examples covering the
//basics of ts so that there is something to compile and give me somehting to
//tinker with as far as code goes and see what Atom does, how it does it, & try to get used to it more.
//...though I'll be hard pressed to ever prefer it over Netbeans... xD

//functions
console.log(greetNamed("ToddJMullen"));
// console.log(greetUnnamed("ToddJMullen"));

function greetNamed( name: string ){
	if( name ){
		return "Hello " + name;
	}
}
