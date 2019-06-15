import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    password: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    }
})

export const User = mongoose.model("User", userSchema);

export function validateUser(user) {
    const schema = {
        login: Joi.string()
            .min(3)
            .max(50)
            .required(),
        password: Joi.string()
            .min(3)
            .max(50)
            .required()
    };
    return Joi.validate(user, schema);
}