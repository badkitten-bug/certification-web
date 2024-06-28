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

const Certified = defineTable({
  columns:{
    id: column.text({primaryKey: true}),
    name: column.text({unique: true}),
    course: column.text({unique: true}),
    title: column.text({unique: true}),
    branch: column.text({unique: true}),
    mode: column.text({unique: true}),
    day: column.text({unique: true}),
    month: column.text({unique: true}),
    year: column.text({unique: true}),
  }
})

export default defineDb({
  tables: {
    User,
    Todo,
    Category,
    Certified,
  },
});
