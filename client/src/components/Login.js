import React, { useState } from "react";

function handleSubmit(e) {
  e.preventDefault();
  window.alert("Logged In!")
}

function Login( props ) {
  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="searchTerm"
          placeholder="Name"
          onChange={event => props.setSearchUser(event.target.value)} />
        <input 
          type="text" 
          className="searchTerm"
          placeholder="Password"
          onChange={event => props.setSearchPassword(event.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
    
  );
}

export default Login;