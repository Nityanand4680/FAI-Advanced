import './App.css';
import NavBar from './Components/NavBar'
import React from 'react';
import AddContact from './Components/AddContact';
import { Routes, Route, Navigate } from "react-router-dom";
import ViewContact from './Components/ViewContact';
import ContactList from './Components/Contact-List';
import EditContact from './Components/EditContact';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Routes>
        <Route path={'/'} element={ <Navigate to={'/contacts/list'}/>}/>
        <Route path={'/contacts/list'} element={<ContactList/>}/>
        <Route path={'/contacts/view/:contactId'} element={<ViewContact/>}/>
        <Route path={'/contacts/add'} element={<AddContact/>}/>
        <Route path={'/contacts/edit/:contactId'} element={<EditContact/>}/>
      </Routes>
    </React.Fragment>
    
  );
}

export default App;
