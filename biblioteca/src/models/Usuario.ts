import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";

export class Usuario extends Model {
  public nombre!: string;
  public apellido!: string;
  public direccion!: string;
  public telefono!: string;

}

export interface UsuarioI {
    nombre: string;
    apellido: string;
    direccion: string;
    telefono: string;
}

Usuario.init(
  {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
      },
    apellido: {
        type: DataTypes.STRING,
        allowNull: false
      },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
      },
  },
  {
    tableName: "usuarios",
    sequelize: database,
    timestamps: true
  }
);
