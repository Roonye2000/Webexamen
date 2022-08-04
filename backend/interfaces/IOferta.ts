import Schema from 'mongoose';

export interface IOferta {
    idSubasta: Schema.Types.ObjectId,
    montoOferta: Number,
    fecha: String,
    idOfertante: String
}
