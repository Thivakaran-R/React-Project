import React, { useState } from 'react'
import "./Toggle.css"

const Toggle = () => {
    const [isDarktheme,setisDarktheme] =useState(false);
    const toggleTheme =()=>{
        setisDarktheme(!isDarktheme);
        if (isDarktheme) {
            document.body.classList.remove('dark');
          } else {
            document.body.classList.add('dark');
          }
    }
  return (
    <div>
        <div className='container'>
            <h1>{isDarktheme ? "Dark Theme" : "Light Theme"}</h1>
            <button onClick={toggleTheme}className='togglebutton'>
                {isDarktheme ? "light Theme":"Dark Theme"}
            </button>
        </div>
    </div>
  )
}

export default Toggle