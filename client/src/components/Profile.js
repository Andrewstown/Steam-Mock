import React from "react"
import ProfileCard from "./ProfileCard"


export default function Profile({user}){
  return (<ul className="cards"><ProfileCard user={user}/></ul>)
}