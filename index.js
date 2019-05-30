import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./schema/typeDefs";
import { resolvers } from "./schema/resolvers";
import post from "./routers/post";
require("dotenv").config();

const startServer = async () => {
    const app = express();
    const allowedOrigins = ["http://localhost:3000"];

    app.use(
        cors({
            origin: function(origin, callback) {
                if (!origin) return callback(null, true);
                if (allowedOrigins.indexOf(origin) === -1) {
                    var msg =
                        "The CORS policy for this site does not " +
                        "allow access from the specified Origin.";
                    return callback(new Error(msg), false);
                }
                return callback(null, true);
            }
        })
    );

    app.use(express.json());
    app.use("/api/posts", post);
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    server.applyMiddleware({ app });

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
