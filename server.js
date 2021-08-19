// jshint express:6

const express = require('express');
const app = express();




app.get('/', (req, res) => {
    console.log('Back to the home page.');
    res.send('Home Page');
});

app.get('/users', auth, (req,res) => {
    console.log('User is admin = ${req.admin}');
    console.log('Users Page');
    res.send('<h1>Users Page</h1');
});

function logger(req,res,next){
    console.log('Log');
    next();
}


app.use(logger);

function auth(req, res,next) {
    if (req.query.admin === 'true'){
        req.admin=true;
        next();
    } else {
        res.send('No auth');
    }
}

    //console.log('Auth');
    
app.listen(3000);
    console.log('Server is running on port 3000.');





