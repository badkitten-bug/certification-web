import { defineDb, defineTable, column } from "astro:db";

const User = defineTable({
  columns: {
    id: column.text({ primaryKey: true, optional: false, unique: true }),
    username: column.text({ unique: true, optional: false }),
    email: column.text({ unique: true, optional: false }),
  },
});

const Todo = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    title: column.text(),
    description: column.text(),
    user_id: column.text({ references: () => User.columns.id }),
    category_id: column.text({ references: () => Category.columns.id }),
  },
});

const Category = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    label: column.text({ unique: true }),
  },
});

export default defineDb({
  tables: {
    User,
    Todo,
    Category,
  },
});
