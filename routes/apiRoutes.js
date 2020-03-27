const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.get('/', (req, res) => {
    const msg = {
        to: '',
        from: '',
        subject: '',
        text: '',
    };
    sgMail
        .send(msg)
        .then(() => console.log(msg))
})

router.post('/postEmail', (req, res) => {
    const msg = {
        to: '',
        from: '',
        subject: '',
        text: '',
    };
    sgMail
        .send(msg)
        .then(() => console.log(msg))
})


module.exports = router;