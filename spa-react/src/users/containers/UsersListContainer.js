import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { UsersList } from '../components/UsersList';
import { userFetch } from '../actions';

export function UsersListContainer() {
  const data = useSelector((state) => state.users.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userFetch());
  }, [dispatch]);

  return <UsersList loading={data.loading} items={data.items} />;
}
