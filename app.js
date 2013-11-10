var express = require('express')
    , app = express()
    , port = 9022
    , ip = ''
    , less = require('less-middleware')
    , path = require('path')

app.set('view engine', 'jade')
app.set('views', __dirname + '/views')

// development
app.configure('development', function () {
    app.locals.pretty = true
    ip = '192.168.1.141'
})

// production
app.configure('production', function () {
})

app.use(less({
    src: path.join(__dirname, 'static'),
    compress: false,
    debug: false,
    paths: [path.join(__dirname, 'static')]
}))

app.use(express.static(path.join(__dirname, 'static')))
app.use(express.logger())

app.get('/', function (req, res) {
    res.render('index')
})

app.get('/menus', function(req, res) {
    res.render('menus')
})

app.listen(port, ip)
console.log('* listening on ' + port)
