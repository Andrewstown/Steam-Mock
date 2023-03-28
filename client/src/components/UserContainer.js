import React from "react";
import Users from "./Users";

function UsersContainer( {users} ) {
    
  const userCard = users.map((user) => {
      return (
        <Users 
            id = {user.id}        
            name = {user.name}
            bio={user.bio} 
            games={user.games} 
            pictureUrl = {user.pictureUrl}
        />
      )
  })


  return (
    <ul className="cards">
      {profileCard}
    </ul>
  );
}

export default UsersContainer;