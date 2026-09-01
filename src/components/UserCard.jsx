import React from 'react'

const UserCard = ({user}) => {

  const {firstName, lastName, age, gender, about, photourl} = user;
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
  <figure>
    <img
      src= {photourl}
      alt="Userphoto" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{firstName + " " + lastName}</h2>
    {age && gender && <p>{age + ", " + gender}</p>}
    <p>{about}</p>
    <div className="card-actions p-5 justify-center">
      <button className="btn btn-primary">Interested</button>
      <button className="btn btn-secondary">Ignore</button>
    </div>
  </div>
</div>
  )
}

export default UserCard