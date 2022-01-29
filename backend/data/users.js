import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("test123", 10),
    isAdmin: true,
  },
  {
    name: "Chloé GRETTNER",
    email: "chloé@gmail.com",
    password: bcrypt.hashSync("test123", 10),
  },
  {
    name: "Aline GRETTNER",
    email: "aline@gmail.com",
    password: bcrypt.hashSync("test123", 10),
  },
];

export default users;
