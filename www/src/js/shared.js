class BookSite {
    constructor(pageAry) {
        this.NAME_BOOK_TITLE = "Learning TypeScript";
        this.NAME_DOM_MSG_LOG = "pageMsgs";
        this.NAME_DOM_TITLE = "pageTitle";
        this.NAME_DOM_SUBTITLE = "pageSubTitle";
        this.NAME_DOM_NAV = "pageNav";
        this.URI_CH3_USERS = "api/users.json";
        this.URI_CH3_ORDERS = "api/orders.json";
        this.pageAry = [];
        this._title = document.getElementById(this.NAME_DOM_TITLE);
        this._subTitle = document.getElementById(this.NAME_DOM_SUBTITLE);
        this._nav = document.getElementById(this.NAME_DOM_NAV);
        this.pageAry = pageAry;
        console.log("Book " + this.NAME_BOOK_TITLE + " currently has "
            + this.pageAry.length + " pages defined:", this.pageAry);
        this.detectCurrentPage();
        this.counter = new TsCounter();
        if (!this._title) {
            console.warn("The page's DOM title element was not found. Id:", this.NAME_DOM_TITLE);
        }
        else {
            this._title.innerHTML = "Learning TypeScript: " + this._currentPage.label;
            this._subTitle.innerHTML = this._currentPage.title;
        }
        if (this._nav && this.pageAry.length) {
            this.buildNavMenu();
        }
        else {
            console.warn("The page's DOM nav element was not found. Id:", this.NAME_DOM_NAV);
        }
        document.getElementById(this.NAME_DOM_MSG_LOG).innerText = "";
        return this;
    }
    buildNavMenu() {
        if (!this._nav || !this.pageAry.length) {
        }
        this.pageAry.map((page) => {
            var li = document.createElement("li"), a = document.createElement("a");
            a.setAttribute("href", page.filepath);
            a.setAttribute("title", page.title);
            a.innerText = page.label;
            li.appendChild(a);
            if (page.isActive) {
                li.setAttribute("class", "active");
            }
            this._nav.appendChild(li);
        });
        console.log("Created " + this.pageAry.length + " page links.");
    }
    log(msg) {
        var p = document.createElement("p"), page = document.getElementById(this.NAME_DOM_MSG_LOG);
        p.innerHTML = msg;
        page.appendChild(p);
    }
    title(title) {
        this.log("<h1>" + title + "</h1>");
    }
    hr() {
        this.log("<hr />");
    }
    section(label, page, line) {
        this.msg("<h2>" + label + "</h2>", page, line);
    }
    msg(msg, page, line = "") {
        console.log("BookSite::msg() called:", msg);
        if (msg) {
            if (page) {
                if (line) {
                    line = "<div class='line line" + line + "' title='Source Line #" + line + "'>#" + line + "</div>";
                }
                msg = "<hr /><div class='pageNum'>Pg " + page
                    + line + "</div>" + msg + "<hr />";
            }
            this.log(msg);
        }
    }
    detectCurrentPage() {
        var filepath = window.location.pathname.split("/").pop();
        this.pageAry.map(page => {
            page.isActive = page.filepath == filepath;
            if (page.isActive) {
                this._currentPage = page;
            }
        });
    }
    getHistoryObj() {
        let loc = window.location, filepath = loc.pathname, query = loc.search, hash = loc.hash, title = document.title, label = title;
        return new SitePage(filepath, query, hash, label, title, true);
    }
    setUri(location) {
        console.log("BookSite::setUri() called with SitePage location: ", location);
        let uri = window.location.pathname;
        if (location.filepath) {
            uri = location.filepath;
        }
        if (location.query) {
            if (location.query[0] != "?") {
                location.query = "?" + location.query;
            }
            uri += location.query;
        }
        if (location.hash) {
            if (location.hash[0] != "#") {
                location.hash = "#" + location.hash;
            }
            uri += location.hash;
        }
        window.history.pushState(location, location.title, uri);
        if (location.title) {
            document.title = this.NAME_BOOK_TITLE + " | " + location.title;
        }
        return uri;
    }
    checkForPageHash() {
        let hash = window.location.hash.replace("#", "");
        console.log("checkForPageHash() found: ", hash);
        if (hash) {
            if (/^\d*$/.test(hash)) {
                this.scrollTo(".line" + hash);
                return;
            }
            if (typeof hash === "string") {
                this.scrollTo(hash);
                return;
            }
        }
    }
    scrollTo(target) {
        console.log("scrollTo() got: ", target);
        let yPos = 0;
        if (typeof target === "number") {
            yPos = target;
        }
        else if (typeof target === "string") {
            target = $(target);
            if (!target.length) {
                console.error("No DOM element was found for selector: " + target);
                return;
            }
            yPos = target.position().top;
        }
        else if (target instanceof jQuery && target.length > 0) {
            yPos = target.position().top;
        }
        else if (typeof target === "object" && target.type && target.type === "click") {
            yPos = $(this).position().top;
        }
        $("body").animate({ scrollTop: yPos }, 1221);
    }
}
class SitePage {
    constructor(filepath, query, hash, label, title, isActive) {
        this.isActive = false;
        this.typeof = this.constructor.name;
        this.filepath = filepath;
        this.query = query;
        this.hash = hash;
        this.label = label;
        this.title = title;
        if (isActive !== undefined) {
            this.isActive = isActive;
        }
    }
}
class TsCounter {
    constructor() {
        console.log("TsCounter::constructor()");
        this.reset();
    }
    get() {
        console.log("TsCounter::get()");
        return this._i;
    }
    set(i) {
        console.log("TsCounter::set()", i);
        this._i = i;
    }
    increment() {
        console.log("TsCounter::increment()");
        ++this._i;
    }
    decrement() {
        console.log("TsCounter::decrement()");
        --this._i;
    }
    reset() {
        console.log("TsCounter::reset()");
        this._i = 0;
    }
}
var pageList = [
    new SitePage("index.html", "", "", "Home", "Home yada yada"),
    new SitePage("chapter2.html", "", "", "Chapter 2", "Automating your development workflow... ( hypothetically speaking =b )"),
    new SitePage("chapter3.html", "", "", "Chapter 3", "Working with Functions"),
    new SitePage("chapter4.html", "", "", "Chapter 4", "Object-OrientedProgramming with TypeScript")
];
var br = "<br />", page = new BookSite(pageList);
window.addEventListener("popstate", function (e) {
    console.log("popstate: ", e);
    page.checkForPageHash();
});
$(document).on("click", "h2, .pageNum", page.scrollTo);
$(document).ready(() => {
    console.log("doc.ready()...");
    page.checkForPageHash();
});
