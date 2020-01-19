import React from 'react';

import './UserItem';

function UsersItem(props) {
  return(
    <li className="user-item">
      <div className="user-item-content">
        <div className="user-item-image">
          <img src={props.image} alt={props.name} />
        </div>
        <div className="user-item-info">
          <h2>{props.name}</h2>
          <h3>{props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}</h3>
        </div>
      </div>
    </li>
  );
}

export default UsersItem;