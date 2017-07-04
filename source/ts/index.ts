console.log("Hello from index.ts");

//variables must have type declarations or the linter will complain that the "name cannot be found"

var pageAry	= [
	"chapter3.html"
]
,title:HTMLElement		= document.getElementById("greeting")
,nav:HTMLElement		= document.getElementById("nav");
;


pageAry.map((filename) => {
   let li:HTMLElement		= document.createElement("li")
   ,a:HTMLElement			= document.createElement("a");
   a.setAttribute("href", filename );
   a.innerText	= filename;
   li.appendChild(a);
   nav.appendChild(li);
});

title.innerText = "Created " + pageAry.length + " page links.";
console.log("... index.ts complete");

