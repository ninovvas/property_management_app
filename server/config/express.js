const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require ('cors');
const cookieSecret = process.env.COOKIESECRET || 'PropertyManagementApp';

// const { errorHandler } = require('../utils')

module.exports = (app) => {
    app.use(express.json());

    app.use(cookieParser(cookieSecret));

    app.use(express.static(path.resolve(__basedir, 'static')));
    app.use(cors());

    // app.use(errorHandler(err, req, res, next));
};
