const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())
const postRoutes = require('./routes/post-routes')



app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Hi, This is an API' })
})

mongoose
.connect(DB_CONNECT)
.then(() => {
    app.listen(5000, () => {console.log('Listening on 5000')});
})
.catch(err => {
    console.log(err);
});