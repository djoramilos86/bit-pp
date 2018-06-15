
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


module.exports = { createProgram };