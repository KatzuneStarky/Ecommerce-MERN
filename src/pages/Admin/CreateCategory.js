import React, { useEffect, useState } from "react";
import LayoutComp from "../../Components/Layout/layoutComp";
import AdminMenu from "../../Components/Layout/AdminMenu";
import { toast } from "react-toastify";
import axios from "axios";
import CategoryForm from "../../Components/CategoryForm";
import Modal from "../../Components/Modal";

const CreateCategory = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [openModal, setOpenModal] = useState(false);
    const [selected, setSelected] = useState(null);
    const [updatedName, setUpdatedName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/v1/category/create-category", {
                name,
            });
            if (data.success) {
                toast.success(`${name} fue creado`);
            }
        } catch (error) {
            console.log(error);
            toast.error("Algo salio mal al ingresar la categoria");
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put(
                `/api/v1/category/update-category/${selected._id}`,
                { name: updatedName }
            );
            if (data.success) {
                toast.success(`${selected.name} fue actualizado a ${updatedName}`);
                setSelected(null);
                setUpdatedName("");
                getAllCategories();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Algo salio mal al actualizar la categoria");
        }
    };

    const handleDelete = async (pId) => {
        try {
            const { data } = await axios.delete(
                `/api/v1/category/delete-category/${pId}`);
            if (data.success) {
                toast.success(`la categoria fue eliminada`);
                getAllCategories();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Algo salio mal al actualizar la categoria");
        }
    };

    const getAllCategories = async () => {
        try {
            const { data } = await axios.get("/api/v1/category/get-category");
            if (data.success) {
                setCategories(data.category);
            }
        } catch (error) {
            console.log(error);
            toast.error("Algo salio mal al cargar los datos");
        }
    };

    useEffect(() => {
        getAllCategories();
    });

    return (
        <LayoutComp style={"bg-admin"} title={"Create category - Omamori Shop"}>
            <AdminMenu />
            <CategoryForm
                handleSubmit={handleSubmit}
                value={name}
                setValue={setName}
                title={"Ingresar la nueva categoria"}
                btnText={"Ingresar"}
            />
            <main className="table">
                <section className="table__header">
                    <h1>Categorias</h1>
                </section>
                <section className="table__body">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Editar</th>
                                <th>Borrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories?.map((c) => (
                                <>
                                    <tr key={c._id}>
                                        <td> {c._id} </td>
                                        <td> {c.name} </td>
                                        <td>
                                            <button
                                                className="btn btn-primary ms-2"
                                                onClick={() => {
                                                    setOpenModal(true);
                                                    setUpdatedName(c.name);
                                                    setSelected(c)
                                                }}
                                            >
                                                Editar
                                            </button>
                                        </td>
                                        <td>
                                            <button className="btn btn-danger ms-2" onClick={() => handleDelete(c._id)}>Borrar</button>
                                        </td>
                                    </tr>
                                </>
                            ))}
                        </tbody>
                    </table>
                </section>
            </main>
            {openModal && (
                <Modal
                    closeModal={setOpenModal}
                    value={updatedName}
                    setValue={setUpdatedName}
                    handleSubmit={handleUpdate}
                    title={"Actualizar la categoria"}
                    btnText={"Actualizar"}
                />
            )}
        </LayoutComp>
    );
};

export default CreateCategory;
