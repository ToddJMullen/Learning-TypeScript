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
    + " (Discounting dealerships, death, abandonment, passengers, etc. "
    + " in which case you could reconcile the car as belonging to an 'Entity' class)"
    + br + " Using the Teacher/Student classes though, we could create a School class"
    + " and then each School would aggregate Students &amp; Teachers.");
page.msg("Composition is a relationship where instances of one class would belong to the other"
    + " and those instances could not exist without the parent entity."
    + " The examples given here is that of Questions &amp; Answers where a Question"
    + " can have multiple answers, and if a Question is deleted, its Answers go with it.");
page.msg("My example of composition would be Events in a Venue.  The Events would belong to the Venue."
    + " If the Venue were to close or be demolished, the Events would cease to exist.");
page.section("Inheritance", 107, 171);
class Teacher extends Person2 {
    teach() {
        console.log("Teacher says: Welcome to class");
    }
}
var teacher = new Teacher("Todd", "Mullen", new EmailType("sdf@sdf.com"));
class Teacher2 extends Person2 {
    constructor(name, surname, email, subjects) {
        super(name, surname, email);
        this.subjects = subjects;
    }
    greet() {
        super.greet();
        console.log(this.name + " teaches " + this.subjects.join(", "));
    }
    teach() {
        console.log("Teachin teachin teachin...");
    }
}
var teacher2 = new Teacher2("Todd", "Mullen", new EmailType("wer@sdf.sdf"), ["Mathematics", "Physics", "Philosophy", "Religion"]);
teacher2.greet();
teacher2.teach();
page.section("Mixins", 109, 208);
page.msg("Mixins allow for a class to inherit from multiple classes."
    + " This would give the ability to use each piece of behavioral/trait like parts"
    + " as entities in themselves or combine them freeform at runtime. ;) ;) =)");
class Animal {
    eat() {
        console.log("eat eat eat...");
    }
}
class Mammal extends Animal {
    breath() {
        console.log("breathe in, breathe out");
    }
}
class WingedAnimal extends Animal {
    fly() {
        console.log("Fly fly fly");
    }
}
class Bat extends WingedAnimal {
    constructor() {
        super();
        console.log("Creating new Bat(), Mammal extension is commented out b/c it wouldn't work otherwise"
            + " -- because multiple inheritance is evil");
    }
}
var halfBat = new Bat();
page.msg("Is my halfbat a Bat? " + (halfBat instanceof Bat));
page.msg("Is my halfbat a WingedAnimal? " + (halfBat instanceof WingedAnimal));
page.msg("Is my halfbat a Mammal? " + (halfBat instanceof Mammal));
class MammalMixin {
    breathe() {
        return "breathe in, breathe out...";
    }
}
class WingedMixin {
    fly() {
        return "Up up and away...";
    }
}
class MixinBat {
}
page.msg("In order to apply/use the mixins we have to declare a function that is apparently"
    + " common practice in order to use mixins. The function will loop over all the properties"
    + " that are on one object and copy all properties that are not constructors into the derived class."
    + " So, basically you create the multiple inheritance by copying all your wanted propertes & methods"
    + " into the class that you want to have them.  He called it applyMixins(), but I think that's boring"
    + " so I named it mixMastaBlasta");
function mixMastaBlasta(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype)
            .forEach(name => {
            if (name !== "constructor") {
                derivedCtor.prototype[name] = baseCtor.prototype[name];
            }
        });
    });
}
mixMastaBlasta(MixinBat, [MammalMixin, WingedMixin]);
page.msg("Keep in mind that the properties that are picked up/applied from each mixin will only be"
    + " from the outer/last level of properties on each mixin. Not only that, but the last "
    + " implementation wins.");
page.msg("So, an inherited property of a mixin will not be applied to the one being extended"
    + " Only the properties unique to the mixin class will be picked up. And if two mixins have"
    + " a property with the same name, the latter application will overwrite the former"
    + " -- even if the first one is way cooler!");
page.section("Generic Classes", 115, 305);
page.msg("I moved this section into a separate file <a href='ch4-generic-classes.html'>here</a> because Q is breaking everything.");
page.section("Generic Constraints", 118, 309);
