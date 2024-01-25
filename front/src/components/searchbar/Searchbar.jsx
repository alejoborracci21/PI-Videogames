import React from 'react';
import { useState } from 'react';
import axios from 'axios'

const Searchbar = () => {
    const [id, setId] = useState("");

    const handleChange = (event) => {
        const {value} = event.target
        const input = Number(value);
        if(isNaN(input)){
            window.alert("No es un numero el Id")
        }else{
            setId(input);
        }
    }

    const onSearch = async(id) => {
        try {
            const {data} = await axios(`http://localhost:3001/videogames/${id}`)
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = () => {
        onSearch(id)
        setId("");
    }
    return(
        <>
            <h3 style={styles.text}>Buscar videojuegos por ID</h3> 
            <input type='search' value={id} onChange={handleChange}/>
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