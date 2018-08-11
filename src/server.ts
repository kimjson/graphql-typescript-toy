import express from "express";
import graphqlHTTP from "express-graphql";
import { buildSchema } from "graphql";
import "reflect-metadata";
import { createConnection } from "typeorm";


createConnection().then(async connection => {}).catch(error => console.log(error));

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => {
    return "Hello World";
  },
};

const app = express();
app.use("/graphql", graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000);
console.log("Running a GraphQL API server at localhost:4000/graphql");