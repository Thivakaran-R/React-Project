import React, { useState, useEffect } from 'react';
import './Toggle.css';

const Toggle = () => {
    // Get initial theme from localStorage or default to light theme
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark'; // Return true if the saved theme is dark
    });

    // Effect to apply the theme based on the current state
    useEffect(() => {
        if (isDarkTheme) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        // Save the current theme in localStorage
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    }, [isDarkTheme]);

    // Function to toggle the theme
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    return (
        <div>
            <div className="container">
                <h1>{isDarkTheme ? 'Dark Theme' : 'Light Theme'}</h1>
                <button onClick={toggleTheme} className="toggleButton">
                    {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
                </button>
            </div>
        </div>
    );
};

export default Toggle;
