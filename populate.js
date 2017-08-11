var request = require('request');
var db = require("./models");
var mysql = require("mysql");


// var FullMovie = {
//       //gives FullMovies a title, genre, plot, rating, year, runtime, director, and actors
//     title: null,
//     genre: null,
//     plot: null,
//     rating: null,
//     year: null,
//     runTime: null,
//     director: null,
//     actors: null,
//     poster: null
//   };

var number = "tt3896198";
request('http://www.omdbapi.com/?i='+number+'&apikey=cee03de1', function(err, response, body) { 
    if(response.statusCode === 200){
    	var movie = JSON.parse(body);
    	db.FullMovies.create({
	    	title: movie.Title,
	    	genre: movie.Genre,
	    	plot: movie.Plot,
		    rating: movie.Rated,
		    year: movie.Year,
		    runtime: movie.Runtime,
		    director: movie.Director,
		    actors: movie.Actors,
		    poster: movie.Poster,
	  	})
	    

			
			
    }; 
  });




// FullMovie.create{}
//     	FullMovie.title = movie.Title;
//     	FullMovie.genre = movie.Genre
//     	FullMovie.plot = movie.Plot
// 	    FullMovie.rating	= movie.Rated
// 	    FullMovie.year	= movie.Year
// 	    FullMovie.runtime = movie.Runtime
// 	    FullMovie.director = movie.Director
// 	    FullMovie.actors = movie.Actors
// 	    FullMovie.poster = movie.Poster

// var connection = mysql.createConnection({
// 			  host: "localhost",
// 			  port: 3306,

// 			  // Your username
// 			  user: "root",

// 			  // Your password
// 			  password: "",
// 			  database: "ice_creamDB"
// 			});

// 			connection.connect(function(err) {
// 			  if (err) throw err;
// 			  console.log("connected as id " + connection.threadId + "\n");
// 			  insertCrud();
// 			});

// 			function insertCrud() {
// 			  console.log("Inserting a new product...\n");
// 			  connection.query(
// 			    "INSERT INTO products SET ?",
// 			    {
// 			      flavor: "Rocky Road",
// 			      price: 3.0,
// 			      quantity: 50
// 			    },
// 			    function(err, res) {
// 			      console.log(res.affectedRows + " product inserted!\n");
// 			      // Call updateCrud AFTER the 
// 			    }
// 			  );
// 			 }
