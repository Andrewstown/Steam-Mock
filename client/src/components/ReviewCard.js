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
                <ul>
                    <img src={user.img}></img>
                    <p>{review.rating}</p>
                    <p>{review.description}</p>
                </ul>
            </div> : null}
        </>
    )
}