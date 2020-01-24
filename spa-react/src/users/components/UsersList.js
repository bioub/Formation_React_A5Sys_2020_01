import React from 'react';

export function UsersList({ loading = false, items = [] }) {
  return (
    <div className="UsersList">
      <h2>Users List</h2>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        items.map((it) => <div key={it.id}>{it.username}</div>)
      )}
    </div>
  );
}
