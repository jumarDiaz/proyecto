import {  Request, Response } from 'express';
import { where } from 'sequelize/types';

import { Usuario, UsuarioI } from '../models/Usuario';

export class UsuarioController {

    public async getAllUsuario(req: Request, res:Response){
        try {
            const usuario: UsuarioI[] = await Usuario.findAll(
                {
                    
                }
            )
            res.status(200).json({usuario})
        } catch (error) {

        }
    }


    public async getOneUsuario(req: Request, res:Response){
        const { id: idParam } = req.params

        try {
            const usuario:UsuarioI | null = await Usuario.findOne(
                {
                    where: { 
                        id: idParam,
                    }
                }
            )
            if (usuario){
                res.status(200).json({usuario})
            } else return  res.status(300).json({msg: "El usuario no existe"})

        } catch (error) {
            res.status(500).json({msg: "Error Internal"})
        }
    }


    public async createUsuario(req: Request, res:Response){
        const {
            nombre,
            apellido,
            direccion,
            telefono
        } = req.body;

        try {
            let body:UsuarioI = {
                nombre,
                apellido,
                direccion,
                telefono
            } 

            const usuario:UsuarioI = await Usuario.create({...body});
            res.status(200).json({usuario});

        } catch (error) {

        }

    }

    public async updateUsuario(req: Request, res:Response){
        const { id:pk } = req.params;

        const {
            id,
            nombre,
            apellido,
            direccion,
            telefono
        }= req.body

        try {
            let body:UsuarioI = {
                nombre,
                apellido,
                direccion,
                telefono
            } 

            const usuarioExist: UsuarioI | null = await Usuario.findByPk(pk);
            // const userExist: UsuarioI | null = await Usuario.findOne(
            //     {
            //         where: { id: pk}
            //     }
            // );

            if(!usuarioExist) return res.status(500).json({msg:"El Usuario No existe"})
            await Usuario.update(
                body,{
                    where: {id:pk}
                }
            );  // select update from usuarios where id=pk



        } catch (error) {

        }
        const usuario: UsuarioI | null = await Usuario.findByPk(pk);
        if(usuario) return res.status(200).json({usuario})

    }

    public async deleteUsuario(req: Request, res:Response){
        const { id:pk } = req.params;


        try {
            const usuarioExist: UsuarioI | null = await Usuario.findByPk(pk);
            if(!usuarioExist) return res.status(500).json({msg:"El Usuario No existe"})
            await Usuario.destroy(
                {
                    where: {id: pk}
                }
            )
            res.status(200).json({msg:"Usuario Eliminado"})
        } catch (error) {
            res.status(200).json({msg:"Error internal"})
        }

    } 


}
