import mongoose from 'mongoose';
import { ISubasta } from '../interfaces/index';

const { Schema, Model } = mongoose;

// Esquema de Mongoose para la subasta
const subastaSchema: mongoose.Schema = new Schema<ISubasta>(
	{
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
	}
)

// Exportar el modelo
const Subasta = mongoose.model<ISubasta>('subastas', subastaSchema);

export { Subasta }
