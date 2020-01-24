import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UsersList } from '../components/UsersList';
import { userFetch } from '../actions';
import { UserDetails } from '../components/UserDetails';

export function UserDetailsContainer({match}) {
  const user = useSelector((state) => state.users.data.items.find((u) => u.id === Number(match.params.id)));

  return <UserDetails user={user} />;
}
