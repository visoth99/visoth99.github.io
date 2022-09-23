'use strict';
const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r?', function (req, res) {
    const radius=req.params['r'];
    if(!req.params['r']){
        return res.status(400).send("Missing Required GET parameter: :r => /math/circle/:r ");
    }
    else if(isNaN(radius)){
        return res.status(400).send("Required GET parameter supposes to be a number: :r => /math/circle/:r ");
    }
    res.type('json');
    res.status(200);
    res.json({"area":Math.PI * radius *radius, "circumference":Math.PI*2*radius})
});

// define endpoint for exercise 2 here
app.get('/hello/name',function (req,res){
    if(!req.query['first'] && !req.query['last']) {
        return res.status(400).send("Missing Required GET parameters: first, last");
    }
    else if(!req.query['first']) {
        return res.status(400).send("Missing Required GET parameters: first");
    }
    else if(!req.query['last']) {
        return res.status(400).send("Missing Required GET parameters: last");
    }
    res.type('text');
    res.status(200);
    res.send("Hello "+req.query['first']+" "+req.query['last']);
});


app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);

