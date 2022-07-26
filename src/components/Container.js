import React from "react";
import "../CSS/container.scss";

const  Container = ({ children }) => {

    return (
        <div id='top' className='container-fluid'>
            <div className='container'>
                {children}
            </div>
        </div>
    );
}
export default Container;
