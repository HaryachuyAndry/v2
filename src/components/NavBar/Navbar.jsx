import React from 'react';
import NavB_style from './Navbar.module.css'
import Rooms from './rooms/Rooms';


const Navbar = () =>{
    return(
        <div className={NavB_style.Navbar}>
            <Rooms link="rooms" category="кімнати" />
            <Rooms link="climate" category=" Клімат кімнат" />
            <Rooms link="charts" category="Графіки" />
            <Rooms link="scenary" category="Сценарії" />
            <Rooms link="rooms" category="Безпека" />
        </div>
    );
}
export default Navbar;