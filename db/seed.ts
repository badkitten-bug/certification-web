import { Category, Todo, User, db } from "astro:db";

export default async function seed() {
  await db.insert(User).values([
    {
      id: "sof@fosx637",
      email: "pepito@gmail.com",
      username: "pepito",
    },
    {
      id: "xx33@@ds",
      email: "juan@gmail.com",
      username: "juan",
    },
  ]);
  await db.insert(Category).values([
    {
      id: "ppsfsf@",
      label: "software",
    },
    {
      id: "ooopd@d",
      label: "marketing",
    },
  ]);

  await db.insert(Todo).values([
    {
      id: "ggtt2@",
      title: "Crear funcion de fetch",
      description: "Crear una funcion que adapte las fechas",
      user_id: "sof@fosx637",
      category_id: "ppsfsf@",
    },
  ]);
  await db.insert(Todo).values([
    {
      id: "wweep@",
      title: "Crear anuncio",
      description: "Crear anuncio del producto",
      user_id: "xx33@@ds",
      category_id: "ooopd@d",
    },
  ]);
}
