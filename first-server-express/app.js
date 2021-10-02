const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/index');

//settings
app.set('port', process.env.PORT || 7000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use((req, res, next) => {
    console.log(`${req.url} - ${req.method}`); //pide la url y el metodo atraves del cual se pidio(get, post, etc
    next();
});

app.use(express.json());
app.use(express.urlencoded({
    extended : false
}));

//routes
app.use(routes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//start server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});