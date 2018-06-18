class Passenger {
    constructor (person, seat){
        this.person = person;
        this.seat = seat;
    }
    changeSeat(){
        if (this.seat.category === "B") {
            return this.seat.category = "bussiness";
        } else {
            return this.seat.category = "economy";
        }
    }

    getData (){
        `${this.seat.number} ,${this.changeSeat()}, ${this.person.getData()}}`
    }

    
}

const createPassenger = (person, seat) => {
    return new Passenger (person, seat);
}

module.exports = { createPassenger };