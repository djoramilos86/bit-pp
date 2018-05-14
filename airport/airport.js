"use strict";

(function () {
    function Person(name, surname) {
        if (!name || !surname) {
            console.log("Please input name and surname")
        }
        if (typeof name !== "string" && typeof surname !== "string") {
            console.log("Invalid input")
        }

        this.name = name;
        this.surname = surname;
    }
    Person.prototype.getData = function () {
        return this.name + " " + this.surname;
    }

    function Seat(number, category) {
        this.category = category || "e";
         if (this.category !== "b" && this.category !== "e") {
                console.log("Invalid input");
            }
        this.number = number || Math.floor(Math.random() * 101);
        }

     Seat.prototype.getData = function () {
        this.number + "," + this.category.toUpperCase();
    }

    function Passenger(person, seat) {
    if (!person || !person instanceof Person) {
         console.log("Invalid input");
    }
    if (!seat || !seat instanceof Seat) {
        console.log("Invalid input");
        this.person = person;
        this.seat = seat;
    }

    Passenger.prototype.getData = function () {
        return this.seat.getData + ", " + this.person.getData;
    }
    function Flight(relation, date) {
         if (!relation || !date) {
            console.log("Please input relation and date")
        }
        this.relation = relation;
        this.date = new Date(date);
        this.listOfPassenger = [];
        this.totalPassengers = function (){
            var count = 0;
            this.listOfFlights.forEach(function(flight) {
                count += flight.listOfPassenger.length;          
            });
            return count;      
    }

    Flight.prototype.addPassenger = function(passenger){
        if(!passenger || !(passenger instanceof Passenger)){
            console.log("Invalid passenger input");
        }
        this.listOfPassenger.push(passenger);
    }
    
    Flight.prototype.getData = function(){

    }

    function Airport (){
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
    }

    Airport.prototype.addFlights = function(flight){
        if(!flight || !(flight instanceof Flight)){
            console.log("Invalid passenger input");
        }
        this.listOfFlights.push(flight);
    }

    }

     var person1 = new Person("Pera", "Peric");
     var seatRandom = new Seat(34, "b");
     console.log(person1);
     console.log(seatRandom);
})();