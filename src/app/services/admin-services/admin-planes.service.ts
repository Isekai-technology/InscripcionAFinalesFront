// datos.service.ts (o fake-data.ts)
export interface Plan {
    nombre: string;
    carrera: string;
    materias: string[]; // Lista de materias asociadas
  }
  
  export const Planes: Plan[] = [
    {
      nombre: "ASDGF",
      carrera: "Analista",
      materias: ["Algoritmos", "Algebra"],
    },
    {
      nombre: "YDSYH",
      carrera: "Publicidad",
      materias: ["TeoriadelColor", "Excelbasico"],
    },
  ];
  