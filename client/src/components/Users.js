import React, {useState} from "react";
import UserContainer from "./UserContainer";
import './Users.css'

function Users( {users} ) {
  
  console.log(users)
  const usercards = users.map((user) => (
    <UserContainer user = {user}/>
  ))

  return (
    <ul className="cards">{usercards}</ul>
  );
}

export default Users;