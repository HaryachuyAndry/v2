import React from 'react';
import Rooms_style from './Rooms.module.css'
import {NavLink} from "react-router-dom";
const Rooms = (props) =>{
    return(
        <div className={Rooms_style.rooms}>
          <NavLink to= {props.link} activeClassName={Rooms_style.active}>{props.category}</NavLink>
        </div>
    );
}
export default Rooms;
 