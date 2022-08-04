"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subasta = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, Model } = mongoose_1.default;
// Esquema de Mongoose para la subasta
const subastaSchema = new Schema({
    fecha: {
        type: String,
        require: true
    },
    idDueño: {
        type: String,
        require: true
    },
    descripcionBien: {
        type: String,
        require: true
    },
    montoInicial: {
        type: Number,
        require: true
    },
    validoHasta: {
        type: String,
        require: true
    }
});
// Exportar el modelo
const Subasta = mongoose_1.default.model('subastas', subastaSchema);
exports.Subasta = Subasta;
//# sourceMappingURL=subasta.js.map