import React from 'react';
import '../CSS/header.scss';

const Header = ({ children }) => {

    const dataIso = new Date();
    const today = dataIso.toLocaleString('ru-RU', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric' 
    })
    
    return (
        <header>
            <h3 className='rate'>курс валют на {today}</h3>
            { children }
        </header>
    )
}

export default Header;
