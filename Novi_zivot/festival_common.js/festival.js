
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

module.exports = { createFestival};