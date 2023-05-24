import React, { useEffect, useState } from "react";
import LayoutComp from "../../Components/Layout/layoutComp";
import AdminMenu from "../../Components/Layout/AdminMenu";
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        try {
            const { data } = await axios.get("/api/v1/product/get-product");
            setProducts(data.products);
        } catch (error) {
            console.log(error);
            toast.error("Algo salio mal al ingresar la categoria");
        }
    };
    useEffect(() => {
        getAllProducts();
    });

    return (
        <LayoutComp style={"bg-admin"} title={"Products - Omamori Shop"}>
            <AdminMenu />
            <main className="table">
                <section className="table__header">
                    <h1>Productos</h1>
                </section>
                <section className="table__body">
                    {products?.map((p) => (
                        <>
                            <Link to={`/dashboard/admin/product/${p.slug}`}>{p.name}</Link>
                            <div className="card" key={p._id}>
                                <img
                                    src={`/api/v1/product/product-photo/${p._id}`}
                                    className="card-img-top"
                                    alt={p.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{p.name}</h5>
                                    <p className="card-text">{p.description}</p>
                                </div>
                            </div>
                        </>
                    ))}
                </section>
            </main>
        </LayoutComp>
    );
};

export default Products;
