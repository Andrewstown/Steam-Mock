import React, {useState} from "react"

export default function UserContainer({user}){
  const[clicked, setClicked] = useState(false)

  const [name, setName] = useState("")

  function handlePatch() {
    console.log("patch")
  }

  function handleClick() {
    if (clicked == true) {
      setClicked(false)
    }
    else{
        setClicked(true)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newNameObj = {names: [...name, name]}
    console.log(newNameObj)

        fetch(`/users/${user.id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newNameObj)
            })
            .then(response => {
                console.log(response.status)
                return response.json()
            })
            .then(data => handlePatch(data))
  }

  return(
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
        {/* <div className='userForm'>
          <form onSubmit={handleSubmit} className="form">
            <label>change username:
                <input 
                  type="text"
                  value= {name}
                  onChange={(e) => setName(e.target.value)} 
                />
              <button onClick={handleSubmit} id="change-name">Submit</button>  
            </label>
          </form>
        </div> */}
      </div>
    </li>
  )
}