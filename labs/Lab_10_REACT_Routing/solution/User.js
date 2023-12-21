import React from 'react';
import { useParams } from 'react-router-dom';
const users = [
    { id: 1, name: 'Дарья', age: 20, activity: 'Студент',  country: 'Россия', city: 'Ростов-на-Дону'},
    { id: 2, name: 'Валерия', age: 25, activity: 'Дизайнер', country: 'Россия', city: 'Краснодар'},
    { id: 3, name: 'София', age: 27, activity: 'Разработчик', country: 'Россия', city: 'Москва'}
  ];
const User = () => {
  let { id } = useParams();
  let user = users.find(user => user.id === parseInt(id));

  return (
    <div>
      <h2>О пользователях:</h2>
      {user && (
        <div>
        <p>ID Пользователя: {id}</p>
        <p>Имя: {user.name}</p>
        <p>Возраст: {user.age}</p>
        <p>Деятельность: {user.activity}</p>
        <p>Страна проживания: {user.country}</p>
        <p>Город: {user.city}</p>
        </div>
      )}
    </div>
  );
}

export default User;