import React, {useState} from "react"
import "./SubmitForm.css"


function SubmitForm({user}) {

    // const [users, setUsers] = useState(null)

    // const handleSubmit = (event) => {
    //   event.preventDefault()
    //   const newNameObj = {names: [...name, name]}
    //   console.log(newNameObj)
    
    //       fetch(`/users/${user.id}`, {
    //           method: "PATCH",
    //           headers: {
    //               "Content-type": "application/json"
    //           },
    //           body: JSON.stringify(newNameObj)
    //           })
    //           .then(response => {
    //               console.log(response.status)
    //               return response.json()
    //           })
    //           .then(data => handlePatch(data))
    // }
  
  
    // console.log(user)

    return (
        <div className='userForm'>
        <form onSubmit={handleSubmit} className="form">
          <ul>
            <li>
                <label>change username:</label>
                <input 
                  type="text"
                  value= {user.name}
                  onChange={(e) => setName(e.target.value)} 
                />
            </li>
            <li>
                <label>change user pic:</label>
                <input 
                  type="text"
                  value= {user.pic}
                  onChange={(e) => setName(e.target.value)} 
                />
            </li>
            <li>
                <label>change user bio:</label>
                <input 
                  type="text"
                  value= {user.bio}
                  onChange={(e) => setName(e.target.value)} 
                />
            </li>
            <li className="button">
                <button onClick={handleSubmit} >Submit</button>
            </li>
          </ul>    
        </form>
      </div> 
    )
}

export default SubmitForm;