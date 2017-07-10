page.title("Chapter 4, OOP &amp; TypeScript");
page.section("Classes", 101, 12);
class Person {
    constructor(name, surname, email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }
    greet() {
        console.log("Hello");
    }
}
