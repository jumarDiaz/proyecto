import { Request, Response, Application, Router } from "express";
import { AutorController } from "../controllers/autor.controller";

export class AutorRoutes {
    public autorController: AutorController =  new AutorController();

    public routes(app: Application): void {
        app.route("/autor").get(this.autorController.getAllAutor)
        app.route("/autor/:id").get(this.autorController.getOneAutor)
        app.route("/autor").post(this.autorController.createAutor)
        app.route("/autor/:id").put(this.autorController.updateAutor)
        app.route("/autor/:id").delete(this.autorController.deleteAutor)

    }
}