const genre = require('./genre.js');
const movie = require('./movie.js');
const program = require('./program.js');
const festival = require('./festival.js');

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

    console.log(action.getData());
    console.log(film1.getMovieData());
    console.log(prog2.getData());
    console.log(pornFest.getFestivalData());




})(genre, movie, program, festival);


