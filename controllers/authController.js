import userModel from "../models/userModel.js"
import { comparePassword, hashPassword } from './../helpers/authHelper.js'
import Jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
    try {
        const { name, email, password, phone, address, answer } = req.body;

        if (!name) {
            return res.send({ message: "Name is required" })
        }

        if (!email) {
            return res.send({ message: "Email is required" })
        }

        if (!password) {
            return res.send({ message: "Password is required" })
        }

        if (!phone) {
            return res.send({ message: "Phone is required" })
        }

        if (!address) {
            return res.send({ message: "Address is required" })
        }

        if (!answer) {
            return res.send({ message: "Answer is required" })
        }

        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(200).send({
                success: false,
                message: 'Ya se encuentra registrado, favor de iniciar sesion'
            })
        }

        const hashedPassword = await hashPassword(password);

        const user = await new userModel({ name, email, phone, address, password: hashedPassword, answer }).save();

        res.status(200).send({
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
        const { email, password } = req.body;
        //validation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                message: "Invalid email or password",
            });
        }
        //check user
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email is not registerd",
            });
        }
        const match = await comparePassword(password, user.password);
        if (!match) {
            return res.status(200).send({
                success: false,
                message: "Invalid Password",
            });
        }
        //token
        const token = await Jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });
        res.status(200).send({
            success: true,
            message: "login successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
                role: user.role,
            },
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in login",
            error,
        });
    }
};

export const forgotPasswordController = async (req, res) => {
    try {
        const { email, answer, newPassword } = req.body

        if (!email) {
            return res.send({ message: "El correo es requerido" })
        }

        if (!answer) {
            return res.send({ message: "Se nesecita la palabra secreta" })
        }

        if (!newPassword) {
            return res.send({ message: "La contraseña es requerida" })
        }

        const user = await userModel.findOne({ email, answer })

        if(!user){
            return res.status(404).send({
                success: false,
                message: "Email o respuesta incorrecta"
            })
        }

        const hashed = await hashPassword(newPassword)
        await userModel.findByIdAndUpdate(user._id, { password: hashed })
        res.status(200).send({
            success: true,
            message: "Contraseña actualizada"
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Algo salio mal",
            error,
        });
    }
}