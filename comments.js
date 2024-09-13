// Create web server
const express = require('express');
const app = express();

// Import comments
const comments = require('./comments');

// Get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Get comments by ID
app.get('/comments/:id', (req, res) => {
  const comment = comments.find(comment => comment.id === parseInt(req.params.id));
  if (!comment) {
    res.status(404).send('The comment with the given ID was not found.');
  } else {
    res.json(comment);
  }
});

// Start web server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});