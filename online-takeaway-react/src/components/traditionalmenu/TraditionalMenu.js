import React, {Fragment} from 'react';

const TraditionalMenu = ({traditionalMenu}) => {

  if (!traditionalMenu) {
    return "loading..."
  }

  return (
    <div>
    <div class="flex-container">
      <p class="flex-item1">{traditionalMenu.name}</p>
      <p class="flex-item2">Single Price: £{traditionalMenu.price}</p>
      <p>ORDER</p>
    </div>
    </div>
  )
}

export default TraditionalMenu;
