import { User } from "../models/user.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.json({ users });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "error del servidor 💻" })
    }
};

export const saveUser = async (req, res) => {
    try {
        const  { nombre, apellido, edad, sexo, avatar, email, telefono, pais, ciudad } = req.body.body;
        let user = new User({nombre, apellido, edad, sexo, avatar, email, telefono, pais, ciudad });
        await user.save()

        return res.status(201).json({ message: "Usuario guardado" });
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: "Ya existe el usuario 😐" });
        }
        return res.status(500).json({ error: "Error de servidor 💻"});
    }
}