const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (error) {
    res.json({message:error})
  }
})

router.get('/:id', async (req, res) => {
  try {
    const posts = await Post.findById(req.params.id)
    res.json(posts)
  } catch (error) {
    res.json({message:error})
  }
})

router.post('/create', async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  })
  try {
    const savedOne = await post.save();
    res.json(savedOne)
  } catch (error) {
    res.json({message: error})
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const updatedOne = await Post.updateOne({
      _id: req.params.id
    }, {
      $set: { 
        title: req.body.title,
        description: req.body.description
      }
    });
    res.json(updatedOne)
  } catch (error) {
    res.json({message: error})
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Post.remove({
      _id: req.params.id
    });
    res.json(deleted)
  } catch (error) {
    res.json({message: error})
  }
})

module.exports = router