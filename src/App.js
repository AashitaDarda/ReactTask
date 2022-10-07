import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Registration from './Pages/Registration';
import Home from './Home/Home';
import Login from './Pages/Login';
import Calculator from './Calculator/calculator';
import TicTacToe from './TicTacToe/tictactoe';
import Navbar from './Home/Navbar';
import TodoList from './ToDoList/ToDo'
import ApiFetch from './Api/api'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route index element = {<Home />} />
          <Route path='SignIn' element = {<Registration />} />
          <Route path='LogIn' element = {<Login />} />
          <Route path='calculator' element = {<Calculator />} />
          <Route path='TicTacToe' element = {<TicTacToe />} />
          <Route path='TodoList' element = {<TodoList />} />
          <Route path='api' element = {<ApiFetch />} />
        </Routes>
       
    </BrowserRouter>
   
  );
}

export default App;
