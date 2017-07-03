//this file is a result of following alone @https://www.typescriptlang.org/docs/handbook/gulp.html
//in an effort to actually have something that works besides npm

import { sayHello }	from "./greet";

// console.log( sayHello("Inline "))

function showHello(divId:string, msg:string){
	const elem = document.getElementById(divId);
	elem.innerText = sayHello( msg );
}

showHello("greeting", "TypeScript");
