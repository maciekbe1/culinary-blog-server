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
    type User {
        _id: ID!
        login: String!
        password: String!
    }
    type AuthData {
        userId: ID!
        login: String!
        token: String!
        tokenExp: Int!
    }
    type Query {
        posts: [Post!]!
        hello: String
        getPost(_id: ID!): Post!
        getUser(_id: ID!): User!
    }
    type Mutation {
        createPost(
            title: String!
            text: String!
            date: String!
            city: String!
            street: String!
        ): Post!
        createUser(login: String!, password: String!): User!
        signIn(login: String!, password: String!): AuthData!
    }
`;
