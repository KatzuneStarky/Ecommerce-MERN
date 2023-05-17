import React from 'react'
import LayoutComp from "../../Components/Layout/layoutComp";
import AdminMenu from '../../Components/Layout/AdminMenu';

const AdminDashboard = () => {
    return (
        <LayoutComp style={"bg-admin"} title={"Admin Dashboard - Omamori Shop"}>
            <AdminMenu />
        </LayoutComp>
    )
}

export default AdminDashboard