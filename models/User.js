import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

export const User = mongoose.model("User", userSchema);

export function validateUser(user) {
    const schema = {
        login: Joi.string().required(),
        password: Joi.string().required()
    };
    return Joi.validate(user, schema);
}
