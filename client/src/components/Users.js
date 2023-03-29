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
  

  return (
    <ul className="cards"><UserContainer user = {users}/></ul>
  );
}

export default Users;