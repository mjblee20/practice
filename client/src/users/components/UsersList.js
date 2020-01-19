import React from 'react';

import UserItem from './../UserItem/UserItem';

import './UsersList';

function UsersList(props) {
  // If there are no users in the list
  if (props.items.length === 0) {
    return (
      <div className='center'>
        <h2>No users found</h2>
      </div>
    )
  } 
  // If there are users in the list then print out all the users
  return (
    <ul className='users-list'>
      { 
        props.items.map(user => (
          <UserItem 
            key={user.id} 
            id={user.id} 
            image={user.image} 
            name={user.name} 
            placeCount={user.places}
            />
        )) 
      }
    </ul>
  )
}

export default UsersList;