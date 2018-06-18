const uiModule = (() => {

    const titleInput = document.querySelector("#title");
    const lengthInput = document.querySelector("#length");
    const genreInput = document.querySelector("#genre");

    const collectInputValue = () => {
        const titleValue = titleInput.value;
        const lengthValue = lengthInput.value;
        const genreValue = genreInput.value;

        return {
            title: titleValue,
            length: lengthValue,
            genre: genreValue
        }
    }

    const clearInputs = () => {
        titleInput.value = "";
        lengthInput.value = "";
        genreInput.value = "";
    }

    const displayMovie = (movie) => {
        const movieList = document.querySelector("#movie-list");
        const li = document.createElement("li");
        li.textContent = movie.getMovieInfo();
        movieList.appendChild(li);
    }

    const displayMovieLength = (totalLength) => {
        const totalLengthInfo = document.querySelector("#total-length");
        totalLengthInfo.textContent = totalLength;

    }

    return {
        collectInputValue: collectInputValue,
        clearInputs: clearInputs,
        displayMovie: displayMovie,
        displayMovieLength: displayMovieLength
    }
})();