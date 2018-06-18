const controller = ((data, ui) => {

    const movieButton = document.querySelector("#button-movie");

    movieButton.addEventListener( "click", () => {

        const collectData = ui.collectInputValue();

        const createMovie = data.createMovie(collectData.title, collectData.length, collectData.genre);

        const showMovie = ui.displayMovie(createMovie);
        
        ui.clearInputs();
        ui.displayMovieLength(data.totalLength());
        
  



    }) 



})(dataModule, uiModule);