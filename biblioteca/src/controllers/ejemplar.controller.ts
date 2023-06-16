import {  Request, Response } from 'express';
import { where } from 'sequelize/types';
import { Ejemplar, EjemplarI } from '../models/Ejemplar';
import { Libro } from '../models/Libro';

export class EjemplarController {

    public async getAllEjemplar(req: Request, res:Response){
        try {
            const ejemplar: EjemplarI[] = await Ejemplar.findAll(
                {
                    include:[
                        {
                            model: Libro,
                            as:'libro',
                            attributes:['titulo']
                        },

                    ]
                }
            ) // select * from clientes;
            res.status(200).json({ejemplar})
        } catch (error) {

        }
    }
    

    public async getOneEjemplar(req: Request, res:Response){
        const { id: idParam } = req.params

        try {
            const ejemplar:EjemplarI | null = await Ejemplar.findOne(
                {
                    where: { 
                        id: idParam,
                    }
                }
            )
            if (ejemplar){
                res.status(200).json(ejemplar)
            } else return  res.status(300).json({msg: "El ejemplar no existe"})

        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }


    public async createEjemplar(req: Request, res:Response){
        const {
            localizacion,
            libroId
        } = req.body;

        try {
            let body:EjemplarI = {
                localizacion,
                libroId
            } 

            const ejemplar:EjemplarI = await Ejemplar.create({...body});
            res.status(200).json({ejemplar});

        } catch (error) {

        }

    }

    public async updateEjemplar(req: Request, res:Response){
        const { id:pk } = req.params;

        const {
            id,
            localizacion,
            libroId
        }= req.body

        try {
            let body:EjemplarI = {
                localizacion,
                libroId
            } 

            const ejemplarExist: EjemplarI | null = await Ejemplar.findByPk(pk);

            if(!ejemplarExist) return res.status(500).json({msg:"El Ejemplar No existe"})
            await Ejemplar.update(
                body,{
                    where: {id:pk}
                }
            );



        } catch (error) {

        }
        const ejemplar: EjemplarI | null = await Ejemplar.findByPk(pk);
        if(ejemplar) return res.status(200).json({ejemplar})

    }

    public async deleteEjemplar(req: Request, res:Response){
        const { id:pk } = req.params;


        try {
            const ejemplarExist: EjemplarI | null = await Ejemplar.findByPk(pk);
            if(!ejemplarExist) return res.status(500).json({msg:"El Ejemplar No existe"})
            await Ejemplar.destroy(
                {
                    where: {id: pk}
                }
            )
            res.status(200).json({msg:"Ejemplar Eliminado"})
        } catch (error) {
            res.status(200).json({msg:"Error internal"})
        }

    } 
}
