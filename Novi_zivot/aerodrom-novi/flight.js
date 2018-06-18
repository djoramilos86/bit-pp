class Flight {
    constructor(date, relation) {
        const someDate = new Date(date);
        this.date = `${someDate.getMonth()}.${someDate.getDate()}.${someDate.getFullYear()}`;
        this.relation = relation;
        this.listOfPassengers = [];
    }
    addPassenger(passenger) {
        this.listOfPassengers.push(passenger);
    }
    getData() {
        return `${this.date.toString()}, ${this.realtion} \n\t `

    }
    totalInBussiness () {

        var counter = 0;
        this.listOfPassengers.forEach(function (passenger) {
            if (passenger.seat.category === "bussiness") {
                counter++;
            }
        })
        return counter;
    }
    getData () {
        var output = "";
        var passOutput = "";
        this.listOfPassengers.forEach(function (passenger) {
            passOutput += "\t" + "\t" + passenger.getData() + "\n";

        })
        output = `${this.date}, ${this.relation}. In bussiness category:  ${this.totalInBussiness()} + "\n"`;

        return output + passOutput;
    }


}


const createFlight = (date, relation) => {
    return new Flight (date, relation);
}
module.exports = { createFlight };