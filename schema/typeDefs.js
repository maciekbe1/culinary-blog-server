import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type Post {
        id: ID!
        title: String!
        text: String!
        created: String!
        city: String!
        street: String!
    }
    type Query {
        posts: [Post!]!
        hello: String
    }
    type Mutation {
        createPost(
            title: String!
            text: String!
            created: String!
            city: String!
            street: String!
        ): Post!
    }
`;
