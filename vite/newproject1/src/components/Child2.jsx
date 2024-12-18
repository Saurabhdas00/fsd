import React from 'react'

const Child2 = ({user}) => {
  return (
    <div>
        <h2>{user.name}</h2>
        <p>Id:{user.Id}</p>
        <p>Hobbies:{user.hobbies.join(", ")}</p>
        <p>{user.isMember? "member":"not a member"}</p>
    </div>
  )
}

export default Child2
