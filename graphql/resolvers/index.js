import { Post } from "../../models/Post";

export const resolvers = {
    Query: {
        getPost: (obj, args, context, info) => Post.findById(args._id),
        posts: () => Post.find(),
        hello: () => "hi"
    },
    Mutation: {
        createPost: async (_, { title, text, date, city, street }) => {
            const post = new Post({ title, text, date, city, street });
            await post.save();
            return post;
        }
    }
};
