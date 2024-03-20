//express basic server
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

//static files
app.use(express.static('public'));

//routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/endpoint', (req, res) => {

    //all reqeuest data
    console.log({
        body: req.body,
        query: req.query,
        params: req.params
    });

    res.send('Got a POST request');
});

app.get('/about', (req, res) => {
    res.send('About Page');
    }
);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});