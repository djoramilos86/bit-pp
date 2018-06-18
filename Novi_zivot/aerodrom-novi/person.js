class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getData() {
        return `${this.name} ${this.surname}`
    }

    
}

const createPerson = (name, surname) => {
    return new Person(name, surname);
}



module.exports = { createPerson };