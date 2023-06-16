import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Autor } from "./Autor";

export class Libro extends Model {
  public titulo!: string;
  public numero_pagina!: number;
  public editorial!: string;
  public ISBN!: string;
}

export interface LibroI {
  titulo: string;
  numero_pagina: number;
  editorial: string;
  ISBN: string;
}

Libro.init(
  {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numero_pagina: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    editorial: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ISBN: {
      type: DataTypes.STRING,
      allowNull: false
    },

  },
  {
    tableName: "libros",
    sequelize: database,
    timestamps: true
  }
);

Libro.belongsToMany(Autor, { through: 'AutorLibro',});

Autor.belongsToMany(Libro, { through: 'AutorLibro',});
