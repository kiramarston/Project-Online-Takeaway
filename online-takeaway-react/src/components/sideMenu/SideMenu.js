import React from 'react';

const SideMenu = ({sideMenu, addToShoppingCart}) => {

  if (!sideMenu) {
    return "loading..."
  }

  const handleAdd = () => {
    addToShoppingCart(sideMenu)
  }

  return (
    <div>
    <div className="flex-container">
      <p className="flex-item1">{sideMenu.name}</p>
      <p className="flex-item2">£{sideMenu.price}</p>
      <button onClick={handleAdd}>ORDER</button>
    </div>
    <div className="flex-container">
      <p className="flex-item-description">{sideMenu.description}</p>
    </div>
    <hr/>
    </div>
  )
}

export default SideMenu;
