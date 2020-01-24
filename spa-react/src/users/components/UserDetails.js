import React from 'react';

export function UserDetails({ user }) {
  return (
    <div className="UserDetails">
      <h2>User Details</h2>
      {!user ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Username : {user.username}</p>
          <p>Email : {user.email}</p>
        </>
      )}
    </div>
  );
}
