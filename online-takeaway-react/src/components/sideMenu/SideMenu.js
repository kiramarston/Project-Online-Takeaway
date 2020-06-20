import React, {Fragment} from 'react';

const SideMenu = ({sideMenu}) => {

  if (!sideMenu) {
    return "loading..."
  }

  return (
    <div>
    <div class="flex-container">
      <p class="flex-item1">{sideMenu.name}</p>
      <p class="flex-item2">Single Price: £{sideMenu.price}</p>
      <p>ORDER</p>
    </div>
    </div>
  )
}

export default SideMenu;
