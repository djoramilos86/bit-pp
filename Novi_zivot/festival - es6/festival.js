"use strict";

const genre = (() => {
    class Genre {
        constructor(name) {
            this.name = name;
        }
        getData() {
            const firstLetter = this.name[0].toUpperCase();
            const lastLetter = this.name[this.name.length - 1].toUpperCase();
            return `${firstLetter}${lastLetter}`;
        }

    }

    const createGenre = (name) => {
        return new Genre(name);
    }

    return {
        createGenre: createGenre
    }
})();

const movie = ( () => {

    class Movie {
        constructor(title, length, genre) {
            this.title = title;
            this.length = length;
            this.genre = genre;
        }
        getMovieData() {
            return `${this.title},${this.length}min, ${this.genre.getData()}`;
        }

    }

    const createMovie = (title, length, genre) => {
        return new Movie(title, length, genre);
    }

    return {
        createMovie: createMovie
    }

})();


const program = ( () => {

    class Program {
        constructor(date) {
            const someDate = new Date(date);
            this.date = `${someDate.getMonth()}1.${someDate.getDate()}.${someDate.getFullYear()}`;
            this.listOfMovies = [];
            this.numberOfMovies = 0;
        }
        addMovie(movie) {

            this.listOfMovies.push(movie);
        }

        getData() {
            let data = `${this.date.toString()},program duration ${this.getProgramLength()}min\t`;

            this.listOfMovies.forEach(movie => {
                data += `\n\t\t${movie.getMovieData()}`;
                this.numberOfMovies += 1;
            });

            return data;
        }

        getProgramLength() {
            let totalLengthOfMovies = 0;
            for (let i = 0; i < this.listOfMovies.length; i++) {
                totalLengthOfMovies += this.listOfMovies[i].length;
            }
            return totalLengthOfMovies;
        }
    }

    const createProgram = (date) => {
        return new Program(date);
    }

    return {
        createProgram: createProgram
    }

})();

const festival = (function () {


    class Festival {
        constructor(name) {
            this.name = name;
            this.listOfPrograms = [];
        }

        addProgram(program) {

            this.listOfPrograms.push(program);

        }
        getFestivalData(program) {
            let totalMovies = 0;
            let festivalData = "";

            for (let i = 0; i < this.listOfPrograms.length; i++) {
                totalMovies += this.listOfPrograms[i].listOfMovies.length;
                festivalData += `${this.listOfPrograms[i].getData()}\n\t`;
            }

            return `${this.name} has ${totalMovies} movie titles \n\t ${festivalData}\n\t`;
        }
    }


    const createFestival = name => {
        return new Festival(name);
    }

    return {
        createFestival: createFestival
    }
}());


const main = ((genre, movie, program, festival) => {

    const action = genre.createGenre("Action");
    const drama = genre.createGenre("Drama");

    const film1 = movie.createMovie("Svi u kuci", 344, action);
    const film2 = movie.createMovie("Sama u kuci", 54, drama);
    const film3 = movie.createMovie("Srpska posla", 65, drama);
    const film4 = movie.createMovie("Rasa u akciji", 23, action);


    const prog1 = program.createProgram("03.03.2019");
    const prog2 = program.createProgram("05.03.2019");

    prog1.addMovie(film1);
    prog1.addMovie(film2);
    prog2.addMovie(film3);
    prog2.addMovie(film4);

    const pornFest = festival.createFestival("Porn Fest");

    pornFest.addProgram(prog1);
    pornFest.addProgram(prog2);


    console.log(pornFest.getFestivalData());




})(genre, movie, program, festival);