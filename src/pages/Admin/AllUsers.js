import React from 'react'
import LayoutComp from '../../Components/Layout/layoutComp'
import AdminMenu from '../../Components/Layout/AdminMenu'

const AllUsers = () => {
    return (
        <LayoutComp style={"bg-admin"} title={"All users - Omamori Shop"}>
            <AdminMenu />
        </LayoutComp>
    )
}

export default AllUsers