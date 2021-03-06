import { gql } from "apollo-server-express";

export const typeDefs = gql`
    type User {
        _id: ID!
        login: String!
        password: String!
    }
    type AuthData {
        token: String!
    }
    type Post {
        _id: ID!
        title: String!
        text: String!
        date: String!
        city: String!
        street: String!
    }
    type PostsResponse {
        posts: [Post!]!
        postCount: Int!
    }
    type Query {
        AllPosts(first: Int, skip: Int, search: String): PostsResponse!
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
