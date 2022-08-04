"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarPeticion = void 0;
const express_validator_1 = require("express-validator");
const index_1 = require("../middlewares/index");
const validarPeticion = [
    (0, express_validator_1.check)('id')
        .trim()
        .exists()
        .isString()
        .withMessage('El id de la petición es requerido'),
    (0, express_validator_1.check)('fecha')
        .trim()
        .exists()
        .isISO8601()
        .withMessage('La fecha de la petición es requerida'),
    (0, express_validator_1.check)('idUsuario')
        .trim()
        .exists()
        .isString()
        .withMessage('El id del usuario es requerido'),
    (0, express_validator_1.check)('asignatura')
        .trim()
        .exists()
        .isString()
        .withMessage('El nombre de la signatura es requerido'),
    (0, express_validator_1.check)('nota')
        .trim()
        .exists()
        .isNumeric()
        .withMessage('La nota debe tener un formato numérico'),
    (0, express_validator_1.check)('estado')
        .trim()
        .exists()
        .isNumeric()
        .withMessage('El estado debe tener un formato numérico'),
    (req, res, next) => {
        (0, index_1.validarCampos)(req, res, next);
    }
];
exports.validarPeticion = validarPeticion;
//# sourceMappingURL=validarPeticion.js.map