import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Post {
        id: ID!
        title: String!
        text: String!
        date: String!
        city: String!
        street: String!
    }
    type Query {
        posts: [Post!]!
        hello: String
        post(id: String!): Post!
    }
    type Mutation {
        createPost(
            title: String!
            text: String!
            date: String!
            city: String!
            street: String!
        ): Post!
    }
`;