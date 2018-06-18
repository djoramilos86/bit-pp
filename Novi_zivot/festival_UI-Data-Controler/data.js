const dataModule = (function () {

    var store = {
        movies: []
    }


    class Movie {
        constructor(title, length, genre) {

            this.title = title;
            this.length = parseInt(length);
            this.genre = genre;
        }
        getMovieInfo() {
            return `${this.title},${this.genre}`;
        }


        //createMovie


        //movieLength

    }

    const createMovie = (title, length, genre) => {
        var createdMovie = new Movie(title, length, genre);
        store.movies.push(createdMovie);
        return createdMovie;
    }

    const calculateMovieLength =() => {
        var totalMovieLength = 0;
        store.movies.forEach(function (movie) {
            totalMovieLength += movie.length;
        })
        return totalMovieLength;
    }

    return {
        createMovie: createMovie,
        totalLength: calculateMovieLength
    }


})();