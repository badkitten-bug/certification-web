import { User, db } from "astro:db";

export default async function seed() {
  await db.insert(User).values([
    {
      id: "1",
      email: "pepo@gmail.com",
      username: "pepo",
    },
    {
      id: "2",
      email: "edson@gmail.com",
      username: "edson",
    },
  ]);
}
