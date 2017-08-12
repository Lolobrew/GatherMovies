
var userId = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);

console.log(userId);
//window.alert(this.href.substr(this.href.lastIndexOf('/') + 1));
$('#searchButton').on('click', function(event){
    event.preventDefault();

    $('.displaySearchRow').empty();


    var omdbfunction = function(){
        var title = $('#searchByTitle').val().trim();
        if (title === ""){
            alert("Please enter a valid title")
        } else {
            console.log(title);

            var queryUrl = 'https://www.omdbapi.com/?t='+title+'&apikey=cee03de1';

            $.ajax({url: queryUrl, method: 'GET'}).done(function(response) { 
                    var movie = response;   
                    console.log(movie);
                    var searchedDiv = $('<div class="col-md-3" id="movieInfo"><h3>'+movie.Title+'</h3><p>'+movie.Genre+'</p><p>'+movie.Rated+'</p><p>'+movie.Year+'</p><p>'+movie.Runtime+'</p><p>'+movie.Director+'</p><p>'+movie.Actors+'</p></div>');
                    var searchedPoster = $('<div class="col-md-2 col-md-offset-1"><img src='+movie.Poster+' id="searchPoster"></div>');
                    var searchPlot = $('<div class="col-md-2"><br><br><h5 id="searchPlot">'+movie.Plot+'</h5></div>');
                    var addBtn = $('<div class="col-md-1 col-md-offset-1"><br><btn id="addBtn" class="btn btn-default">Click To Add!</btn></div><br><br>');
                    var rmvBtn = $('<br><br><btn id="rmvBtn" class="btn btn-default">Hmm...nah!</btn>');

                    $('.displaySearchRow').append(searchedPoster);
                    $('.displaySearchRow').append(searchedDiv);
                    $('.displaySearchRow').append(searchPlot);
                    addBtn.append(rmvBtn);
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
                        window.location.reload();
                        });
        

                    });


                    $('#rmvBtn').on('click', function(event){
                        event.preventDefault();
                        $('.displaySearchRow').empty();
                    };

                    
            //closes request    
            });

            $('#searchByTitle').val("");
        }
    }

    omdbfunction();
//closes search event
});
