import React, {Fragment} from 'react';

const DessertMenu = ({dessertMenu}) => {

  if (!dessertMenu) {
    return "loading..."
  }

  return (
    <div>
    <div class="flex-container">
      <p class="flex-item1">{dessertMenu.name}</p>
      <p class="flex-item2">Single Price: £{dessertMenu.price}</p>
      <button>ORDER</button>
    </div>
    </div>
  )
}

export default DessertMenu;
