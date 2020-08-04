//MongoDb
const mongo = require('mongoose');

async function connect() {
    mongo.connect(`mongodb+srv://${process.env.userName}:${process.env.userPwd}@web4ua.966wc.mongodb.net/${process.env.dbName}?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

const UsersSchema = new mongo.Schema({
    userName: {
        type: String,
        required: true,
    },
    userPwd: {
        type: String,
        required: true,
    },
    keyword: {
        type: String,
    }
});

const Users = mongo.model('users', UsersSchema);

module.exports.connect = connect;
module.exports.Users = Users;
