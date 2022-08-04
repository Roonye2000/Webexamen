import { Request, Response } from "express";

let Peticion = []

import { IPeticion } from "../interfaces"

// Consultar las peticiones registradas
const obtenerPeticiones = async (req: Request, res: Response) => {
    const [total, peticiones] : [Number, IPeticion[]] = await Promise.all(
        [
            Peticion.length,
            Peticion
        ]
    )
    res.json({total, peticiones})
}

// Consultar una petición por su id
const obtenerPeticion = (req: Request, res: Response) => {
    const { id } = req.params;
    const peticion:IPeticion|null = Peticion.find(peticionx => peticionx.id == id)
    res.json(peticion);
}

//  Registrar una petición en la base de datos
const crearPeticion = (req: Request, res: Response) => {
    const { ...body } = req.body;
    body.nota = Number(body.nota); // Convertir la nota a int
    body.estado = Number(body.estado); // Convertir la nota a int
    Peticion.push(body);
    const nuevaPeticion = Peticion.find(peticionx => peticionx.id == body.id);
    return res.status(201).json(nuevaPeticion);
}

// Actualizar una petición por su id
const actualizarPeticion = (req: Request, res: Response) => {
    const { id } = req.params;
    const { ...body } = req.body;
    body.nota = Number(body.nota); // Convertir la nota a int
    body.estado = Number(body.estado); // Convertir la nota a int
    const peticionIndex = Peticion.findIndex(peticionx => peticionx.id == id);
    Peticion[peticionIndex] = body;
    res.json(Peticion[peticionIndex])
}

// Eliminar una peticion por su id
const eliminarPeticion = (req: Request, res: Response) => {
    const { id } = req.params;
    const nuevasPeticiones = Peticion.filter(peticionx => peticionx.id != id);
    Peticion = nuevasPeticiones;
    res.json(nuevasPeticiones)
}

export {
    obtenerPeticiones,
    obtenerPeticion,
    crearPeticion,
    actualizarPeticion,
    eliminarPeticion
}
