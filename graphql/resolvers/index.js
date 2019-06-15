import { Post } from "../../models/Post";
import { User } from "../../models/User";

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
            const user = new User({ login, password });
            await user.save();
            return user;
        }
    }
};
