import React, {Fragment} from 'react';

const TraditionalMenu = ({traditionalMenu}) => {

  if (!traditionalMenu) {
    return "loading..."
  }

  return (
    <div>
    <div className="flex-container">
      <p className="flex-item1">{traditionalMenu.name}</p>
      <p className="flex-item2">Price: £{traditionalMenu.price}</p>
      <button>ORDER</button>
    </div>
    </div>
  )
}

export default TraditionalMenu;
