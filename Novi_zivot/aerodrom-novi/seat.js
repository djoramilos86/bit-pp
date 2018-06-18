class Seat {
    constructor (number, category){
        number = number || Math.floor(Math.random() * (100 - 10) + 10);
        category = category || "e";

        this.number = number;
        this.category = category;
        
    }
    getMethod (){
        return `${this.number}, ${this.category.toUpperCase()}`
    }
   
}
const createSeat = (number, category) => {
    return new Seat (number, category);
}

module.exports = { createSeat };