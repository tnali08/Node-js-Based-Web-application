//require modules
const express=require('express');
const morgan=require('morgan');
const path=require('path');
var methodOverride = require('method-override');
const pageRoutes=require('./routes/pageRoutes');
const bodyParser = require('body-parser');

//create app
const app=express();

//configure app
let port=3000;
let host='localhost';
app.set('view engine','ejs');

//mount middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended:true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

//set up routes

app.use('/',pageRoutes);

//Start the server
app.listen(port,host,()=>{
    console.log('server is running',port);
});