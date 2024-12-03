import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Simplebar from "./components/Simplebar";
import Halfpie from './components/Halfpie'
import Table from "./components/table";
import Signup from "./components/Signup";
import Add from "./components/add";
import Logout from "./components/logout";
import Edit from "./components/edit";

const App=()=> {
  return (
    <div className="">


      <Router>
        <Routes>
          <Route path="/edit/:id" element={<Edit/>}/>
          <Route path="/table/edit/:id" element={<Edit/>}/>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/simplebar" element={<Simplebar/>}/>
          <Route path="/halfpie" element={<Halfpie/>}/>
          <Route path="/table" element={<Table/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/add" element={<Add/>}/>
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
