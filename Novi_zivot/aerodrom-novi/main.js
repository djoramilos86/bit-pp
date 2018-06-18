const person = require('./person.js');
const seat = require('./seat.js');
const passenger = require('./passenger.js');
const flight = require('./flight.js');
const airport = require('./airport.js');


const main = ((person, seat, passenger, flight, airport) => {
    const rasa = person.createPerson("radomir", "rasa");
    const steva = person.createPerson("steva", "nash");

    const seat1 = seat.createSeat(123, "b");
    const seat2 = seat.createSeat(13, "e");

    const passenger1 = passenger.createPassenger(rasa, seat1)
    console.log(passenger1);



    const flight1 = flight.createFlight("06.14.2018", "Nis - Beograd");
    console.log(flight1);
    
    
    flight1.addPassenger(passenger1);

    const carKonstantin = airport.createAirport("Car Konstantin");
    console.log(carKonstantin);
    carKonstantin.addFlight();
    
    
    

})(person, seat, passenger, flight, airport);
