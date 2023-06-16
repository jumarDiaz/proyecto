import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Usuario } from "./Usuario";
import { Ejemplar } from "./Ejemplar";
export class Prestar extends Model {
  public fecha_dev!: Date;
  public fecha_pres!: Date;
  public usuarioId!: number;
}

export interface PrestarI {
    fecha_dev: Date;
    fecha_pres: Date;
    usuarioId: number;
}

Prestar.init(
  {
    fecha_dev: {
        type: DataTypes.DATE,
        allowNull: false
      },
      fecha_pres: {
        type: DataTypes.DATE,
        allowNull: false,
      },
        usuarioId:{
          type: DataTypes.INTEGER,
          allowNull: false,
          references:{model: Usuario, key:'id'}
        }
  },
  {
    tableName: "prestado",
    sequelize: database,
    timestamps: true
  }
);

Prestar.belongsTo(Usuario,{foreignKey: 'usuarioId', as: 'usuario'});
Usuario.hasMany(Prestar,{foreignKey:'usuarioId'});


Prestar.belongsTo(Ejemplar);
Ejemplar.hasMany(Prestar);