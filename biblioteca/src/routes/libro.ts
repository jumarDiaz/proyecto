import { Request, Response, Application, Router } from "express";
import { LibroController } from "../controllers/libro.controller";
export class LibroRoutes {
    public libroController: LibroController =  new LibroController();

    public routes(app: Application): void {
        app.route("/libro").get(this.libroController.getAllLibro)
        app.route("libro:id").get(this.libroController.getOneLibro)
        app.route("/libro").get(this.libroController.createLibro)
        app.route("libro:id").get(this.libroController.updateLibro)
    }
}