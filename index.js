// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (to handle JSON requests)
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
  res.send('Hello from Node.js + Express app!');
});

// Another example route
app.get('/about', (req, res) => {
  res.json({ message: 'This is the about page' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
