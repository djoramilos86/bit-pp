"use strict";

(function () {

    function Genre(name) {
        this.name = name;

    }

    Genre.prototype.getData = function () {
        const firstLetter = this.name[0].toUpperCase();
        const lastLetter = this.name[this.name.length - 1].toUpperCase();
        return firstLetter + lastLetter;
    }

    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }

    Movie.prototype.getMovieData = function () {
        return this.title + ", " + this.length + "min, " + this.genre.getData();
    }

    function Program(date) {
        const someDate = new Date(date);
        this.date = someDate.getMonth() + 1 + "." + someDate.getDate() + "." + someDate.getFullYear();

        this.listOfMovies = [];
        this.numberOfMovies = 0;
    }

    Program.prototype.addMovie = function (movie) {

        this.listOfMovies.push(movie);

    }

    Program.prototype.getData = function () {
        let data = this.date.toString() + ", program duration " + this.getProgramLength() + "min" + '\t';

        this.listOfMovies.forEach(movie => {
            data += '\n\t' + movie.getMovieData();
            this.numberOfMovies += 1;
        });

        return data;
    }

    Program.prototype.getProgramLength = function () {
        let totalLengthOfMovies = 0;
        for (let i = 0; i < this.listOfMovies.length; i++) {
            totalLengthOfMovies += this.listOfMovies[i].length;
        }
        return totalLengthOfMovies;
    }



    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
    }

    Festival.prototype.addProgram = function (program) {

        this.listOfPrograms.push(program);

    }
    Festival.prototype.getFestivalData = function (program){
        let totalMovies = 0;
        let festivalData = "";
        for(let i = 0; i < this.listOfPrograms.length; i++){
            totalMovies += this.listOfPrograms[i].listOfMovies.length;
            festivalData += this.listOfPrograms[i].getData()  + '\n\t';
        }

        return this.name + " has " + totalMovies + " movie titles " + '\n\t' + festivalData + '\n\t';
    }


    function createMovie(title, length, genre) {
        var createdMovie = new Movie(title, length, genre);

        return createdMovie;
    }

    function createProgram(date) {
        var createdProgram = new Program(date);

        return createdProgram;
    }



    const action = new Genre("Action");
    const drama = new Genre("drama");

    const film1 = createMovie("zxczx", 344, "Action");
    const film2 = createMovie("dsadcxzczxsad", 54, "Drama");
    const film3 = createMovie("dsacxvdsad", 65, "Drama");
    const film4 = createMovie("dsadvcxvxcsad", 23, "Action");


  

    const prog1 = createProgram("03.03.2019");
    const prog2 = createProgram("05.03.2019");

    prog1.addMovie(film1);
    prog1.addMovie(film2);
    prog2.addMovie(film3);
    prog2.addMovie(film4);

    const pornFest = new Festival("Porn Fest");

    pornFest.addProgram(prog1);
    pornFest.addProgram(prog2);

  
    console.log(pornFest.getFestivalData());

})();