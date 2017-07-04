var BookSite = (function () {
    function BookSite(pageAry) {
        this.NAME_BOOK_TITLE = "Learning TypeScript";
        this.NAME_DOM_MSG_LOG = "pageMsgs";
        this.NAME_DOM_TITLE = "pageTitle";
        this.NAME_DOM_SUBTITLE = "pageSubTitle";
        this.NAME_DOM_NAV = "pageNav";
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
    }
    BookSite.prototype.buildNavMenu = function () {
        var _this = this;
        if (!this._nav || !this.pageAry.length) {
        }
        this.pageAry.map(function (page) {
            var li = document.createElement("li"), a = document.createElement("a");
            a.setAttribute("href", page.filename);
            a.setAttribute("title", page.title);
            a.innerText = page.label;
            li.appendChild(a);
            if (page.isActive) {
                li.setAttribute("class", "active");
            }
            _this._nav.appendChild(li);
        });
        console.log("Created " + this.pageAry.length + " page links.");
    };
    BookSite.prototype.log = function (msg) {
        var p = document.createElement("p"), page = document.getElementById(this.NAME_DOM_MSG_LOG);
        p.innerHTML = msg;
        page.appendChild(p);
    };
    BookSite.prototype.msg = function (msg, page) {
        console.log("Page::msg() called:", msg);
        if (msg) {
            if (page) {
                msg = msg + "<br />Current page: #" + page + "<hr />";
            }
            this.log(msg);
        }
    };
    BookSite.prototype.detectCurrentPage = function () {
        var _this = this;
        var filename = window.location.pathname.split("/").pop();
        this.pageAry.map(function (page) {
            page.isActive = page.filename == filename;
            if (page.isActive) {
                _this._currentPage = page;
            }
        });
    };
    return BookSite;
}());
var Page = (function () {
    function Page(filename, label, title, isActive) {
        this.isActive = false;
        this.filename = filename;
        this.label = label;
        this.title = title;
        if (isActive !== undefined) {
            this.isActive = isActive;
        }
    }
    return Page;
}());
var TsCounter = (function () {
    function TsCounter() {
        console.log("Counter::constructor()");
        this.reset();
    }
    TsCounter.prototype.get = function () {
        console.log("Counter::get()");
        return this._i;
    };
    TsCounter.prototype.set = function (i) {
        console.log("Counter::set()", i);
        this._i = i;
    };
    TsCounter.prototype.increment = function () {
        console.log("Counter::increment()");
        ++this._i;
    };
    TsCounter.prototype.decrement = function () {
        console.log("Counter::decrement()");
        --this._i;
    };
    TsCounter.prototype.reset = function () {
        console.log("Counter::reset()");
        this._i = 0;
    };
    return TsCounter;
}());
var pageList = [
    new Page("index.html", "Home", "Home yada yada"),
    new Page("chapter2.html", "Chapter 2", "Automating your development workflow... ( hypothetically speaking =b )"),
    new Page("chapter3.html", "Chapter 3", "Working with Functions")
];
var site = new BookSite(pageList);
