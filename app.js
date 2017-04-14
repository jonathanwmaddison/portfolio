var express = require('express')
var app = express()
var path = require('path');
var Projects = require('./project-data.js')
app.set('port', (process.env.PORT || 3000));

app.use('/static', express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
    res.render('portfolio', {projects: Projects.projectData})
})

app.get('/resume', function (req, res) {
    res.render('resume')
})

app.get('/project-*', function (req, res) {
    res.render('project', {projectData: Projects.findProject(req.params['0'])})
})

//Listen for requests
var server = app.listen(app.get('port'), function () {
    var port = server.address().port
    console.log('Portfolio Project listening on port'+port)
})
