import React from "react"
import ProfileCard from "./ProfileCard"
import './Community.css'

export default function Profile({user}){
  return (<ul className="cards"><ProfileCard user={user}/></ul>)
}