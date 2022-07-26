import React,{ useState } from "react";
import "../CSS/container.scss";

function Container(props) {

    return (
        <div id='top' className='container-fluid'>
            <div className='container'>
                {props.children}
            </div>
        </div>
    );
}
export default Container;
