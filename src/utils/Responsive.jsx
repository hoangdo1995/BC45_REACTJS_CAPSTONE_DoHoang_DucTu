import React, { useEffect, useState } from 'react'

const ResponsiveItem = (props) => {

    const [screen, setScreen] = useState({
        width: window.innerWidth
    })
    useEffect(()=>{
        changeScreen();
        return ()=>{
            window.removeEventListener('resize',handleResize);
        }
    },[])

    let ComponentRender = props.component;
    const handleResize = () => {
        setScreen({
            width:window.innerWidth
        });
    }
    const changeScreen = () =>{
        
        window.addEventListener('resize',handleResize);
    }


    if (screen.width <= 768 && props.mobileComponent) {
        ComponentRender = props.mobileComponent;
    }

    return (
        <ComponentRender />
    )
}

export default ResponsiveItem
