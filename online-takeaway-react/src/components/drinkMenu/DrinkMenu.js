import React from 'react';

const DrinkMenu = ({drinkMenu, addToShoppingCart}) => {

  if (!drinkMenu) {
    return "loading..."
  }

  const handleAdd = () => {
    addToShoppingCart(drinkMenu)
  }

  return (
    <div>
    <div className="flex-container">
      <p className="flex-item1">{drinkMenu.name}</p>
      <p className="flex-item2">Price: £{drinkMenu.price}</p>
      <button onClick={handleAdd}>ORDER</button>
    </div>
    </div>
  )
}

export default DrinkMenu;
