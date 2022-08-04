import { Request, Response } from "express";

import { Subasta } from "../models/index";
import { ISubasta } from "../interfaces"

// Consultar las subastas registradas
const obtenerSubastas = async (req: Request, res: Response) => {
    const { limite = 10, desde = 0 } = req.query;
    const [ total, subastas ] : [ Number, ISubasta[] ] = await Promise.all(
        [
            Subasta
                .countDocuments(),
            Subasta
                .find()
                .skip(Number(desde))
                .limit(Number(limite))
        ]
    )
    res.json(
        {
            total,
            subastas
        }
    )
}

// Consultar una subasta por su id
const obtenerSubasta = async (req: Request, res: Response) => {
    const { id } = req.params;
    const subasta:ISubasta|null = await Subasta.findById(id);
    res.json(subasta);
}

// Registrar una subasta en la base de datos
const crearSubasta = async (req: Request, res: Response) => {
    const { ...body } = req.body;
    const subasta = new Subasta(body);
    const nuevaSubasta = await subasta.save();
    return res.status(201).json(nuevaSubasta);
}

// Actualizar una subasta por su id
const actualizarSubasta = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { ...body } = req.body;
    const subastaModificada = await Subasta.findByIdAndUpdate(id, body, {new:true});
    res.json(subastaModificada)
}

// Eliminar una subasta por su id
const eliminarSubasta = async (req: Request, res: Response) => {
    const { id } = req.params;
    const subastaEliminada = await Subasta.findByIdAndDelete(id)
    res.json(subastaEliminada)
}

// Módulos a exportar
export {
    obtenerSubastas,
    obtenerSubasta,
    crearSubasta,
    actualizarSubasta,
    eliminarSubasta
}
