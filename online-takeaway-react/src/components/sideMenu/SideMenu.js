import React, {Fragment} from 'react';

const SideMenu = ({sideMenu, addToShoppingCart}) => {

  if (!sideMenu) {
    return "loading..."
  }

  const handleAdd = () => {
    addToShoppingCart(sideMenu)
  }

  return (
    <div>
    <div class="flex-container">
      <p class="flex-item1">{sideMenu.name}</p>
      <p class="flex-item2">Price: £{sideMenu.price}</p>
      <button onClick={handleAdd}>ORDER</button>
    </div>
    </div>
  )
}

export default SideMenu;
