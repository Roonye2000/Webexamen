import { check } from 'express-validator';
import { validarCampos } from '../middlewares/index';

const validarPeticion = [
    check('id')
        .trim()
        .exists()
        .isString()
        .withMessage('El id de la petición es requerido'),
    check('fecha')
        .trim()
        .exists()
        .isISO8601()
        .withMessage('La fecha de la petición es requerida'),
    check('idUsuario')
        .trim()
        .exists()
        .isString()
        .withMessage('El id del usuario es requerido'),
    check('asignatura')
        .trim()
        .exists()
        .isString()
        .withMessage('El nombre de la signatura es requerido'),
    check('nota')
        .trim()
        .exists()
        .isNumeric()
        .withMessage('La nota debe tener un formato numérico'),
    check('estado')
        .trim()
        .exists()
        .isNumeric()
        .withMessage('El estado debe tener un formato numérico'),
    (req, res, next) => {
        validarCampos(req, res, next)
    }
]

export { validarPeticion }
