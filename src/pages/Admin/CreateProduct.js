import React from 'react'
import LayoutComp from '../../Components/Layout/layoutComp'
import AdminMenu from '../../Components/Layout/AdminMenu'

const CreateProduct = () => {
    return (
        <LayoutComp style={"bg-admin"} title={"Create product - Omamori Shop"}>
            <AdminMenu />
        </LayoutComp>
    )
}

export default CreateProduct