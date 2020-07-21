const express = require('express');
const app = express();

//MongoDb
const mongo = require('mongoose');
mongo.connect(`mongodb+srv://${process.env.userName}:${process.env.userPwd}@web4ua.966wc.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => { console.log('MongoDb connected') })
    .catch((err) => { console.log(err) });

const UsersSchema = new mongo.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
});

const Users = mongo.model('users', UsersSchema);

//API
app.get('/', (req, res) => {
    Users.find()
    .then((users)=> {
        if (users.length == 0) {
            Users.create({
                name: 'test01',
                password: 'pass01',
            })
            .then((user) => res.send(user))
            .catch((err) => res.send(err));
        } else {
            res.send(users);
        }
    })
    .catch((err) => res.send(err));
});

const port = process.env.port || 8000;
app.listen(port, () => {
    console.log('Let1s go!');
});
