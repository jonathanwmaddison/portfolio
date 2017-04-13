var express = require('express')
var app = express()
var path = require('path');
var ProjectFinder = require('./project-data.js')

console.log(ProjectFinder)
app.set('port', 3000);

app.use('/static', express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render('resume')
})

app.get('/portfolio', function (req, res) {
    res.render('portfolio')
})

app.get('/portfolio/project-*', function (req, res) {
    res.render('project', {projectData: ProjectFinder(req.params['0'])})
})

//Listen for requests
var server = app.listen(app.get('port'), function () {
    var port = server.address().port
    console.log('Portfolio Project listening on port'+port)
})
