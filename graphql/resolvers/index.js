import { Post } from "../../models/Post";
import { User } from "../../models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const resolvers = {
    Query: {
        getPost: (obj, args, context, info) => Post.findById(args._id),
        posts: () => Post.find(),
        hello: () => "hi",
        getUser: (obj, args, context, info) => User.findById(args._id)
    },
    Mutation: {
        createPost: async (_, { title, text, date, city, street }) => {
            const post = new Post({ title, text, date, city, street });
            await post.save();
            return post;
        },
        createUser: async (_, { login, password }) => {
            try {
                const existingUser = await User.findOne({ login });
                if (existingUser) {
                    throw new Error("User already exist");
                }
                const hashedPassword = await bcrypt.hash(password, 12);
                const user = new User({
                    login: login,
                    password: hashedPassword
                });
                await user.save();
                return user;
            } catch (err) {
                throw err;
            }
        },
        signIn: async (_, { login, password }) => {
            const user = await User.findOne({ login });
            if (!user) {
                throw new Error("User does not exist!");
            }
            const isEqual = await bcrypt.compare(password, user.password);
            if (!isEqual) {
                throw new Error("Password is incorrect!");
            }
            const token = jwt.sign(
                { userId: user.id, login: user.login },
                process.env.SECRET,
                {
                    expiresIn: "1h"
                }
            );
            return {
                userId: user.id,
                login: user.login,
                token: token,
                tokenExp: 1
            };
        }
    }
};
