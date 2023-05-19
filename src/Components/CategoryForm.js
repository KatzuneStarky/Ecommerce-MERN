import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue}) => {



    return (
        <div className="boxContainer">
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="form-control"
                placeholder="Ingresa la nueva categoria"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <input type="submit" value={"Ingresar categoria"} />
        </form>
        </div>
    );
};

export default CategoryForm;
