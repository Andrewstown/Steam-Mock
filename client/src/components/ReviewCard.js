import React, {useState, useEffect} from 'react'

export default function ReviewCard({review}){
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch(`/users/${review.user_id}`)
          .then(r => r.json())
          .then(data => {
            setUser(data)
          })
      }, [])

    return(
        <>
            {user ? <div class={'cards__item'}>
                <div class="cards__review">
                    <img src={user.img}></img>
                    <p>Rating: {review.rating}</p>
                    <p>{user.name}'s Review: {review.description}</p>
                </div>
            </div> : null}
        </>
    )
}