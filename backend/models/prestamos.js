const mongoose = require('mongoose');

const prestamoSchema = new mongoose.Schema({
    id: Number,
    nombreLibro: String,
    nombreUsuario: String,
    fechaPrestamo: Date,
    fechaDevolucion: Date,
    estado: String
});

module.exports = mongoose.model('Prestamo', prestamoSchema);