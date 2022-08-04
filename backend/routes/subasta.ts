import { Router } from 'express';

// Importar las funciones del controlador subasta
import { Subasta } from '../controllers';
const{
    obtenerSubastas,
    obtenerSubasta,
    crearSubasta,
    eliminarSubasta,
    actualizarSubasta
} = Subasta;

const router = Router();

// Rutas para la subasta
router.get('/', obtenerSubastas);
router.get('/:id', obtenerSubasta);
router.post('/', crearSubasta);
router.put('/:id', actualizarSubasta);
router.delete('/:id', eliminarSubasta);

// Rutas a exportar
export { router }
