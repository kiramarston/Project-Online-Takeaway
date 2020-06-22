import React, {Fragment} from 'react';

const DessertMenu = ({dessertMenu, addToShoppingCart}) => {

  if (!dessertMenu) {
    return "loading..."
  }

  const handleAdd = () => {
    addToShoppingCart(dessertMenu)
  }

  return (
    <div>
    <div class="flex-container">
      <p class="flex-item1">{dessertMenu.name}</p>
      <p class="flex-item2">Price: £{dessertMenu.price}</p>
      <button onClick={handleAdd}>ORDER</button>
    </div>
    </div>
  )
}

export default DessertMenu;
