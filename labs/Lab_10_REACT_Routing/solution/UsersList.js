import React from 'react';
import { Link } from 'react-router-dom';

const users = [
  { id: 1, name: 'Мария' },
  { id: 2, name: 'Варвара' },
  { id: 3, name: 'Ксения' },
];

const UsersList = () => {
  return (
    <div>
      <h2>Пользователи</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;