import React from 'react';
import DessertMenu from './DessertMenu.js';


const DessertMenuList = (props) => {

	if (props.dessertMenu.length === 0){
	  return (<p>Loading...</p>)
	}

	const dessertMenu = props.dessertMenu.map((dessertMenu, index) => {
	  return (
	    <li key={index} className="component-item">
	    <div className="component">
	    <DessertMenu dessertMenu={dessertMenu}
			addToShoppingCart={props.addToShoppingCart}/>
	    </div>
	    </li>
	  )
	})

	return (
	  <ul className="component-list">
	    {dessertMenu}
	  </ul>
	)
}
 export default DessertMenuList;
