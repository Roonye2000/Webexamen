import { Router } from 'express';

// Importar las funciones del controlador oferta
import { Oferta } from '../controllers';
const{
    obtenerOfertas,
    obtenerOferta,
    crearOferta,
    eliminarOferta,
    actualizarOferta
} = Oferta;

const router =Router();

// Rutas para la oferta
router.get('/', obtenerOfertas);
router.get('/:id', obtenerOferta);
router.post('/', crearOferta);
router.put('/:id', actualizarOferta);
router.delete('/:id', eliminarOferta);

// Rutas a exportar
export { router }
