import slugify from "slugify";
import productModel from "../models/productModel.js";
import fs from "fs";

export const createProductController = async (req, res) => {
    try {
        const { name, description, price, category, quantity, shipping } =
            req.fields;
        const { photo } = req.files;
        //alidation
        switch (true) {
            case !name:
                return res.status(500).send({ error: "Name is Required" });
            case !description:
                return res.status(500).send({ error: "Description is Required" });
            case !price:
                return res.status(500).send({ error: "Price is Required" });
            case !category:
                return res.status(500).send({ error: "Category is Required" });
            case !quantity:
                return res.status(500).send({ error: "Quantity is Required" });
            case photo && photo.size > 6000000:
                return res
                    .status(500)
                    .send({ error: "photo is Required and should be less then 6mb" });
        }

        const products = new productModel({ ...req.fields, slug: slugify(name) });
        if (photo) {
            products.photo.data = fs.readFileSync(photo.path);
            products.photo.contentType = photo.type;
        }
        await products.save();
        res.status(201).send({
            success: true,
            message: "Product Created Successfully",
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            error,
            message: "Error in crearing product",
        });
    }
};

export const getProductController = async (req, res) => {
    try {
        const products = await productModel
            .find({})
            .populate("category")
            .select("-photo")
            .limit(12)
            .sort({ createdAt: -1 });
        res.status(200).send({
            success: true,
            counTotal: products.length,
            message: "ALlProducts ",
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Erorr in getting products",
            error: error.message,
        });
    }
};

export const getSingleProductController = async (req, res) => {
    try {
        const product = await productModel
            .findOne({ slug: req.params.slug })
            .select("-photo")
            .populate("category");

        res.status(200).send({
            success: true,
            message: "Producto cargado",
            product,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error al traer la data",
            error,
        });
    }
};

export const productPhotoController = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.pid).select("photo");

        if (product.photo.data) {
            res.set("Content-type", product.photo.contentType);
            res.status(200).send(product.photo.data);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error al cargar la foto",
            error,
        });
    }
};

export const deleteProductController = async (req, res) => {
    try {
        const product = await productModel
            .findByIdAndDelete(req.params.pid)
            .select("-photo");

        res.status(200).send({
            success: true,
            message: "Producto eliminado",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error al eliminar el producto",
            error,
        });
    }
};

export const updateProductController = async (req, res) => {
    try {
        const { name, slug, description, price, category, quantity, shipping } =
            req.fields;
        const { photo } = req.files;

        switch (true) {
            case !name:
                return res.status(500).send({ error: "El nombre es requerido" });

            case !description:
                return res.status(500).send({ error: "La direccion es requerida" });

            case !price:
                return res.status(500).send({ error: "El precio es requerido" });

            case !category:
                return res.status(500).send({ error: "La categoria es requerida" });

            case !quantity:
                return res.status(500).send({ error: "La cantidad es requerida" });

            case photo && photo.size > 5000000:
                return res.status(500).send({
                    error: "Se necesita una foto y que esta no pese mas de 5mb",
                });
        }

        const products = await productModel.findByIdAndUpdate(
            req.params.pid,
            { ...req.fields, slug: slugify(name) },
            { new: true }
        );
        if (photo) {
            products.photo.data = fs.readFileSync(photo.path);
            products.photo.contentType = photo.type;
        }

        await products.save();
        res.status(201).send({
            success: true,
            message: "Producto actualizado",
            products,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error al actualizar el producto",
            error,
        });
    }
};
