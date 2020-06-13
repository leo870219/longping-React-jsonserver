import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
class Menu extends React.Component{
    
    render(){
        const {  name, image,price } = this.props.product;
        return(
            <div className="card">
            <img src={image} className="menu-card-img d-flex justify-content-center align-items-center;" alt={name}/>
            <div className="card-body">
            <p className="card-title d-flex justify-content-start">{name}</p>
            <div className="cart-text d-flex justify-content-between"> 
              <span className="menu-card-text ">${price}</span>
              <button className="card-link">
              <FontAwesomeIcon icon={faCartPlus} />
              </button>
            </div>
            </div>
              
          </div>
        )
    }
}

export default Menu;