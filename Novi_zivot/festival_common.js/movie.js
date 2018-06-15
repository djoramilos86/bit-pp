
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

module.exports = { createMovie };