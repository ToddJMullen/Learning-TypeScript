page.title("Chapter 4, OOP &amp; TypeScript");
page.section("Classes", 101, 12);
class Person {
    constructor(name, surname, email) {
        this.name = name;
        this.surname = surname;
        if (this.validateEmail(email)) {
            this.email = email;
        }
        else {
            throw new Error("The given email (" + email + ") is not valid.");
        }
    }
    validateEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    greet() {
        console.log("Hello. My email is: " + this.email);
    }
}
var me = new Person("Todd", "Mullen", "MyEmail@TheNorthPole.com");
page.msg("Person(me): " + JSON.stringify(me)
    + br + " However, email validation doesn't properly belong to a <b>User</b> class."
    + br + " So, we'll create an <b>Email</b> class an make User::email an instance of that.");
class Email {
    constructor(email) {
        this._reEmailPattern = /\S+@\S+\.\S+/;
        if (this.validateEmail(email)) {
            this.email = email;
        }
        else {
            throw new Error("The given email (" + email + ") is not valid.");
        }
    }
    validateEmail(email) {
        return this._reEmailPattern.test(email);
    }
}
page.msg("Email:" + JSON.stringify(Email));
class Person2 {
    constructor(name, surname, email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }
    greet() {
        console.log("Hello. My email is: " + this.email);
    }
}
page.msg("The <b>Email</b> class doesn't need to share its validateEmail class with the outside"
    + br + " and it shouldn't make the email value publicly available either.", 102, 89);
class EmailType {
    constructor(email) {
        this._reEmailPattern = /\S+@\S+\.\S+/;
        if (this._validateEmail(email)) {
            this._email = email;
        }
        else {
            throw new Error("The given email (" + email + ") is not valid.");
        }
    }
    value() {
        return this._email;
    }
    _validateEmail(email) {
        return this._reEmailPattern.test(email);
    }
}
var meEmail = new EmailType("MyEmail@TheNorthPole.com"), me2 = new Person2("Todd", "Mullen", meEmail);
page.msg("Created new <b>EmailType</b> instance: " + br + JSON.stringify(meEmail)
    + br + " and used it to create a new <b>Person2</b> instance: "
    + br + JSON.stringify(me2), 104, 122);
page.section("Interfaces", 104, 127);
page.msg("Didn't do anything with interfaces, just defined them and described how TypeScript"
    + " interfaces are different in that an interface <b>can</b> extend another interface or class and can "
    + " implement methods &amp; define property values.");
page.section("Association, Aggregations, &amp; Composition", 105, 133);
page.msg("Association, association relationships exist when two classes interacti with each other"
    + ", but exist independently of each other."
    + br + br + " The example given is between students and teachers."
    + " They both come and go 'freely' without either necessitating the other."
    + br + "(obviously this is in terms of OO software not philosophical concers.");
page.msg("My own example:" + br + " Bologna, Cheese, Bread, & IceCream classes"
    + " You can combine them however you'd like to make a dinner or a lunch."
    + " There is no reason that these can't be combined into a bologna, cheese"
    + ", ice cream sandwhich.");
page.msg("Aggregation relations exist when two classes exist independent of each other"
    + ", but when they are related to each other, one of them belongs to the other."
    + " The given example is that of CellPhone & CellBattery classes."
    + " They can exist independently, but when they are related; the battery belongs to the phone."
    + " My own example: Person & Car  This has a lot of philosophical quandaries, but generally speaking"
    + ", one could say that a car always belongs to a person."
    + " (Discounting dealerships, death, abandonment, passengers, etc.)"
    + br + " Using the Teacher/Student classes though, we could create a School class"
    + " and then each School would aggregate Students &amp; Teachers.");
page.msg("Composition si a relationship where instances of one class would belond to the other"
    + " and those instances could not exist without the parent entity."
    + " The examples given here is that of Questions &amp; Answers where a Question"
    + " can have multiple answers, and if a Question is deleted, its Answers go with it.");
