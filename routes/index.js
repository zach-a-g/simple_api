`use strict`

const express = require('express');
// const { default: slugify } = require('slugify');
const router = express.Router();
const ContactModel = require('../models/ContactModel');

router.get('/:slug?', async(req, res) => {
    if (!!req.params.slug) {
        const { slug } = req.params;
        const theContact = await ContactModel.getBySlug(slug);

        res.json(theContact).status(200);
    } else {
        const ContactData = await ContactModel.getAll();

        res.json(ContactData).status(200);
    }

});

module.exports = router;