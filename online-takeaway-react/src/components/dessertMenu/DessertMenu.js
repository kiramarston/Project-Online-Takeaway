import React from 'react';

const DessertMenu = ({dessertMenu, addToShoppingCart}) => {

  if (!dessertMenu) {
    return "loading..."
  }

  const handleAdd = () => {
    addToShoppingCart(dessertMenu)
  }

  return (
    <div>
    <div className="flex-container">
      <p className="flex-item1">{dessertMenu.name}</p>
      <p className="flex-item2">Price: £{dessertMenu.price}</p>
      <button onClick={handleAdd}>ORDER</button>
    </div>
    </div>
  )
}

export default DessertMenu;
