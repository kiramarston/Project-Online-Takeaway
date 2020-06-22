import React, {Fragment} from 'react';

const TraditionalMenu = ({traditionalMenu, addToShoppingCart, addSupperToShoppingCart}) => {

  if (!traditionalMenu) {
    return "loading..."
  }

  const handleAdd = () => {
    let newOrder = {
      "name": traditionalMenu.name,
      "description": traditionalMenu.description,
      "price": traditionalMenu.price,
      "isSupper": false,
    }
    addToShoppingCart(newOrder);
  }

  const handleAddSupper = () => {
    let newOrder = {
      "name": traditionalMenu.name,
      "description": traditionalMenu.description,
      "supperPrice": traditionalMenu.supperPrice,
      "isSupper": true,
    }
    addToShoppingCart(newOrder);
  }

  return (
    <div>
    <div className="flex-container">
      <p className="flex-item1">{traditionalMenu.name}</p>
      <p className="flex-item2">Single Price: £{traditionalMenu.price}</p>
      <button onClick={handleAdd}>ORDER</button>
    </div>
    <div className="flex-container">
      <p className="flex-item-description">{traditionalMenu.description}</p>
      <p className="flex-item2">Supper Price: £{traditionalMenu.supperPrice}</p>
      <button onClick={handleAddSupper}>ORDER</button>
    </div>
    <hr/>
    </div>
  )
}

export default TraditionalMenu;
