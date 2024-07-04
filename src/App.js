import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Quiz from './Components/Quiz/Quiz';
import StartPage from './Components/StartPage';
import Register from './Components/Register';
import Profile from './Components/Profile';
import Home from './Components/Home';
import Teacher from './Components/CaseTeacher/Teacher';
import Student from './Components/CaseStudent/Student';
import ListQuiz from './Components/CaseTeacher/ListQuiz';
import ListStudent from './Components/CaseTeacher/ListStudent';
import Homework from './Components/CaseStudent/Homework';

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/"  element={<StartPage />} />  
          <Route path="/login"  element={<Login />} />
          <Route path="/quiz"  element={<Quiz />} />
          <Route path="/register"  element={<Register />} />
          <Route path="/profile" element={<Profile />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/teacher" element={<Teacher />}>

          <Route path="listquiz" element={<ListQuiz />}/>
          <Route path="liststudent" element={<ListStudent />}/>
          </Route>
          <Route path="/student" element={<Student />}>

          <Route path="homework" element={<Homework />}/>

          </Route>
        </Routes>

    </div>
  );
}

export default App;
