import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Post {
        _id: ID!
        title: String!
        text: String!
        date: String!
        city: String!
        street: String!
    }
    type Query {
        posts: [Post!]!
        hello: String
        getPost(_id: ID!): Post!
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
