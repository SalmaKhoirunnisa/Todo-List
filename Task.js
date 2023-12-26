const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  tanggal: Date,
  namaAktivitas: String,
  waktu: String,
  keterangan: String,
  prioritas: {
    type: String,
    enum: ['tinggi', 'sedang', 'rendah'], // Assuming prioritas can only be one of these values
  },
  kategori: String,
  lokasi: String,
  keteranganLain: String,
  // Add more properties as needed
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
