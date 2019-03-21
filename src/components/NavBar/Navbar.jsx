import React from 'react';
import NavB_style from './Navbar.module.css'
import Category from './category/Category';


const Navbar = () =>{
    return(
        <div className={NavB_style.Navbar}>
            <Category link="rooms" category="кімнати"  />
            <Category link="climate" category=" Клімат кімнат" />
            <Category link="charts" category="Графіки" />
            <Category link="scenary" category="Сценарії" />
            <Category link="rooms" category="Безпека" />
        </div>
    );
}
export default Navbar;