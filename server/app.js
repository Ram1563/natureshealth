const express = require('express');
const mongoose = require('mongoose');
const config = require('./config'); // Adjust the path to your config.js
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;



// Connect to the MongoDB database using the URI from config.js
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Add any other Mongoose options here
  })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

// Define your routes and middleware here

const corsOptions = {
  origin: 'http://localhost:3001',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions)); 

app.use(express.json());

// API Routes
const receivableRoutes = require('./routes/receivableRoutes');
const payableRoutes = require('./routes/payableRoutes');
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});
app.use('/api/receivables', receivableRoutes);
app.use('/api/payables', payableRoutes);







app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
