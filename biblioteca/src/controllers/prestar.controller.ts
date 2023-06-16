import {  Request, Response } from 'express';
import { where } from 'sequelize/types';
import { Usuario } from '../models/Usuario';
import { Prestar, PrestarI } from '../models/Prestar';

export class PrestarController {

    public async getAllPrestar(req: Request, res:Response){
        try {
            const prestar: PrestarI[] = await Prestar.findAll(
                {
                    include:[
                        {
                            model: Usuario,
                            as:'usuario',
                            attributes:['nombre','direccion','telefono']
                        },

                    ]
                }   
            ) // select * from clientes;
            res.status(200).json({prestar})
        } catch (error) {

        }
    }
    

    public async getOnePrestar(req: Request, res:Response){
        const { id: idParam } = req.params

        try {
            const prestar:PrestarI | null = await Prestar.findOne(
                {
                    where: { 
                        id: idParam,
                    }
                }
            )
            if (prestar){
                res.status(200).json(prestar)
            } else return  res.status(300).json({msg: "El prestamo no existe"})

        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }


    public async createPrestar(req: Request, res:Response){
        const {
            fecha_dev,
            fecha_pres,
            usuarioId

        } = req.body;

        try {
            let body:PrestarI = {
                fecha_dev,
                fecha_pres,
                usuarioId
            } 

            const prestar:PrestarI = await Prestar.create({...body});
            res.status(200).json({prestar});

        } catch (error) {

        }

    }

    public async updatePrestar(req: Request, res:Response){
        const { id:pk } = req.params;

        const {
            id,
            fecha_dev,
            fecha_pres,
            usuarioId
        }= req.body

        try {
            let body:PrestarI = {
                fecha_dev,
                fecha_pres,
                usuarioId
            } 

            const prestarExist: PrestarI | null = await Prestar.findByPk(pk);


            if(!prestarExist) return res.status(500).json({msg:"El Prestamo No existe"})
            await Prestar.update(
                body,{
                    where: {id:pk}
                }
            );



        } catch (error) {

        }
        const prestar: PrestarI | null = await Prestar.findByPk(pk);
        if(prestar) return res.status(200).json({prestar})

    }

    public async deletePrestar(req: Request, res:Response){
        const { id:pk } = req.params;


        try {
            const prestarExist: PrestarI | null = await Prestar.findByPk(pk);
            if(!prestarExist) return res.status(500).json({msg:"El Prestamo No existe"})
            await Prestar.destroy(
                {
                    where: {id: pk}
                }
            )
            res.status(200).json({msg:"Prestamo Eliminado"})
        } catch (error) {
            res.status(200).json({msg:"Error internal"})
        }

    } 
}
