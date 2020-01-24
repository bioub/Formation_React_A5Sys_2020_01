import { useSelector } from 'react-redux';
import { UsersList } from '../components/UsersList';

export function UsersListContainer() {
  const data = useSelector((state) => state.users.data);

  return <UsersList loading={data.loading} items={data.items} />;
}
