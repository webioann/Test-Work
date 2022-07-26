import React from 'react'
import '../CSS/wrapper.scss'

const Wrapper = ({ children }) => {
    return (
        <div className='wrapper'>
            { children }
        </div>
    )
}

export default Wrapper