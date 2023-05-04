import Jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const requireSignIn = async (req, res, next) => {
    try {
        const decode = Jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decode;
        next()
    } catch (error) {
        console.log(error);
    }
}

export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id)

        if(user.role !== 1){
            return res.status(401).send({
                success: false,
                message: "Acceso no autorizado"
            })
        }else{
            next()
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error en el middleware de administracion",
            error
        })
    }
}