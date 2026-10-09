
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.json({
    message: 'Accessibility Audit API is running!'
  });
});

// Audit information route
app.get('/api/audit', (req, res) => {
  res.json({
    project: 'Accessibility Audit Project',
    website: 'GOV.UK',
    methods: [
      'Lighthouse accessibility audit',
      'Keyboard navigation testing'
    ],
    status: 'API working successfully'
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});