import { Post } from "../../models/Post";

export const resolvers = {
    Query: {
        posts: () => Post.find(),
        hello: () => "hi",
        post: id => Post.findOne(id)
    },
    Mutation: {
        createPost: async (_, { title, text, date, city, street }) => {
            const post = new Post({ title, text, date, city, street });
            await post.save();
            return post;
        }
    }
};
