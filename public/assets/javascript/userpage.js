
var userId = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

console.log(userId);
//window.alert(this.href.substr(this.href.lastIndexOf('/') + 1));
$('#searchButton').on('click', function(event){
    event.preventDefault();

    $('.displaySearchRow').empty();



    var title = $('#searchByTitle').val().trim();
    console.log(title);

    var queryUrl = 'http://www.omdbapi.com/?t='+title+'&apikey=cee03de1';

    $.ajax({url: queryUrl, method: 'GET'}).done(function(response) { 
            var movie = response;   
            console.log(movie);
            var searchedDiv = $('<div class="col-md-3 col-md-offset-1" id="movieInfo"><h4>'+movie.Title+'</h4><p>'+movie.Genre+'</p><p>'+movie.Rated+'</p><p>'+movie.Year+'</p></div>');
            var searchedPoster = $('<div class="col-lg-1 col-lg-offset-2"><img src='+movie.Poster+' id="searchPoster"></div>');
            var addBtn = $('<div class="col-md-1"><btn id="addBtn" class="btn btn-default btn-primary">Click To Add!</btn></div>');

            $('.displaySearchRow').append(searchedPoster);
            $('.displaySearchRow').append(searchedDiv);
            $('.displaySearchRow').append(addBtn);

            $('#addBtn').on('click', function(event){
                var date = new Date();
                var time = date.getUTCDate();

                var newMovie = {
                    title: movie.Title,
                    genre: movie.Genre,
                    plot: movie.Plot,
                    rating: movie.Rated,
                    year: movie.Year,
                    runTime: movie.Runtime,
                    director: movie.Director,
                    actors: movie.Actors,
                    poster: movie.Poster,
                    createdAt: time,
                    updatedAt: time,
                    UserId: userId
                }

                
                $.post("/api/users/:id", newMovie, function() {
                   window.location.href = "/users/:id";
                });
  

            });

    	    
    	   /* db.FullMovies.create({
                title: movie.Title,
                genre: movie.Genre,
                plot: movie.Plot,
                rating: movie.Rated,
                year: movie.Year,
                runTime: movie.Runtime,
                director: movie.Director,
                actors: movie.Actors,
                poster: movie.Poster
              });	*/ 
    //closes request    
    });

    $('#searchByTitle').val("");

//closes search event
});
