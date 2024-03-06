import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './Home';
import About from './About';
import Users from './Users';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';


function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="dark" data-bs-theme="dark">

          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/about">About</Link></Nav.Link>
            <Nav.Link><Link to="/users">Users</Link></Nav.Link>
          </Nav>

        </Navbar>

        <Routes>

          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='/' element={<Home />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
