const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(`${__dirname}/client/dist/public`));
 
// create application/json parser
const jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

//MongoDb
const {connect, Users} = require('./mongodb');
connect()
    .then(() => { console.log('MongoDb connected') })
    .catch((err) => { console.log(err) });

//API
app.post('/user', jsonParser, function(req, res) {
    Users.find(req.body,(err, users) => {
        if (err || users.length == 0) {
            res.status(200).send({message: 'Користувача не знайдено'});
        } else {
            res.status(200).send({user: users[0]});
        }
    })
});

app.post('/remind', jsonParser, function(req, res) {
    Users.find(req.body,(err, users) => {
        if (err || users.length == 0) {
            res.status(200).send({message: 'Користувача не знайдено'});
        } else {
            res.status(200).send({message: `Ваш пароль - ${users[0].userPwd}`});
        }
    })
});

app.post('/registerUser', jsonParser, function(req, res) {
    console.log(req.body);
    Users.find({userName: req.body.userName},(err, users) => {
        if (err || users.length == 0) {
            Users.create(req.body);
            res.status(200).send({message: 'Користувача успішно створено', success: true});
        } else {
            res.status(200).send({message: 'Користувач вже зареєстрований'});
        }
    })
});

app.get('*', function(req, res) {
    res.sendFile(`${__dirname}/client/dist/public/index.html`);
});

const port = process.env.port || 8000;
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});
