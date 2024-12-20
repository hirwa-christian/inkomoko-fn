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
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./components/found";

const App=()=> {
  return (
    <div className="">
                <ToastContainer/>


      <Router>
        <Routes>
          <Route path="/logout" element={<Logout/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>

          <Route path="" element={<ProtectedRoute/>}>
          <Route path="/edit/:id" element={<Edit/>}/>
          <Route path="/table/edit/:id" element={<Edit/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/simplebar" element={<Simplebar/>}/>
          <Route path="/halfpie" element={<Halfpie/>}/>
          <Route path="/table" element={<Table/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="*" element={<div className="flex items-center justify-center flex-col">
            <h1 >404 </h1>
            <h2 >Page not found </h2>
          </div>}/>
          </Route>
          <Route path="*" element={<div className="flex items-center justify-center flex-col">
            <h1 >404 </h1>
            <h2 >Page not found </h2>
          </div>}/>
        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
