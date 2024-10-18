const Devolucion = require('../models/Devolucion');

// Obtener todas las devoluciones
exports.getDevoluciones = async (req, res) => {
    try {
        const devoluciones = await Devolucion.find();
        res.status(200).json(devoluciones);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener una devolución por ID
exports.getDevolucionById = async (req, res) => {
    try {
        const devolucion = await Devolucion.findById(req.params.id);
        if (!devolucion) {
            return res.status(404).json({ message: 'Devolución no encontrada' });
        }
        res.status(200).json(devolucion);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear una nueva devolución
exports.createDevolucion = async (req, res) => {
    const devolucion = new Devolucion(req.body);
    try {
        const nuevaDevolucion = await devolucion.save();
        res.status(201).json(nuevaDevolucion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar una devolución existente
exports.updateDevolucion = async (req, res) => {
    try {
        const devolucion = await Devolucion.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!devolucion) {
            return res.status(404).json({ message: 'Devolución no encontrada' });
        }
        res.status(200).json(devolucion);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar una devolución
exports.deleteDevolucion = async (req, res) => {
    try {
        const devolucion = await Devolucion.findByIdAndDelete(req.params.id);
        if (!devolucion) {
            return res.status(404).json({ message: 'Devolución no encontrada' });
        }
        res.status(200).json({ message: 'Devolución eliminada' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};