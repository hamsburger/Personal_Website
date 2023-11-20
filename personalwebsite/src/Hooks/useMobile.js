import React, { useState, useEffect } from "react";
export default function useMobile(){
    const [width, setWidth] = useState(window.innerWidth);
    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange, true);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);
    

    return width <= 768;
}