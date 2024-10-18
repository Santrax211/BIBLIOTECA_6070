const Prestamo = require('../models/Prestamo');

// Obtener todos los préstamos
exports.getPrestamos = async (req, res) => {
    try {
        const prestamos = await Prestamo.find();
        res.status(200).json(prestamos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los préstamos', error });
    }
};

// Obtener un préstamo por ID
exports.getPrestamoById = async (req, res) => {
    try {
        const prestamo = await Prestamo.findById(req.params.id);
        if (!prestamo) {
            return res.status(404).json({ message: 'Préstamo no encontrado' });
        }
        res.status(200).json(prestamo);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el préstamo', error });
    }
};

// Crear un nuevo préstamo
exports.createPrestamo = async (req, res) => {
    try {
        const nuevoPrestamo = new Prestamo(req.body);
        const prestamoGuardado = await nuevoPrestamo.save();
        res.status(201).json(prestamoGuardado);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el préstamo', error });
    }
};

// Actualizar un préstamo existente
exports.updatePrestamo = async (req, res) => {
    try {
        const prestamoActualizado = await Prestamo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!prestamoActualizado) {
            return res.status(404).json({ message: 'Préstamo no encontrado' });
        }
        res.status(200).json(prestamoActualizado);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el préstamo', error });
    }
};

// Eliminar un préstamo
exports.deletePrestamo = async (req, res) => {
    try {
        const prestamoEliminado = await Prestamo.findByIdAndDelete(req.params.id);
        if (!prestamoEliminado) {
            return res.status(404).json({ message: 'Préstamo no encontrado' });
        }
        res.status(200).json({ message: 'Préstamo eliminado' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el préstamo', error });
    }
};