const express = require('express');
const path = require('path');
const { fetchApplicationData } = require('./services/apiService');
const { evaluateChecklist } = require('./config/checklistRules');

const app = express();
const PORT = 3000;

// Middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Route to fetch and evaluate checklist
app.get('/api/checklist', async (req, res) => {
     try {
          const data = await fetchApplicationData();
          const results = evaluateChecklist(data);
          res.json(results);
     } catch (error) {
          res.status(500).json({ error: error.message });
     }
});

// Serve the dashboard
app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
     console.log(`Server is running on http://localhost:${PORT}`);
});