import React from 'react'
import LayoutComp from '../../Components/Layout/layoutComp'
import AdminMenu from '../../Components/Layout/AdminMenu'

const CreateCategory = () => {
    return (
        <LayoutComp style={"bg-admin"} title={"Create category - Omamori Shop"}>
            <AdminMenu />
        </LayoutComp>
    )
}

export default CreateCategory