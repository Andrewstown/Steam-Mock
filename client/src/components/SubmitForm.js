import React from "react"
import "./SubmitForm.css"

export default function SubmitForm({user, updateUsers}) {
  const handleSubmit = e => {
    let form = e.target
    fetch(`/users/${user.id}`, {
      method: "PATCH",
      headers: {
          "Content-type": "application/json"
      },
      body: JSON.stringify({
        bio: form.bio.value,
        img: form.image.value,
        name: form.name.value
      })
    })
  }

  return (user ? <>
    <div className='userForm'>
      <form onSubmit={handleSubmit} className="form">
        <label for='name'>Username:</label>
        <input type="text" name='name'/>
        <label for='image'>Image:</label>
        <input type="text" name='image'/>
        <label for='bio'>Bio:</label>
        <input type="text" name='bio'/>
        <button type="submit">Submit</button> 
      </form>
    </div> 
  </> : null)
}