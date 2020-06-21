import React from 'react';
import DrinkMenu from './DrinkMenu.js';


const DrinkMenuList = (props) => {

	if (props.drinkMenu.length === 0){
	  return (<p>Loading...</p>)
	}

	const drinkMenu = props.drinkMenu.map((drinkMenu, index) => {
	  return (
	    <li key={index} className="component-item">
	    <div className="component">
	    <DrinkMenu drinkMenu={drinkMenu} />
	    </div>
	    </li>
	  )
	})

	return (
	  <ul className="component-list">
	    {drinkMenu}
	  </ul>
	)
}
 export default DrinkMenuList;
