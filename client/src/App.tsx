import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './components/Card';
import EventsExample from './components/EventsExample';
import List from './components/List';
import TodoItem from './components/TodoItem';
import UserItem from './components/UserItem';
import { ITodo, IUser } from './types/types';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UserPage from './components/UserPage';
import TodoPage from './components/TodoPage';
import { NavLink } from 'react-router-dom';
import UserItemPage from './components/UserItemPage';
import TodoItemPage from './components/TodoItemPage';

const App = () => {
  return (
  <BrowserRouter>
  <div>
    <NavLink to={'/users'}>Пользователи</NavLink>
  </div>
  <div>
    <NavLink to={'/todos'}>дела</NavLink>
  </div>
  
  <Routes>
    <Route path={'/users'} element={<UserPage/>} />
    <Route path={'/todos'} element={<TodoPage/>}/>
    <Route path={'/user/:id'} element={<UserItemPage/>}/>
    <Route path={'/todo/:id'} element={<TodoItemPage/>}/>
  </Routes>
  
  </BrowserRouter>
  )
};

export default App;
