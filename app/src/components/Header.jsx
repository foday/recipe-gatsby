import React from 'react'
import image from  "../images/omelette.jpeg"; // Adjust the path as necessary

const Header = () => {
  return (
    <div>
        <img src={image} alt="Omelette" style={{width: "100%", height: "auto", borderRadius: "10px"}}/>
    </div>
  )
}

export default Header