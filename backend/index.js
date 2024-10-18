const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a MongoDB
const uri = 'mongodb+srv://daniel:sahuma@cluster0.rmw15.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(uri)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB', err));

// Esquema y modelo para Préstamos
const prestamoSchema = new mongoose.Schema({
    id: Number,
    nombreLibro: String,
    nombreUsuario: String,
    fechaPrestamo: Date,
    fechaDevolucion: Date,
    estado: String
});

const Prestamo = mongoose.model('Prestamo', prestamoSchema);

// Esquema y modelo para Devoluciones
const devolucionSchema = new mongoose.Schema({
    id: Number,
    idPrestamo: Number,
    nombreUsuario: String,
    fechaDevolucion: Date,
    multa: Number
});

const Devolucion = mongoose.model('Devolucion', devolucionSchema);

// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('Servidor backend funcionando correctamente.');
});

// Ruta de login (ya existente)
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === '1234') {
    res.status(200).json({ success: true, message: 'Inicio de sesión exitoso' });
  } else {
    res.status(401).json({ success: false, message: 'Credenciales incorrectas' });
  }
});

// Ruta para obtener la lista de préstamos
app.get('/api/prestamos', async (req, res) => {
    try {
        const prestamos = await Prestamo.find();
        res.json(prestamos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener préstamos' });
    }
});

// Ruta para obtener la lista de devoluciones
app.get('/api/devoluciones', async (req, res) => {
    try {
        const devoluciones = await Devolucion.find();
        res.json(devoluciones);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener devoluciones' });
    }
});

app.get('/api/historial', async (req, res) => {
  try {
      const prestamos = await Prestamo.find();
      const devoluciones = await Devolucion.find();

      // Combina los arrays de préstamos y devoluciones
      const historial = [...prestamos, ...devoluciones];

      // Ordenar por fecha (si ambas colecciones tienen un campo `fecha`)
      historial.sort((a, b) => new Date(a.fechaPrestamo || a.fechaDevolucion) - new Date(b.fechaPrestamo || b.fechaDevolucion));

      res.json(historial);
  } catch (error) {
      res.status(500).json({ message: 'Error al obtener el historial' });
  }
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


