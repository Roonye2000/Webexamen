import { Request, Response } from "express";

import { Oferta } from "../models/index";
import { IOferta } from "../interfaces"

// Consultar las ofertas registradas
const obtenerOfertas = async (req: Request, res: Response) => {
    const { limite = 10, desde = 0 } = req.query;
    const [ total, ofertas ] : [ Number, IOferta[] ] = await Promise.all(
        [
            Oferta
                .countDocuments(),
            Oferta
                .find()
                .skip(Number(desde))
                .limit(Number(limite))
        ]
    )
    res.json(
        {
            total,
            ofertas
        }
    )
}

// Consultar una oferta por su id
const obtenerOferta = async (req: Request, res: Response) => {
    const { id } = req.params;
    const oferta:IOferta|null = await Oferta.findById(id);
    res.json(oferta);
}

// Registrar una oferta en la base de datos
const crearOferta = async (req: Request, res: Response) => {
    const { ...body } = req.body;
    const oferta = new Oferta(body);
    const nuevaOferta = await oferta.save();
    return res.status(201).json(nuevaOferta);
}

// Actualizar una oferta por su id
const actualizarOferta = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { ...body } = req.body;
    const ofertaModificada = await Oferta.findByIdAndUpdate(id, body, {new:true});
    res.json(ofertaModificada)
}

// Eliminar una oferta por su id
const eliminarOferta = async (req: Request, res: Response) => {
    const { id } = req.params;
    const ofertaEliminada = await Oferta.findByIdAndDelete(id)
    res.json(ofertaEliminada)
}

// Módulos a exportar
export {
    obtenerOfertas,
    obtenerOferta,
    crearOferta,
    actualizarOferta,
    eliminarOferta
}
