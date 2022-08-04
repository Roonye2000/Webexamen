import express, { Router, Express } from "express";
import cors from 'cors';

import { router as peticiones } from './routes/peticion'

import dotenv from 'dotenv';
dotenv.config()

class Server {
    app: Router;
    router: Router;
    port:Number;
    paths: {[key:string] : string};
    private _express: Express;
    constructor(){
        this.app = Router();
        this.router = Router();
        this.port= Number(process.env["PORT"]);
        this.paths = {
            peticion: '/peticion'
        }
        this.middleware();
        this.routes();
        this.router.use('/api', this.app);
        this._express = express().use(this.router);
    }
    private middleware(){
        this.app.use(cors());
        this.app.use(express.json());
    }
    private routes(){
        this.app.use(this.paths.peticion, peticiones);
    }
    listen(){
        this._express.listen(this.port, () => {
            console.log(`Server on port ${this.port}`);
        })
    }
}

export { Server }
