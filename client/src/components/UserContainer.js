import React, {useState} from "react";

function UserContainer( {user} ) {
  console.log(user)
  const[clicked, setClicked] = useState(false);

  //setting state to grab the value of our name input
  const [name, setName] = useState("");

  function handleClick() {
    if (clicked == true) {
      setClicked(false);
    }
    else{
        setClicked(true);
    }
  }

  // this is the patch I used in Phase 2...trying to repurpose it. I think ...name is probably wrong? 
  const handleSubmit = (event) => {
    event.preventDefault();
    const newNameObj = {names: [...name, name]}
    console.log(newNameObj);

        fetch(`/users/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newNameObj)
            })
            .then(response => {
                console.log(response.status); 
                return response.json();
            })
            .then(data => handlePatch(data));
  }

  return (
    <li className="cards__item">
      <div className="card">
        <img
          onClick = {handleClick}
          src={user.img}
          alt={user.name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{user.name}</div>
          <p className="card__text">{clicked ? user.bio : user.user_games}</p>
          <div className="card__detail">
          </div>
        </div>
        <div className='userForm'>
          <form onSubmit={handleSubmit} className="form">
            <label>change username:
                <input 
                  type="text"
                  value= {comment}
                  onChange={(e) => setName(e.target.value)} 
                />
            </label>
          </form>
        </div>
      </div>
    </li>
  );
}

export default UserContainer;