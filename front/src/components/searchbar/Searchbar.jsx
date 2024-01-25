import React from 'react';
import { useState } from 'react';

const Searchbar = ({onSearch}) => {
    const [index, setIndex] = useState("");

    const handleChange = (event) => {
        const {value} = event.target
        const input = Number(value);
        if(isNaN(input)){
            window.alert("El id debe ser de tipo numerico")
        }else{
            setIndex(input);
        }
    }

    const handleClick = () => {
        onSearch(index)
        setIndex("");
    }
    return(
        <>
            <h3 style={styles.text}>Buscar videojuegos por ID</h3> 
            <input type='search' value={index} onChange={handleChange}/>
            <button  onClick={handleClick}>Search</button>
        </>
    )

    
}
const styles = {
        text:{
            color: 'white',
        }
    }

export default Searchbar;