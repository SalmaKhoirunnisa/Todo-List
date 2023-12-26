const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://mongo:27017/todolist', { useNewUrlParser: true, useUnifiedTopology: true });

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Konfigurasi middleware dan rute di sini

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
