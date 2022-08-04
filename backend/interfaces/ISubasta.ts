import Schema from 'mongoose';

export interface ISubasta {
    fecha: String,
    idDueño: String,
    descripcionBien: String,
    montoInicial: Number,
    validoHasta: String
}
