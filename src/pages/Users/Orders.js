import React from 'react'
import LayoutComp from '../../Components/Layout/layoutComp'
import UserMenu from './UserMenu'

const Orders = () => {
    return (
        <LayoutComp style={"bg-admin"} title={"Orders - Omamori Shop"}>
            <UserMenu />
        </LayoutComp>
    )
}

export default Orders