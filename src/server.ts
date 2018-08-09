import { graphql, buildSchema } from "graphql";

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

graphql(schema, "{ hello }", root).then(response => {
  console.log(response);
});