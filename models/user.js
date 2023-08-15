import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true,
    },
    apellido:{
        type: String,
        required: true,
    },
    edad:{
        type: Number,
        required: true,
    },
    sexo:{
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    telefono:{
        type: String,
        required: true,
    },
    pais:{
        type: String,
        required: true,
    },
    ciudad:{
        type: String,
        required: true,
    },
},
{
    timestamps:true
}
);

export const User = mongoose.model("User", userSchema);