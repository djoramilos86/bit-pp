"use strict";

(function () {
    function Genre(name) {
        this.name = name;
        this.getData = function () {
            var firstLetter = this.name[0].toUpperCase();
            var lastLetter = this.name[this.name.length - 1].toUpperCase();
            var genreAcronym = firstLetter + lastLetter;
            return genreAcronym;
        }
    }

    function Movie(title, genre, movieLength) {
        this.title = title;
        this.genre = new Genre(genre);
        this.movieLength = parseFloat(movieLength);
        this.getData = function () {
            return this.title + ", " + this.movieLength + "min, " + this.genre.getData();
        }
    }

    function Program(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
        this.numberOfMovies = 0;
        this.addMovie = function (movie) {
            if (!movie || !(movie instanceof Movie)) {
                console.log("Invalid movie input!");
                return
            }
            var listOfMovies = this.listOfMovies.push(movie);
            this.numberOfMovies++;
            return this.listOfMovies;
        }
        this.getData = function() {
            var day = this.date.getDay();
            var month = this.date.getMonth() + 1;
            var year = this.date.getFullYear();
            var date = day + "." + month + "." + year + ".";
            var listOfMovies = this.listOfMovies;
            var lengthOfAllMovies = function(){ 
                var sumOfLength = 0;
                listOfMovies.forEach(function(movie) {
                sumOfLength += movie.movieLength;
            })
            return sumOfLength;
        };
            return date+ "\t" + lengthOfAllMovies();
        }

    }

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.totalMovies = function () {
            var allMovies = 0;
            this.listOfPrograms.forEach(function (program) {
                allMovies += program.numberOfMovies;
            })
            return allMovies;
        };
        this.addProgram = function (program) {
            if (!program || !(program instanceof Program)) {
                console.log("Invalid program input");
                return;
            }
            this.listOfPrograms.push(program);
        }

    }

    var theShawshankRedemption = new Movie("The Shawshank Redemption", "Drama", "120min");
    console.log(theShawshankRedemption.getData());

    var weekend = new Program("7/7/2018");
    console.log(weekend.addMovie(theShawshankRedemption));
    console.log(weekend.addMovie(theShawshankRedemption));
    console.log(weekend.getData());

    var cannes = new Festival("Cannes");
    cannes.addProgram(weekend);
    console.log(cannes.totalMovies());



})();
