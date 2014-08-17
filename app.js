var express = require('express')
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views')
app.set('view engine', 'jade')
app.listen(port)

console.log('service launched' + port)

// index page
app.get('/', function(req, res) {
	res.render('index', {
		title: 'movie-tiny-review--Home'
	})
})

// detail page
app.get('/', function(req, res) {
	res.render('index', {
		title: 'movie-tiny-review--Detail'
	})
})

// admin page
app.get('/', function(req, res) {
	res.render('index', {
		title: 'movie-tiny-review--Admin'
	})
})

// list page
app.get('/', function(req, res) {
	res.render('index', {
		title: 'movie-tiny-review--List'
	})
})