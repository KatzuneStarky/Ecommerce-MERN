import userModel from "../models/userModel.js"
import { comparePassword, hashPassword } from './../helpers/authHelper.js'
import Jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body;

        if (!name) {
            return res.send({ error: "Name is required" })
        }

        if (!email) {
            return res.send({ error: "Email is required" })
        }

        if (!password) {
            return res.send({ error: "Password is required" })
        }

        if (!phone) {
            return res.send({ error: "Phone is required" })
        }

        if (!address) {
            return res.send({ error: "Address is required" })
        }

        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(200).send({
                success: true,
                message: 'Ya se encuentra registrado, favor de iniciar sesion'
            })
        }

        const hashedPassword = await hashPassword(password);

        const user = await new userModel({ name, email, phone, address, password: hashedPassword }).save();

        res.status(201).send({
            success: true,
            message: 'Usuario registrado!!',
            user
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error al registrarse",
            error
        })
    }
}

export const loginController = async (req, res) => {
    try {

        const { email, password } = req.body

        if (!email || !password) {
            res.status(404).send({
                success: false,
                message: 'Email o contraseña incorrectas'
            })
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: 'Correo proporcionado inexistente'
            })
        }

        const match = await comparePassword(password, user.password)
        if (!match) {
            return res.status(200).send({
                success: false,
                message: 'Contraseña invalida'
            })
        }

        const token = await Jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '7d'
        })

        return res.status(200).send({
            success: true,
            message: 'Inicio de sesion completado',
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address
            },
            token
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error al iniciar sesion",
            error
        })
    }
}