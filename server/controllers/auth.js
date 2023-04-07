const {
    userModel,
    tokenBlacklistModel
} = require('../models');

const utils = require('../utils');
const { authCookieName } = require('../app-config');

const bsonToJson = (data) => { return JSON.parse(JSON.stringify(data)) };
const removePassword = (data) => {
    const { password, __v, ...userData } = data;
    return userData
}


function register(req, res, next) {
    const { email, username, first_name, last_name , address, password, repeatPassword } = req.body;
    console.log(email);
    console.log(username);
    console.log(first_name);
    console.log(last_name);
    console.log(address);
    console.log(password);
    console.log(repeatPassword);

    return userModel.create({ email, username, first_name, last_name, address, password})
        .then((createdUser) => {
            createdUser = bsonToJson(createdUser);
            createdUser = removePassword(createdUser);

            const token = utils.jwt.createToken({ id: createdUser._id });
            if (process.env.NODE_ENV === 'production') {
                res.cookie(authCookieName, token, { httpOnly: true, sameSite: 'none', secure: true })
            } else {
                res.cookie(authCookieName, token, { httpOnly: true });
                createdUser['accessToken'] = token;
            }
            res.status(200)
                //.set('Access-Control-Allow-Origin', '*')
                //.set("Access-Control-Allow-Headers", "X-Requested-With")
                .send(createdUser);
        })
        .catch(err => {
            if (err.name === 'MongoError' && err.code === 11000) {
                let field = err.message.split("index: ")[1];
                field = field.split(" dup key")[0];
                field = field.substring(0, field.lastIndexOf("_"));

                res.status(409)
                    .send({ message: `This ${field} is already registered!` });
                return;
            }
            next(err);
        });
}

function login(req, res, next) {
    const { email, password } = req.body;

    userModel.findOne({ email })
        .then(user => {
            return Promise.all([user, user ? user.matchPassword(password) : false]);
        })
        .then(([user, match]) => {
            if (!match) {
                res.status(401)
                    //.set('Access-Control-Allow-Origin', '*')
                    //.set("Access-Control-Allow-Headers", "X-Requested-With")
                    .send({ message: 'Wrong email or password' });
                return
            }
            user = bsonToJson(user);
            user = removePassword(user);

            const token = utils.jwt.createToken({ id: user._id });
            console.log(token);
            

            if (process.env.NODE_ENV === 'production') {
                res.cookie(authCookieName, token, { httpOnly: true, sameSite: 'none', secure: true })
            } else {
                user['accessToken'] = token;
                //console.log(user);

                res.cookie(authCookieName, token);
                console.log(res.cookie(authCookieName, token, {httpOnly: true}));
            }
            res.status(200)
                //.set('Access-Control-Allow-Origin', '*')
                //.set("Access-Control-Allow-Headers", "X-Requested-With")
                .send(user);
        })
        .catch(next);
}

function logout(req, res) {
    console.log(req);
    const token = req.cookies[authCookieName];
    console.log("Logout");
    console.log(token);

    tokenBlacklistModel.create({ token })
        .then(() => {
            res.clearCookie(authCookieName)
                .status(204)
                .send({ message: 'Logged out!' });
        })
        .catch(err => res.send(err));
}

function getProfileInfo(req, res, next) {
    const { _id: userId } = req.user;

    userModel.findOne({ _id: userId }, { password: 0, __v: 0 }) //finding by Id and returning without password and __v
    .populate({
        path : 'properties',
      })
      .populate({
        path : 'tenants'
      })
      .populate({
        path : 'tenancies'
      })
    .then(user => { res.status(200).json(user) })
        .catch(next);
}

function editProfileInfo(req, res, next) {
    const { _id: userId } = req.user;
    const { username, email, first_name, last_name, address } = req.body;

    console.log(userId);
    console.log(username);
    console.log(email);
    console.log(first_name);
    console.log(last_name);
    console.log(address);



    userModel.findOneAndUpdate({ _id: userId }, { username, email, first_name, last_name, address}, { runValidators: true, new: true })
        .then(x => { res.status(200).json(x) })
        .catch(next);
}

module.exports = {
    login,
    register,
    logout,
    getProfileInfo,
    editProfileInfo,
}
