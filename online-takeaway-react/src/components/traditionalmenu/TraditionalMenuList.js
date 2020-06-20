import React from 'react';
import TraditionalMenu from './TraditionalMenu.js';


const TraditionalMenuList = (props) => {

	if (props.traditionalMenu.length === 0){
	  return (<p>Loading...</p>)
	}

	const traditionalMenu = props.traditionalMenu.map((traditionalMenu, index) => {
	  return (
	    <li key={index} className="component-item">
	    <div className="component">
	    <TraditionalMenu traditionalMenu={traditionalMenu} />
	    </div>
	    </li>
	  )
	})

	return (
	  <ul className="component-list">
	    {traditionalMenu}
	  </ul>
	)
}
 export default TraditionalMenuList;
