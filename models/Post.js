import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: String,
        default: Date.now()
    },
    city: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    }
});
export const Post = mongoose.model("Post", postSchema);

export function validatePost(post) {
    const schema = {
        title: Joi.string()
            .min(3)
            .max(50)
            .required()
    };
    return Joi.validate(post, schema);
}
