import React, {useState} from "react";
import UserContainer from "./UserContainer";

// function Users( {users} ) {
  
//   const usercards = users.map((user) => (
//     <UserContainer user = {user}/>
//   ))

//   return (
//     <ul className="cards">{usercards}</ul>
//   );
// }

function Users( {users} ) {
  
  const usercards = ((users) => (
    <UserContainer users = {users}/>
  ))

  return (
    <ul className="cards">{usercards}</ul>
  );
}

export default Users;