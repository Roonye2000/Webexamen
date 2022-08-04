"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
// Importar las funciones del controlador oferta
const controllers_1 = require("../controllers");
const { obtenerOfertas, obtenerOferta, crearOferta, eliminarOferta, actualizarOferta } = controllers_1.Oferta;
const router = (0, express_1.Router)();
exports.router = router;
// Rutas para la oferta
router.get('/', obtenerOfertas);
router.get('/:id', obtenerOferta);
router.post('/', crearOferta);
router.put('/:id', actualizarOferta);
router.delete('/:id', eliminarOferta);
//# sourceMappingURL=oferta.js.map