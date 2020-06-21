const express = require('express');
const bodyParser = require('body-parser');

const Webinars = require('../models/webinars');

const webinarRouter = express.Router();

webinarRouter.use(bodyParser.json());

webinarRouter.route('/')
.get((req,res,next) => {
    Webinars.find({})
    .then((webinars) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(webinars);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Webinars.create(req.body)
    .then((webinar) => {
        console.log('Webinar Created ', webinar);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(webinar);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /webinars');
})
.delete((req, res, next) => {
    Webinars.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

webinarRouter.route('/:webinarId')
.get((req,res,next) => {
    Webinars.findById(req.params.webinarId)
    .then((webinar) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(webinar);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /webinar/'+ req.params.webinarId);
})
.put((req, res, next) => {
    Webinars.findByIdAndUpdate(req.params.webinarId, {
        $set: req.body
    }, { new: true })
    .then((webinar) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(webinar);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Webinars.findByIdAndRemove(req.params.webinarId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

// webinarRouter.route('/recommendations')
// .get((req,res,next) => {
//   try {  
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     res.send('recommendations');
//   } catch (err) {
//     console.log(err.message);
//     next(err);
//   }
// });

// webinarRouter.route('/contactus')
// .get(async (req,res,next) => {
// try {  
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'application/json');
//   res.send('contactus');
// } catch (err) {
//   console.log(err.message);
//   next(err);
// }
// });

// webinarRouter.route('/signup')
// .get(async (req,res,next) => {
//   try {  
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     res.send('signup');
//   } catch (err) {
//     console.log(err.message);
//     next(err);
//   }
// });

module.exports = webinarRouter;