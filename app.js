var express = require('express')
    , app = express()
    , port = process.env.PORT || 5000
    , ip = ''
    , less = require('less-middleware')
    , path = require('path')
    , less_opts = {}

app.set('view engine', 'jade')
app.set('views', __dirname + '/views')

// development
app.configure('development', function () {
    app.locals.pretty = true
    ip = '192.168.1.141'
    less_opts.src: path.join(__dirname, 'static'),
    less_opts.compress: false,
    less_opts.debug: true,
    less_opts.paths: [path.join(__dirname, 'static')]
})

// production
app.configure('production', function () {
    app.locals.pretty = false
    ip = '127.0.0.1'
    less_opts.compress = true
    less_opts.debug = false
})

app.use(less(less_opts))

app.use(express.static(path.join(__dirname, 'static')))
app.use(express.logger())

app.get('/', function (req, res) {
    res.render('index')
})

app.get('/menus', function(req, res) {
    res.render('menus')
})

app.get('/contact', function (req, res) {
    res.render('contact')
})

app.listen(port, ip)
console.log('* listening on ' + port)
