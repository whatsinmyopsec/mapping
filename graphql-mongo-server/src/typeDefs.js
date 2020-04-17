import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String!
    ips: [Ip!]!
  }
  type Ip {
    id: ID!
    name: String!
  }
  type Mutation {
    createIp(name: String!): Ip!
  }
`;
