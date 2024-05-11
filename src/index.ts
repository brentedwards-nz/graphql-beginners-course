import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema";
import { root } from "./schema/resolvers";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const url = process.env.DATABASE_URL || "";

const connectOptions: ConnectOptions = {};

mongoose
  .connect(url, connectOptions)
  .then(() => {
    console.log("Mongo connected");
  })
  .catch((err) => {
    console.log("Error:", err);
  });

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to my GraphQL app");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
