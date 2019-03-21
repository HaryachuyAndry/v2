import React from 'react';
import Category_style from './Category.module.css'
import {NavLink} from "react-router-dom";
const Category = (props) =>{
    return(
        <div className={Category_style.rooms}>
          <NavLink to= {props.link} activeClassName={Category_style.activeCategory} >{props.category}</NavLink>
        </div>
    );
}
export default Category;
 