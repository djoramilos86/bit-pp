class Airport {
    constructor (name){
        this.name = name;
        this.listOfFlights = [];
    }

    addFlight (flight){
        this.listOfFlights.push(flight);
    }
}
const createAirport = (name) => {
    return new Airport (name);
}

module.exports = { createAirport };
