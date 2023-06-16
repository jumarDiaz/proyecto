import { Request, Response } from 'express';
import { Autor } from '../models/Autor';
import { Libro, LibroI } from '../models/Libro';

export class LibroController {
  public async getAllLibro(req: Request, res: Response) {
    try {
      const libros: LibroI[] = await Libro.findAll({
      });
  
      res.status(200).json({ libros });
    } catch (error) {
      res.status(500).json({ msg: 'Error Internal' });
    }
  }
  

  public async getOneLibro(req: Request, res: Response) {
    const { id: idParam } = req.params;

    try {
      const libro: LibroI | null = await Libro.findOne({
        where: {
          id: idParam,
        },
      });

      if (libro) {
        res.status(200).json(libro);
      } else {
        res.status(404).json({ msg: "El libro no existe" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Error Internal" });
    }
  }

  public async createLibro(req: Request, res: Response) {
    const { titulo, numero_pagina, editorial, ISBN } = req.body;

    try {
      const libro: LibroI = await Libro.create({
        titulo,
        numero_pagina,
        editorial,
        ISBN,
      });

      res.status(200).json({ libro });
    } catch (error) {
      res.status(500).json({ msg: "Error Internal" });
    }
  }

  public async updateLibro(req: Request, res: Response) {
    const { id: pk } = req.params;
    const { titulo, numero_pagina, editorial, ISBN } = req.body;

    try {
      const libroExist: LibroI | null = await Libro.findByPk(pk);

      if (!libroExist) {
        return res.status(404).json({ msg: "El Libro no existe" });
      }

      await Libro.update(
        { titulo, numero_pagina, editorial, ISBN },
        {
          where: { id: pk },
        }
      );

      const libro: LibroI | null = await Libro.findByPk(pk);
      if (libro) {
        res.status(200).json({ libro });
      } else {
        res.status(404).json({ msg: "El libro no existe" });
      }
    } catch (error) {
      res.status(500).json({ msg: "Error Internal" });
    }
  }

}
