import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

export const createCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(401).send({ message: "El nombre es requerido" });
        }

        const existingCategory = await categoryModel.findOne({ name });
        if (existingCategory) {
            return res.status(200).send({
                success: true,
                message: "La categoria ya existe",
            });
        }

        const category = await new categoryModel({
            name,
            slug: slugify(name),
        }).save();

        res.status(201).send({
            success: true,
            message: "Categoria creada",
            category,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error en las categorias",
            error,
        });
    }
};

export const updateCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;
        const category = await categoryModel.findByIdAndUpdate(
            id,
            { name, slug: slugify(name) },
            { new: true }
        );

        res.status(200).send({
            success: true,
            message: "Categoria actualizada",
            category,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error al actualizar categiria",
            error,
        });
    }
};


export const categoryController = async (req, res) => {
    try {
        const category = await categoryModel.find({});

        res.status(200).send({
            success: true,
            message: "Categoria cargada",
            category,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error al traer la data",
            error,
        });
    }
}

export const singleCategoryController = async (req, res) => {
    try {
        const category = await categoryModel.findOne({slug: req.params.slug});

        res.status(200).send({
            success: true,
            message: "Categoria unica cargada exitosamente",
            category,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error al traer la data",
            error,
        });
    }
}

export const deleteCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        await categoryModel.findByIdAndDelete(id);

        res.status(200).send({
            success: true,
            message: "Categoria eliminada exitosamente",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error al borrar la categoria",
            error,
        });
    }
}