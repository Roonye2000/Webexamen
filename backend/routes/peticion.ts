import { Router } from 'express';

import { validarPeticion } from '../validators/index';

import { Peticion } from '../controllers';
const {
    obtenerPeticiones,
    obtenerPeticion,
    crearPeticion,
    actualizarPeticion,
    eliminarPeticion
} = Peticion;

const router = Router();

router.get('/', obtenerPeticiones);
router.get('/:id', obtenerPeticion);
router.post('/', validarPeticion, crearPeticion);
router.put('/:id',validarPeticion, actualizarPeticion);
router.delete('/:id', eliminarPeticion);

export { router }
