import React from 'react'
import LayoutComp from '../../Components/Layout/layoutComp'
import UserMenu from './UserMenu'

const Dashboard = () => {
    return (
        <LayoutComp title={"Dashboard - Omamori Shop"}>
            <UserMenu />
        </LayoutComp>
    )
}

export default Dashboard