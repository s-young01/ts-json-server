import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AddFunction from './components/AddFunction';
import AddSubject from './components/AddSubject';
import Header from './components/Header';
import Lists from './components/Lists';
import Subjects from './components/Subjects';

function App() {
  const [subject, setSubject] = useState(0);
  const onChange = (subject: number): void => {
    setSubject(subject);
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Header sitename='typescript' onChange={onChange}/>
        <Routes>
          <Route path='/' element={<>
            <Subjects onChange={onChange}/>
            <Lists subject={subject}/>
          </>}/>
          <Route path='/addSubject' element={<AddSubject/>}/>
          <Route path='/addFunction' element={<AddFunction/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;