import { Post } from "../models/Post";
export const resolvers = {
    Query: {
        posts: () => Post.find(),
        hello: () => "hi"
    },
    Mutation: {
        createPost: async (_, { title, text, created, city, street }) => {
            const post = new Post({ title, text, created, city, street });
            await post.save();
            return post;
        }
    }
};
