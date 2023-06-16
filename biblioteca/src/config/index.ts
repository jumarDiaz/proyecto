import express, { Application } from 'express';
import morgan from 'morgan';
import { Routes } from "../routes/index";
var cors = require("cors"); // install en node y types

export class App {
    app: Application;
    public routePrv: Routes = new Routes();

    constructor(
        private port?: number | string
    ) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();

    }

    private routes() {
        this.routePrv.usuarioRoutes.routes(this.app)
        this.routePrv.prestarRoutes.routes(this.app)
        this.routePrv.libroRoutes.routes(this.app)
        this.routePrv.ejemplarRoutes.routes(this.app)
        this.routePrv.autorRoutes.routes(this.app)
    }

    private settings() {
        this.app.set('port', this.port || process.env.PORT || 4000);
    }
    
    private middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json()); // leer json raw
        this.app.use(express.urlencoded({ extended: false })); //leer json form
    }

   async listen() {
        await this.app.listen(this.app.get('port'));
        // await this.app.listen(this.port);
        // console.log('Server on port', this.port);
        console.log('Server on port', this.app.get('port'));
    }

}
