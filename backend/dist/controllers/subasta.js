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
exports.eliminarSubasta = exports.actualizarSubasta = exports.crearSubasta = exports.obtenerSubasta = exports.obtenerSubastas = void 0;
const index_1 = require("../models/index");
// Consultar las subastas registradas
const obtenerSubastas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limite = 10, desde = 0 } = req.query;
    const [total, subastas] = yield Promise.all([
        index_1.Subasta
            .countDocuments(),
        index_1.Subasta
            .find()
            .skip(Number(desde))
            .limit(Number(limite))
    ]);
    res.json({
        total,
        subastas
    });
});
exports.obtenerSubastas = obtenerSubastas;
// Consultar una subasta por su id
const obtenerSubasta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const subasta = yield index_1.Subasta.findById(id);
    res.json(subasta);
});
exports.obtenerSubasta = obtenerSubasta;
// Registrar una subasta en la base de datos
const crearSubasta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = __rest(req.body, []);
    const subasta = new index_1.Subasta(body);
    const nuevaSubasta = yield subasta.save();
    return res.status(201).json(nuevaSubasta);
});
exports.crearSubasta = crearSubasta;
// Actualizar una subasta por su id
const actualizarSubasta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const body = __rest(req.body, []);
    const subastaModificada = yield index_1.Subasta.findByIdAndUpdate(id, body, { new: true });
    res.json(subastaModificada);
});
exports.actualizarSubasta = actualizarSubasta;
// Eliminar una subasta por su id
const eliminarSubasta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const subastaEliminada = yield index_1.Subasta.findByIdAndDelete(id);
    res.json(subastaEliminada);
});
exports.eliminarSubasta = eliminarSubasta;
//# sourceMappingURL=subasta.js.map