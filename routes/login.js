'use strict';
const { request } = require('express');
var express = require('express');
var router = express.Router();
var sesion;

/* GET home page. */
router.get('/', function(req, res, next) {
    sesion = req.session;

    if(sesion.email){
        res.render('welcome', {nombre: sesion.email});
    }else{
        res.render('login', {title: 'Login'});
    }
});

router.post('/handle', function(req, res, next){
    sesion = req.session;

    sesion.email = req.body.email;
    res.render('welcome', {nombre: sesion.email});
});

router.get('/logout', (req, res) => {

    req.session.destroy((err) => {
        if (err) {
            return console.log(err);
        }
        res.redirect('/login');
    });
});

module.exports = router;