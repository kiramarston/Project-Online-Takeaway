import React, {Fragment} from 'react';

const DrinkMenu = ({drinkMenu, addToShoppingCart}) => {

  if (!drinkMenu) {
    return "loading..."
  }

  const handleAdd = () => {
    addToShoppingCart(drinkMenu)
  }

  return (
    <div>
    <div class="flex-container">
      <p class="flex-item1">{drinkMenu.name}</p>
      <p class="flex-item2">Price: £{drinkMenu.price}</p>
      <button onClick={handleAdd}>ORDER</button>
    </div>
    </div>
  )
}

export default DrinkMenu;
