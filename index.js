import express from "express";
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server-express"; //AuthenticationError
import { typeDefs } from "./graphql/schema/";
import { resolvers } from "./graphql/resolvers/";
// import jwt from "jsonwebtoken";
import bodyParser from "body-parser";

require("dotenv").config();

const startServer = async () => {
    const app = express();
    const path = "/graphql";
    const server = new ApolloServer({
        cors: false,
        typeDefs,
        resolvers
        // ,
        // context: async ({ req }) => {
        //     const token = req.headers.authorization || "";
        //     if (token) {
        //         try {
        //             return await jwt.verify(token, process.env.SECRET);
        //         } catch (e) {
        //             throw new AuthenticationError(
        //                 "Your session expired. Sign in again."
        //             );
        //         }
        //     }
        //     // const currentUser = await jwt.verify(token, process.env.SECRET);
        //     // req.currentUser = currentUser;
        //     // console.log(currentUser);
        //     // return currentUser;
        // }
    });
    server.applyMiddleware({ app, path, bodyParser });

    await mongoose
        .connect(process.env.MONGO_URI, {
            useNewUrlParser: true
        })
        .then(() => {
            console.log("DB Connected");
        })
        .catch(err => console.error(err));

    app.listen({ port: 4000 }, () => {
        console.log(`server runing on`);
    });
};

startServer();
