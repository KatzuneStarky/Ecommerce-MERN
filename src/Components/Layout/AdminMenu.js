import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { BiCategoryAlt } from 'react-icons/bi'
import { IoMdCreate } from 'react-icons/io'
import { FiUsers } from 'react-icons/fi'

const AdminMenu = () => {
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
                    <NavLink to={"/dashboard/admin/create-category"}>
                        <span className='icon'>
                            <BiCategoryAlt />
                        </span>
                        <span className='text'>Create category</span>
                    </NavLink>
                </li>

                <li className={'list'}>
                    <NavLink to={"/dashboard/admin/create-product"}>
                        <span className='icon'>
                            <IoMdCreate />
                        </span>
                        <span className='text'>Create product</span>
                    </NavLink>
                </li>

                <li className={'list'}>
                    <NavLink to={"/dashboard/admin/all-users"}>
                        <span className='icon'>
                            <FiUsers />
                        </span>
                        <span className='text'>Users</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default AdminMenu