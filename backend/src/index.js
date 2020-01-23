const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors')
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://sysadmin:Triceratop19@cluster0-hofnt.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors())
app.use(express.json());
//Query params: request.query(filtros, ordenação, paginação)
//Route params: request.params(identificar um recurso na alteraçao ou remoção)
//body: request.body (Dados para criação ou alteração de um registro)
app.use(routes)
app.listen(5561); 