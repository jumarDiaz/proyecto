import { UsuarioRoutes } from "./usuario";
import { PrestarRoutes } from "./prestar";
import { LibroRoutes } from "./libro";
import { EjemplarRoutes } from "./ejemplar";
import { AutorRoutes } from "./autor";



export class Routes {
    public usuarioRoutes: UsuarioRoutes = new UsuarioRoutes();
    public prestarRoutes: PrestarRoutes = new PrestarRoutes();
    public libroRoutes: LibroRoutes = new LibroRoutes();
    public ejemplarRoutes: EjemplarRoutes = new EjemplarRoutes();
    public autorRoutes: AutorRoutes = new AutorRoutes();

}
