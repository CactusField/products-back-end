require('dotenv').config();
const express = require('express');
const massive = require('massive');
const products_controller = require('./products_controller');

const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized:false}
})
.then(dbInstance =>{
    app.set('db', dbInstance);
})
.catch(err => console.log(err));

app.use(express.json());

//ENDPOINTS
//app.post('/api/products', products_controller.create);
//app.get('/api/products', products_controller.getAll);
//app.get('/api/products/:id', products_controller.getOne);
//app.put('/api/products/:id', products_controller.update);
//app.delete('/api/products/:id', products_controller.delete);
//ENDPOINTS

app.listen(SERVER_PORT, () => {
    console.log(`Wow! You Did it on port ${SERVER_PORT}`);
});