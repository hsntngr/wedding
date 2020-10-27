var express = require('express');
var router = express.Router();
const accountSid = 'ACe20d33412412267cc703041bef5a94fd';
const authToken = '0ece5cc781678b2116a0d71648d39027';
const client = require('twilio')(accountSid, authToken);

const Bride = require('../models/Bride');


router.post('/', (req, res, next) => {
    const bride = new Bride(req.body);
    const phone = '+905457430302'
    const promise = bride.save(client.messages
        .create({ body: 'Hi there!', from: '+14328887467', to: `${phone}` })
        .then(message => console.log(message.sid)));

    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    })
});

router.post('/:smsid', (req, res, next) => {
    const promise = Bride.findById(req.params.smsid);
    const phone = '+905457430302';
    const merhaba = "lkjhjg";
    client.messages
        .create({ body: `${merhaba}`, from: '+14328887467', to: `${phone}` })
        .then(message => console.log(message.sid));

    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    })
});

router.post('/holiday', (req, res, next) => {
    const promise = Bride.find(req.params.smsid);
    const phone = '+905457430302';
    const merhaba = "lkjhjg";
    client.messages
        .create({ body: `${merhaba}`, from: '+14328887467', to: `${phone}` })
        .then(message => console.log(message.sid));

    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    })
});


router.get('/', (req, res) => {
    const promise = Bride.find({});

    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    })
});


router.get('/top10', (req, res) => {
    const promise = Bride.find({}).limit(10).sort({ imdb_score: 1 });

    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    })
});


router.get('/:movie_id', (req, res, next) => {
    const promise = Bride.findById(req.params.movie_id);

    promise.then((movie) => {
        res.json(movie);
    }).catch((err) => {
        res.json(err);
    })
});



router.put('/:movie_id', (req, res, next) => {
    const promise = Bride.findByIdAndUpdate(
        req.params.movie_id,
        req.body, {
            new: true
        });

    promise.then((movie) => {
        res.json(movie);
    }).catch((err) => {
        res.json(err);
    })
});


router.delete('/:movie_id', (req, res, next) => {
    const promise = Bride.findByIdAndDelete(req.params.movie_id);

    promise.then((movie) => {
        res.json('Successfully deleted.');
    }).catch((err) => {
        res.json(err);
    })
});

router.get('/between/:start_year/:end_year', (req, res) => {
    const { start_year, end_year } = req.params;
    const promise = Bride.find({
        year: { "$gte": parseInt(start_year), "$lte": parseInt(end_year) }
    });

    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    })
});



module.exports = router;