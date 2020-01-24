import React from 'react';
import { Link } from 'react-router-dom';

export function UsersList({ loading = false, items = [], path }) {
  return (
    <div className="UsersList">
      <h2>Users List</h2>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        items.map((it) => <div key={it.id}><Link to={String(it.id)}>{it.username}</Link></div>)
      )}
    </div>
  );
}
