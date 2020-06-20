import React, {Fragment} from 'react';

const TraditionalMenu = ({traditionalMenu}) => {

  if (!traditionalMenu) {
    return "loading..."
  }

  return (
    <Fragment>
    <p>{traditionalMenu.name}</p>
    <p>Single Price: {traditionalMenu.price}</p>
    <p>Supper Price: {traditionalMenu.supperPrice}</p>
    <p>Description: {traditionalMenu.description}</p>
    </Fragment>
  )
}

export default TraditionalMenu;
