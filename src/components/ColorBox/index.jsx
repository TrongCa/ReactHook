import React, {useState} from 'react';
import  './ColorBox.scss'
ColorBox.propTypes = {
    
};
function getRandomColor(){
    const COLOR_LIST =['yellow', 'red', 'deeppink', 'white'];
    const randomIndex = Math.trunc(Math.random()*5);
    return COLOR_LIST[randomIndex];
}
function ColorBox() {
    
    const [color, setColor] = useState(()=>{
        const initColor = localStorage.getItem('box_color') || 'deeppink'
        console.log(initColor);
        return initColor;
    });

    function handleClick(){
        const newColor = getRandomColor();
        setColor(newColor);
        
        localStorage.setItem('box_color', newColor);
    }
    return (
        <div className='color-box'
        style={{backgroundColor: color}}
        onClick={handleClick}>
            Hello
        </div>
    );
}

export default ColorBox;