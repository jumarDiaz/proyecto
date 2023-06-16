import { Model, DataTypes } from "sequelize";
import { database } from "../database/db";
import { Libro } from "./Libro";
export class Ejemplar extends Model {
  public localizacion!: string;
  public libroId!: number;
}

export interface EjemplarI {
    localizacion: string;
    libroId: number;
}

Ejemplar.init(
  {
    localizacion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      libroId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {model:Libro,key:'id'}
      },
      
  },
  {
    tableName: "ejemplares",
    sequelize: database,
    timestamps: true
  }
);


Ejemplar.belongsTo(Libro,{foreignKey:'libroId',as:'libro'});
Libro.hasMany(Ejemplar,{foreignKey:'libroId'});