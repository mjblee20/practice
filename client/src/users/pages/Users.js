import React from 'react';

import UsersList from './../components/UsersList/UsersList';

function Users() {
  // Eventually fetch data from backend database
  const USERS = [
    {
      id: 1,
      name: 'Bill',
      image: 'randomURL',
      places: 1
    }, {
      id: 2,
      name: 'Ruby',
      image: 'randomURL',
      places: 2
    }
  ]
  // Outputs all the users in the list of users
  return (
    <UsersList items={USERS} />
  )
}

export default Users;