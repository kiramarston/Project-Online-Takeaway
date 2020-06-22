import React, {Fragment} from 'react';

const TraditionalMenu = ({traditionalMenu, addToShoppingCart, addSupperToShoppingCart}) => {

  if (!traditionalMenu) {
    return "loading..."
  }

  const handleAdd = () => {
    addToShoppingCart(traditionalMenu)
  }

  return (
    <div>
    <div className="flex-container">
      <p className="flex-item1">{traditionalMenu.name}</p>
      <p className="flex-item2">Single Price: £{traditionalMenu.price}</p>
      <button onClick={handleAdd}>ORDER</button>
    </div>
    <div className="flex-container">
      <p className="flex-item1"></p>
      <p className="flex-item2">Supper Price: £{traditionalMenu.supperPrice}</p>
      <button onClick={handleAdd}>ORDER</button>
    </div>
    </div>
  )
}

export default TraditionalMenu;
