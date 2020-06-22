import React from 'react';
import SideMenu from './SideMenu.js';


const SideMenuList = (props) => {

	if (props.sideMenu.length === 0){
	  return (<p>Loading...</p>)
	}

	const sideMenu = props.sideMenu.map((sideMenu, index) => {
	  return (
	    <li key={index} className="component-item">
	    <div className="component">
	    <SideMenu sideMenu={sideMenu}
			addToShoppingCart={props.addToShoppingCart}/>
	    </div>
	    </li>
	  )
	})

	return (
	  <ul className="component-list">
	    {sideMenu}
	  </ul>
	)
}
 export default SideMenuList;
