import express, { Express, NextFunction } from "express";
import dotenv from "dotenv";
import mongoose, { ConnectOptions } from "mongoose";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema/schema";
import authMiddleware from "./auth";
import authRoutes from "./routes/authRoutes";

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

app.get("/", (req, res) => {
  res.redirect('/graphql');
});

const loggingMiddleware = (_: any, __: any, next: NextFunction) => {
  next();
};

app.use(express.json());

app.use(loggingMiddleware);

app.use("/api/auth", authRoutes);
const graphqlHTTPMiddleWare = graphqlHTTP(
  async (request: any, response, graphQLParams) => ({
    schema: schema,
    context: {
      token: request?.token,
      user: request?.user,
    },
    graphiql: { headerEditorEnabled: true },
  })
);

app.use(authMiddleware);

app.use("/graphql", graphqlHTTPMiddleWare);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
