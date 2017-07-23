page.title("Chapter 4, OOP &amp; TypeScript, Generic Types");
page.section("Generic Classes", 115, 308);
page.msg("(...that's the last thing you'll see until I can figure out how to reconcile the"
    + " differences between the book's version & instruction & the current requirements"
    + " & protocol&hellip;)");
class GUser {
}
class NotGenericGUserRepository {
    constructor(uri) {
        this._uri = uri;
    }
    getAsync() {
        return Q.Promise((resolve, reject) => {
            $.ajax({
                url: this._uri,
                type: "GET",
                dataType: "json",
                success: (data) => {
                    var GUsers = data.items;
                    resolve(GUsers);
                },
                error: (err) => {
                    console.error(err);
                    reject(err);
                }
            });
        });
    }
}
var notGenericGUserRepo = new NotGenericGUserRepository("./demo/shared/GUsers.json");
notGenericGUserRepo.getAsync()
    .then(function (GUsers) {
    console.log("notGenericGUserRepo() got: ", GUsers);
}).catch((error) => {
    console.warn("The getAsync() call failed.");
});
page.msg("Once again the author has just assumed that everything is goint swimmingly"
    + " when in fact all I am able to achieve is errors involving 'collections/shim'"
    + " not being loaded, Q.Promise not being defined, q already being declared,"
    + " & require not being defined. And google as I might it would seem that no one"
    + " on earth has this problem or knows anything about it.  So, I will just keep"
    + " moving along with hopes of finding the fix & getting to something that is not"
    + " broken from the onset."
    + br + "...now back to the content.  The drugery never ceases... 8b", 116, 356);
class Talk {
}
class NotGenericTalkRepo {
    contructor(uri) {
        this._uri = uri;
    }
    getAsync() {
        return Q.Promise((resolve, reject) => {
            $.ajax({
                url: this._uri,
                type: "GET",
                dataType: "json",
                success: (data) => {
                    var GUsersTalks = data.items;
                    resolve(GUsersTalks);
                },
                error: (e) => {
                    reject(e);
                }
            });
        });
    }
}
page.msg("We have written almost all the same code again.  The only difference was the name"
    + " references for the particulars. GUser(s) / Talk(s). Using the any typewould allow the"
    + " flexibility of reuse, but cost the benefits of typing / type checking. So we'll create"
    + " a generic repo which can handle multiple types and share the common code.");
class GenericRepo {
    constructor(uri) {
        this._uri = uri;
    }
    getAsync() {
        return Q.Promise((resolve, reject) => {
            $.ajax({
                url: this._uri,
                type: "GET",
                dataType: "json",
                success: (data) => {
                    var list = data.items;
                    resolve(list);
                },
                error: (error) => {
                    console.error("Something went wrong ", error);
                    reject(error);
                }
            });
        });
    }
}
class Task {
}
var GUserRepo = new GenericRepo("./demos/shared/GUsers.json");
GUserRepo.getAsync()
    .then((GUsers) => {
    console.log("Got GUsers data: ", GUsers);
})
    .catch((error) => {
    console.error("It didn't work!", error);
});
var taskRepo = new GenericRepo("./demose/shared/tasks.json");
taskRepo.getAsync()
    .then((tasks) => {
    console.log("Got the Task list:", tasks);
})
    .catch((error) => {
    console.error("Didn't get the tasks!", error);
});
