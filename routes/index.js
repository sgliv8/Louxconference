var express = require('express');
var router = express.Router();
var appdata = require('../data.json');

/* GET home page. */
router.get('/', function(req, res) {
	var myArtworks = [];
	var myArtists = [];

	myArtists = appdata.speakers;
	appdata.speakers.forEach(function(item){
		myArtworks = myArtworks.concat(item.artwork);
	})
    res.render('index', { 
  	   title: 'Home',
  	   artworks: myArtworks,
  	   artists: myArtists,
  	   page: "home"
    });
});

/* GET speakers page. */
router.get('/speakers', function(req, res) {
	var myArtworks = [];
	var myArtists = [];

	myArtists = appdata.speakers;
	appdata.speakers.forEach(function(item){
		myArtworks = myArtworks.concat(item.artwork);
	})
    res.render('speakers', { 
  	   title: 'Speakers',
  	   artworks: myArtworks,
  	   artists:myArtists,
  	   page: 'artistlist'
    });
});

/* GET speakers details page. */
router.get('/speakers/:speakerid', function(req, res) {
	var myArtworks = [];
	var myArtists = [];

	appdata.speakers.forEach(function(item){
		if(item.shortname == req.params.speakerid){
			myArtists.push(item);
			myArtworks = myArtworks.concat(item.artwork);
		}
	})
    res.render('speakers', { 
  	   title: 'Speakers',
  	   artworks: myArtworks,
  	   artists: myArtists,
  	   page:'artist'
    });
});

module.exports = router;
