require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT || 8877

mongoose = require('mongoose')

const produto = require('./api/models/produtoModel.js');

const bodyParser = require('body-parser');

mongoose.promise = global.promise;
mongoose.connect(
    process.env.DATABASE_URL
)

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routes = require('./api/routes/produtoRoutes.js');
routes(app)


app.listen(PORT,()=>{
    console.log('ESCUNTADO A PORTA'+PORT);
})

