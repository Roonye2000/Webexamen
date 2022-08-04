export interface IPeticion {
    id: String,
    fecha: String,
    idUsuario: String,
    asignatura: String,
    nota: Number,
    estado: Number
}

/*
    Estado de la petición:
    (1) Pendiente
    (2) Aceptado
    (3) Rechazado
    (4) Exonerado
*/
