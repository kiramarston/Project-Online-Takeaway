import React, {Fragment} from 'react';

const DrinkMenu = ({drinkMenu}) => {

  if (!drinkMenu) {
    return "loading..."
  }

  return (
    <div>
    <div class="flex-container">
      <p class="flex-item1">{drinkMenu.name}</p>
      <p class="flex-item2">Price: £{drinkMenu.price}</p>
      <button>ORDER</button>
    </div>
    </div>
  )
}

export default DrinkMenu;
