import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { BsFillBox2Fill } from 'react-icons/bs'
import { CgProfile } from 'react-icons/cg'

const UserMenu = () => {
    const [isActive, setActive] = useState("false");

    const ToggleClass = () => {
        setActive(!isActive);
    };

    const list = document.querySelectorAll('.list')
    function activeLink (){
        list.forEach((item) =>
            item.classList.remove('active'))
            this.classList.add('active')
    }

    list.forEach((item) => 
        item.addEventListener('click', activeLink))
    return (
        <div className={isActive ? 'navigation' : 'navigation active'}>
        <div className={'menuToggle'} onClick={ToggleClass}></div>
        <ul>
            <li className={'list'}>
                <NavLink to={"/dashboard/user/profile"}>
                    <span className='icon'>
                        <CgProfile />
                    </span>
                    <span className='text'>Profile</span>
                </NavLink>
            </li>

            <li className={'list'}>
                <NavLink to={"/dashboard/user/orders"}>
                    <span className='icon'>
                        <BsFillBox2Fill />
                    </span>
                    <span className='text'>Orders</span>
                </NavLink>
            </li>
        </ul>
    </div>
    )
}

export default UserMenu