var express = require('express')
    , app = express()
    , port = 9022
    , less = require('less-middleware')
    , path = require('path')

app.set('view engine', 'jade')
app.set('views', __dirname + '/views')

app.configure('development', function () {
    app.locals.pretty = true
})

app.use(less({
    src: path.join(__dirname, 'static'),
    compress: false,
    debug: true,
    paths: [path.join(__dirname, 'static')]
}))

app.use(express.static(path.join(__dirname, 'static')))

app.get('/', function (req, res) {
    res.render('index')
})

app.listen(port)
console.log('* listening on ' + port)
