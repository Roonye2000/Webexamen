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
exports.eliminarPeticion = exports.actualizarPeticion = exports.crearPeticion = exports.obtenerPeticion = exports.obtenerPeticiones = void 0;
let Peticion = [];
// Consultar las peticiones registradas
const obtenerPeticiones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [total, peticiones] = yield Promise.all([
        Peticion.length,
        Peticion
    ]);
    res.json({ total, peticiones });
});
exports.obtenerPeticiones = obtenerPeticiones;
// Consultar una petición por su id
const obtenerPeticion = (req, res) => {
    const { id } = req.params;
    const peticion = Peticion.find(peticionx => peticionx.id == id);
    res.json(peticion);
};
exports.obtenerPeticion = obtenerPeticion;
//  Registrar una petición en la base de datos
const crearPeticion = (req, res) => {
    const body = __rest(req.body, []);
    body.nota = Number(body.nota); // Convertir la nota a int
    body.estado = Number(body.estado); // Convertir la nota a int
    Peticion.push(body);
    const nuevaPeticion = Peticion.find(peticionx => peticionx.id == body.id);
    return res.status(201).json(nuevaPeticion);
};
exports.crearPeticion = crearPeticion;
// Actualizar una petición por su id
const actualizarPeticion = (req, res) => {
    const { id } = req.params;
    const body = __rest(req.body, []);
    body.nota = Number(body.nota); // Convertir la nota a int
    body.estado = Number(body.estado); // Convertir la nota a int
    const peticionIndex = Peticion.findIndex(peticionx => peticionx.id == id);
    Peticion[peticionIndex] = body;
    res.json(Peticion[peticionIndex]);
};
exports.actualizarPeticion = actualizarPeticion;
// Eliminar una peticion por su id
const eliminarPeticion = (req, res) => {
    const { id } = req.params;
    const nuevasPeticiones = Peticion.filter(peticionx => peticionx.id != id);
    Peticion = nuevasPeticiones;
    res.json(nuevasPeticiones);
};
exports.eliminarPeticion = eliminarPeticion;
//# sourceMappingURL=peticion.js.map