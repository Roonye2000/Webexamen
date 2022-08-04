"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
// Importar las funciones del controlador subasta
const controllers_1 = require("../controllers");
const { obtenerSubastas, obtenerSubasta, crearSubasta, eliminarSubasta, actualizarSubasta } = controllers_1.Subasta;
const router = (0, express_1.Router)();
exports.router = router;
// Rutas para la subasta
router.get('/', obtenerSubastas);
router.get('/:id', obtenerSubasta);
router.post('/', crearSubasta);
router.put('/:id', actualizarSubasta);
router.delete('/:id', eliminarSubasta);
//# sourceMappingURL=subasta.js.map