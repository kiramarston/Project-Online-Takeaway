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
      <p className="flex-item2">£{dessertMenu.price.toFixed(2)}</p>
      <button className="order-button" onClick={handleAdd}>ORDER</button>
    </div>
    <div className="flex-container">
      <p className="flex-item-description">{dessertMenu.description}</p>
    </div>
    <hr/>
    </div>
  )
}

export default DessertMenu;
