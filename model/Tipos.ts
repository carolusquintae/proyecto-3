import { ImageSourcePropType } from "react-native";

type Empleado = {
  nombre: string,
  puesto: string,
  opiniones: number,
  estrellas: number,
  foto: ImageSourcePropType
};

type Departamento = {
  titulo: string,
  personal: Empleado
};

const EMPRESA = require("./staff.json");

export { Empleado, Departamento, EMPRESA };