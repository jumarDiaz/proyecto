import { Request, Response, Application, Router } from "express";
import { EjemplarController } from "../controllers/ejemplar.controller";

export class EjemplarRoutes {
    public ejemplarController: EjemplarController =  new EjemplarController();

    public routes(app: Application): void {
        app.route("/ejemplar").get(this.ejemplarController.getAllEjemplar)
        app.route("/ejemplar/:id").get(this.ejemplarController.getOneEjemplar)
        app.route("/ejemplar").post(this.ejemplarController.createEjemplar)
        app.route("/ejemplar/:id").put(this.ejemplarController.updateEjemplar)
        app.route("/ejemplar/:id").delete(this.ejemplarController.deleteEjemplar)

    }
}