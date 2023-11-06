// 2.1. Lesson - Classes

/* Constructing the class  
class ClassName {
    constructor() { ... }
    method_1() { ... }
    method_2() { ... }
    method_3() { ... }
}

let newObject = new ClassName(args);
*/

/*
class Book {
    constructor(title, author, publicationYear) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }
    age() {
        let currentDate = new Date();
        return currentDate.getFullYear() - this.publicationYear;
    }
}

let newBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);

console.log(newBook.title); // The Great Gatsby
console.log(newBook.age());  // Age of the book in years
console.log(newBook.publicationYear); // 1925
*/

/*
class Student {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    greetings() {
        return 'Hello my name is ' + this.name + ' ' + this.surname + '.';
    }
    birthYear() {
        let date = new Date();
        return date.getFullYear() - this.age;
    }
}
const student1 = Student('John', 'Walker', 23);
const student2 = Student('Mary', 'Clark', 18);
const student3 = Student('James', 'Stones', 40);
const student4 = Student('Anthonny', 'Rock', 23);
console.log(student1.greetings());
console.log(student1.birthYear());
console.log(student2.greetings());
console.log(student2.birthYear());
console.log(student3.greetings());
console.log(student3.birthYear());
console.log(student4.greetings());
console.log(student4.birthYear());
*/

/* Encapsulation
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    set year(newYear) {
        let date = new Date();
        if (newYear > date.getFullYear()) {
            this._year = date.getFullYear();
        }
        else {
            this._year = newYear;
        }
    }
    get year() {
        return this._year;
    }
    age() {
         let date = new Date();
         return date.getFullYear() - this._year;
        }
    }
    let newCar = new Car("Nissan", 2221);// Sets the year to 2221
    console.log(newCar.year); // Logs the current year
    console.log(newCar._year); // Logs the current year
    newCar._year = 2221; //Setting the year value
    console.log(newCar.year); //2221
    console.log(newCar._year); //2221

    class Car {
    #_year
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    set year(newYear) {
        let date = new Date();
        if (newYear > date.getFullYear()) {
            this.#_year = date.getFullYear();
            }
            else {
                this.#_year = newYear;
            }
        }
    get year() {
        return this.#_year;
        }
    age() {
        let date = new Date();
        return date.getFullYear() - this.#_year;
    }
}
let newCar = new Car("Nissan", 2221);// Sets the year to 2221
console.log(newCar.year); // Logs the current year
console.log(newCar._year); // undefined
newCar._year = 2221; //Setting the year value
console.log(newCar.year); //Logs current year
console.log(newCar._year); //This value changes but, the year does not.
*/

/* Inheritance

class House {
    constructor(name) {
        this.name = name;
    }
    info() {
        return 'This house is the: ' + this.name + '. ';
    }
}

class Villa extends House {
    constructor(name, prestige) {
        super(name);
        this.prestige = prestige;
    }
    info() {
        return super.info() + 'It has the prestige ' + this.prestige + ' out of 10. ';
    }
}

class DetachedHouse extends House {
    constructor(name, hasGarden) {
        super(name);
        this.hasGarden = hasGarden;
    }
}
let villa = new Villa("Not so prestigious villa",1)
let detachedHouse = new DetachedHouse("Small house, but with the garden", true)
console.log(villa.info()); // This house is the: Not so prestigious villa. It has the prestige 1 out of 10.
console.log(detachedHouse.info()); // This house is the: Small house, but with the garden.
*/

/*
class Pizza {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    info() {
        return 'I am basic pizza:' + this.name + 'I cost ' + this.price;
    }
}
class ItalianPizza extends Pizza {
    constructor(name, price, region) {
        super(name, price);
        this.region = region;
    }
    innfo() {
        return 'I aam Italian pizza:' + this.name + 'I cost ' + this.price + 'I ccome from:' + this.region + '.';
    }
}
class AmericanPizza extends Pizza {
    constructor(name, price, sauce) {
        super(name, price);
        this.sauce = sauce;
        this.info()
        return 'I am American pizza:' + this.name + 'I cost ' + this.price + 'Ihave the ' + this.sauce + ' sauce.'; 
    }
}
*/

/* Static methods
class House {
    constructor(name) {
        this.name = name;
    }
    info() {
        return 'This house is the: ' + this.name + '. ';
    }
    static greetings() {
        return "Hello, my dear landlord.";
    }
}
let house = new House("My house");
console.log(House.greetings()); // Hello, my dear landlord.
console.log(house.greetings()); // Uncaught TypeError: house.greetings is not a function
*/