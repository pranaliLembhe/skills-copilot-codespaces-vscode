// Create web server
const express = require('express');
const comments = require('./comments');

// Create Express web server
const app = express();

// Use JSON for all requests
app.use(express.json());

// GET /comments
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});

// POST /comments
app.post('/comments', (req, res) => {
  const { comment } = req.body;
  const id = comments.addComment(comment);
  res.json({ id });
});

// DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;
  comments.deleteComment(id);
  res.json({ id });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
