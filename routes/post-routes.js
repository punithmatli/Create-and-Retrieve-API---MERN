const express = require('express');

const router = express.Router();

const Post = require('../models/Post')

router.get('/', (req,res) => {
    res.send('In get posts');
})

router.post('/', async (req, res) => {
    console.log('In POST')
    const createdPost = new Post({
        name: req.body.name
    })
    console.log(createdPost);
    try {
        const data = await createdPost.save();
        res.json(data);
    } catch(err) {
        console.log(err);
        res.json({message:err})
    }
})

module.exports = router;