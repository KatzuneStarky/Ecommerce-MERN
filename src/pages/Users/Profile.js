import React from 'react'
import LayoutComp from '../../Components/Layout/layoutComp'
import UserMenu from './UserMenu'

const Profile = () => {
    return (
        <LayoutComp style={"bg-admin"} title={"Profile - Omamori Shop"}>
            <UserMenu />
        </LayoutComp>
    )
}

export default Profile