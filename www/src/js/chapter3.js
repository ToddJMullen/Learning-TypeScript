page.title("Chapter 3, Working with functions");
page.msg("Method signatures &amp; overloading", 63, 10);
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
page.msg("Erroneous calls commented to suppress CLI error linting");
console.log("add(1,2,3):", add(1, 2, 3));
function add2or3(a, b, c) {
    return a + b + (c === undefined ? 0 : c);
}
page.msg("Erroneous calls commented to suppress CLI error linting");
console.log("add2or3(1,2):", add2or3(1, 2));
console.log("add2or3(1,2,3):", add2or3(1, 2, 3));
function add3(a, b, c = 0) {
    b = (b !== undefined) ? b : 0;
    return a + b + c;
}
console.log("add3(1):", add3(1));
console.log("add3(1,2):", add3(1, 2));
console.log("add3(1,2,3):", add3(1, 2, 3));
function addNumbers(...nums) {
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
            str = `Hello  ${value}`;
            break;
        case "number":
            str = `I see you're ${value} years old.`;
            break;
        case "boolean":
            str = value ? `I'm hungry too!` : `You're not hungry, but I am.`;
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
page.msg("Special overloaded signatures");
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
page.msg("Define an IIFE & pass it the global scope object");
(function (global) {
    var foo = 9;
    globalBar = 1;
    console.log("IIFE(globalBar)", globalBar);
    global.globalBar = 2;
    console.log("IIFE(global.globalBar)", global.globalBar);
})(this);
console.info("\n\nUsing the IIFE pattern to isolate  variables");
page.msg("Note to self, this (TypeScript) is not using current native Javascript 'Class IIFE patterns' (ES5 & under)"
    + "\nIt is transpiling the Javascript into mre familiar paradigms"
    + ", but not the sort that will protext a private var.", 76, 182);
class Counter {
    constructor() {
        console.log("Counter::constructor()");
        this.reset();
    }
    get() {
        console.log("Counter::get()");
        return this._i;
    }
    set(i) {
        console.log("Counter::set()", i);
        this._i = i;
    }
    increment() {
        console.log("Counter::increment()");
        ++this._i;
    }
    decrement() {
        console.log("Counter::decrement()");
        --this._i;
    }
    reset() {
        console.log("Counter::reset()");
        this._i = 0;
    }
}
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
page.msg("Fourteen pages into Chapter 3 &ndash; if you can't tell you're not looking hard enough. 8)", counter.get());
page.counter.set(77);
page.counter.set(79);
class User {
}
page.msg("Now he's using jQuery, but hasn't shown anywhere how to appropriately refrence & stat using it."
    + "<br />I was hoping when he started using it, he'd give some useful information."
    + " Alas, all I have is the outdate/non-working material from chapter 1"
    + " -- and I know where Google is...", 80);
function getUsers(cb) {
    $.ajax({
        url: page.URI_CH3_USERS,
        method: "GET",
        success: function (rsp) {
            cb(rsp.data);
        },
        error: function (error) {
            console.error("getUsers() received error: ", error);
        }
    });
}
getUsers(function (users) {
    users.map(user => {
        console.log("User", user, ", Typeof: " + typeof user);
        page.msg("Got user: " + JSON.stringify(user));
    });
});
class Order {
}
;
function getOrders(cb) {
    $.ajax({
        url: page.URI_CH3_ORDERS,
        method: "GET",
        success: function (rsp) {
            cb(rsp.data);
        },
        error: function (error) {
            console.error("getOrders() received error: ", error);
        }
    });
}
getOrders(function (orders) {
    orders.map(order => {
        console.log("User", order, ", Typeof: " + order);
        page.msg("Got order: " + JSON.stringify(order));
    });
});
page.msg("Write a generic function for both instead of two near identical copies");
function getEntities(url, cb) {
    $.ajax({
        url: url,
        method: "GET",
        success: function (rsp) {
            cb(rsp.data);
        },
        error: function (error) {
            console.error("getEntities() received an error: ", error);
        }
    });
}
page.msg("Again with the generic versions..."
    + "<br />(keep in mind they're async, so even the two before this will display after)", 82, 331);
getEntities(page.URI_CH3_USERS, function (users) {
    users.map(function (user) {
        page.msg("User:" + JSON.stringify(user));
    });
});
getEntities(page.URI_CH3_ORDERS, function (orders) {
    orders.map(function (order) {
        page.msg("Order:" + JSON.stringify(order));
    });
});
setTimeout(function fixOrder1() {
    page.section("Tagged templates &amp; Tag functions ", 83, 348);
    function escapeHtml(literalValues, ...holders) {
        let str = "";
        for (let i = 0; i < holders.length; i++) {
            str += literalValues[i];
            str += holders[i]
                .replace(/&/g, "&amp;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&apos;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
        }
        page.msg("Resulting string: &ldquo;" + str + "&rdquo;");
        return str;
    }
    escapeHtml(["<a href='#'>"], "var1?", "var2?");
    page.msg("Sadly another flop of an example that demonstrated that there is some"
        + " template related stuff that is useful somehow,"
        + " but fails to give a useful, let alone working really, example. =/", 86, 371);
    page.section("Callback Hell", 86, 375);
    class Config {
    }
    class View {
        constructor(config) {
            this._appendHtml = function (html, cb, onError) {
                try {
                    if ($(this._container).length == 0) {
                        throw new Error("No container was found or defined");
                    }
                    $(this._container).html(html);
                    cb($(this.container));
                }
                catch (error) {
                    onError(error);
                }
            };
            this._container = config.container;
            this._templateUri = config.templateUri;
            this._serviceUri = config.serviceUri;
            this._args = config.args;
        }
        _loadJson(uri, args, cb, onError) {
            $.ajax({
                url: uri,
                type: "GET",
                dataType: "json",
                data: args,
                success: (json) => {
                    cb(json);
                },
                error: (error) => {
                    onError(error);
                }
            });
        }
        _loadHbs(uri, cb, onError) {
            $.ajax({
                url: uri,
                type: "GET",
                dataType: "text",
                success: (hbs) => {
                    cb(hbs);
                },
                error: (error) => {
                    onError(error);
                }
            });
        }
        _compileHbs(hbs, cb, onError) {
            try {
                var template = Handlebars.compile(hbs);
                cb(template);
            }
            catch (error) {
                onError(error);
            }
        }
        _jsonToHtml(template, json, cb, onError) {
            try {
                var html = template(json);
                cb(html);
            }
            catch (error) {
                onError(error);
            }
        }
        render(cb, onError) {
            try {
                this._loadJson(this._serviceUri, this._args, (json) => {
                    this._loadHbs(this._templateUri, (hbs) => {
                        this._compileHbs(hbs, (template) => {
                            this._jsonToHtml(template, json, (html) => {
                                this._appendHtml(html, cb, onError);
                            }, onError);
                        }, onError);
                    }, onError);
                }, onError);
            }
            catch (error) {
                console.error("DOH! Somethin busted!");
                onError(error);
            }
        }
    }
    page.section("Promises (Q to the rescue &ndash; hopefully =/ [sic])", 90, 503);
    class ViewWithQAsync {
        constructor(config) {
            this._container = config.container;
            this._templateUri = config.templateUri;
            this._serviceUri = config.serviceUri;
            this._args = config.args;
        }
        _loadJsonAsync(uri, args) {
            return Q.Promise(function (resolve, reject) {
                $.ajax({
                    url: uri,
                    type: "GET",
                    dataType: "json",
                    data: args,
                    success: (json) => {
                        resolve(json);
                    },
                    error: (error) => {
                        reject(error);
                    }
                });
            });
        }
        _loadHbsAsync(uri) {
            return Q.Promise(function (resolve, reject) {
                $.ajax({
                    url: uri,
                    type: "GET",
                    dataType: "text",
                    success: (hbs) => {
                        resolve(hbs);
                    },
                    error: (error) => {
                        reject(error);
                    }
                });
            });
        }
        _compileHbsAsync(hbs) {
            return Q.Promise(function (resolve, reject) {
                try {
                    var template = Handlebars.compile(hbs);
                    resolve(template);
                }
                catch (error) {
                    reject(error);
                }
            });
        }
        _jsonToHtmlAsync(template, json) {
            return Q.Promise(function (resolve, reject) {
                try {
                    var html = template(json);
                    resolve(html);
                }
                catch (error) {
                    reject(error);
                }
            });
        }
        _appendHtmlAsync(html, container) {
            return Q.Promise(function (resolve, reject) {
                try {
                    var $target = $(container);
                    if ($target.length == 0) {
                        throw new Error("The target element &ldquo;" + container + "&rdquo; wasn't found.");
                    }
                    $target.html(html);
                    resolve($target);
                }
                catch (error) {
                    reject(error);
                }
            });
        }
        renderAsync(cb, onError) {
            return Q.Promise((resolve, reject) => {
                try {
                    var getJson = this._loadJsonAsync(this._serviceUri, this._args);
                    var getTemplate = this._loadHbsAsync(this._templateUri)
                        .then(this._compileHbsAsync);
                    Q.all([getJson, getTemplate])
                        .then((results) => {
                        var json = results[0];
                        var template = results[1];
                        this._jsonToHtmlAsync(template, json)
                            .then((html) => {
                            return this._appendHtmlAsync(html, this._container);
                        })
                            .then(($container) => {
                            resolve($container);
                        });
                    });
                }
                catch (error) {
                    console.error("DOH! Somethin busted!");
                    reject(error);
                }
            });
        }
    }
    var config = {
        container: "sdf",
        templateUri: "templateUri",
        serviceUri: "serviceUri",
        args: "args"
    }, vq = new ViewWithQAsync(config);
    page.msg("Well, I got the bugs worked out &ndash; I think. I'm not sure because that's all that"
        + " was written.  There's no actual invocation of the code to give a"
        + " definitive &ldquo;It works!&rdquo;", 95, 649);
    page.section("Generators, I remember these from some other ES2015 tutorials.", 96, 655);
    function* gen() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        return 5;
    }
    var bar = gen(), out;
    do {
        out = bar.next();
        console.log("Gen:", out);
        page.msg("Gen::next() " + JSON.stringify(out));
    } while (!out.done);
    out = bar.next();
    page.msg("One last time, maybe?<br /> Gen::next() => " + JSON.stringify(out));
    page.msg("Generators provide a mechanism for pre-defining steps in a process"
        + " where parts of the process are executed asynchronously");
    page.section("Asynchronous Functions", 97, 681);
    page.msg("All he gave is a snippet sample that makes the compiler complain &amp; a reference"
        + " refering to the TypeScript roadmap to read more. =/");
}, 50);
