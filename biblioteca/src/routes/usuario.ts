import { Request, Response, Application, Router } from "express";
import { UsuarioController } from '../controllers/usuario.controller';

export class UsuarioRoutes {
    public usuarioController: UsuarioController =  new UsuarioController();

    public routes(app: Application): void {
        app.route("/usuario").get(this.usuarioController.getAllUsuario)
        app.route("/usuario/:id").get(this.usuarioController.getOneUsuario)
        app.route("/usuario").post(this.usuarioController.createUsuario)
        app.route("/usuario/:id").put(this.usuarioController.updateUsuario)
        app.route("/usuario/:id").delete(this.usuarioController.deleteUsuario)

    }
}


