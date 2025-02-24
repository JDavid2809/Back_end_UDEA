import { DataSource } from "typeorm";
import { User } from "./models/User";

export const UdeaDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345",
    database: "UDEA_DATABASE",
    entities: [
        User
    ],
    synchronize: true,
  });