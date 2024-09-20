import React from 'react'

const User = () => {
  return (
    <>
      <div className="user-main">
        <div className="container">
          <div className="user-text">
            <p>Welcome the Profile</p>
            <p>Hello, {localStorage.getItem("name")}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default User
