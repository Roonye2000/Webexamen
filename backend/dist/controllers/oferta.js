"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarOferta = exports.actualizarOferta = exports.crearOferta = exports.obtenerOferta = exports.obtenerOfertas = void 0;
const index_1 = require("../models/index");
// Consultar las ofertas registradas
const obtenerOfertas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limite = 10, desde = 0 } = req.query;
    const [total, ofertas] = yield Promise.all([
        index_1.Oferta
            .countDocuments(),
        index_1.Oferta
            .find()
            .skip(Number(desde))
            .limit(Number(limite))
    ]);
    res.json({
        total,
        ofertas
    });
});
exports.obtenerOfertas = obtenerOfertas;
// Consultar una oferta por su id
const obtenerOferta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const oferta = yield index_1.Oferta.findById(id);
    res.json(oferta);
});
exports.obtenerOferta = obtenerOferta;
// Registrar una oferta en la base de datos
const crearOferta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = __rest(req.body, []);
    const oferta = new index_1.Oferta(body);
    const nuevaOferta = yield oferta.save();
    return res.status(201).json(nuevaOferta);
});
exports.crearOferta = crearOferta;
// Actualizar una oferta por su id
const actualizarOferta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const body = __rest(req.body, []);
    const ofertaModificada = yield index_1.Oferta.findByIdAndUpdate(id, body, { new: true });
    res.json(ofertaModificada);
});
exports.actualizarOferta = actualizarOferta;
// Eliminar una oferta por su id
const eliminarOferta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const ofertaEliminada = yield index_1.Oferta.findByIdAndDelete(id);
    res.json(ofertaEliminada);
});
exports.eliminarOferta = eliminarOferta;
//# sourceMappingURL=oferta.js.map