const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Pawfect backend is running!');
});


mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error(err));

app.use('/api/pets', require('./routes/pets'));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
