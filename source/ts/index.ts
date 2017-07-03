console.log("Hello from index.ts");
var pageAry	= [
	"chapter3.html"
]
,title		= document.getElementById("greeting")
,nav		= document.getElementById("nav");
;


pageAry.map((filename) => {
   li				= document.createElement("li");
   a				= document.createElement("a");
   a.setAttribute("href", filename );
   a.innerText		= filename;
   li.appendChild(a);
   nav.appendChild(li);
});

title.innerText = "Created " + pageAry.length + " page links.";

