import mongoose from 'mongoose';
import { IOferta } from '../interfaces/index';

const { Schema, Model } = mongoose;

// Esquema de Mongoose para la oferta
const ofertaSchema: mongoose.Schema = new Schema<IOferta>(
    {
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
    }
)

// Exportar el modelo
const Oferta = mongoose.model<IOferta>('ofertas', ofertaSchema);

export { Oferta }
