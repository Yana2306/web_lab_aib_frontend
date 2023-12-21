import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersList from './UsersList';
import User from './User';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UsersList />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;