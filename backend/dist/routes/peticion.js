"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const index_1 = require("../validators/index");
const controllers_1 = require("../controllers");
const { obtenerPeticiones, obtenerPeticion, crearPeticion, actualizarPeticion, eliminarPeticion } = controllers_1.Peticion;
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', obtenerPeticiones);
router.get('/:id', obtenerPeticion);
router.post('/', index_1.validarPeticion, crearPeticion);
router.put('/:id', index_1.validarPeticion, actualizarPeticion);
router.delete('/:id', eliminarPeticion);
//# sourceMappingURL=peticion.js.map