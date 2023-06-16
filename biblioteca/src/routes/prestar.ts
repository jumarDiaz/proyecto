import { Request, Response, Application, Router } from "express";
import { PrestarController } from "../controllers/prestar.controller";
export class PrestarRoutes {
    public prestarController: PrestarController =  new PrestarController();

    public routes(app: Application): void {
        app.route("/prestar").get(this.prestarController.getAllPrestar)
        app.route("/prestar/:id").get(this.prestarController.getOnePrestar)
        app.route("/prestar").post(this.prestarController.createPrestar)
        app.route("/prestar/:id").put(this.prestarController.updatePrestar)
        app.route("/prestar/:id").delete(this.prestarController.deletePrestar)

    }
}