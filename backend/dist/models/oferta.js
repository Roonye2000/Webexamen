"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oferta = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, Model } = mongoose_1.default;
// Esquema de Mongoose para la oferta
const ofertaSchema = new Schema({
    idSubasta: {
        type: Schema.Types.ObjectId,
        ref: "subastas"
    },
    montoOferta: {
        type: Number,
        require: true
    },
    fecha: {
        type: String,
        require: true
    },
    idOfertante: {
        type: String,
        require: true
    }
});
// Exportar el modelo
const Oferta = mongoose_1.default.model('ofertas', ofertaSchema);
exports.Oferta = Oferta;
//# sourceMappingURL=oferta.js.map