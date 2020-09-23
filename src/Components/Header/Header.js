import { MDBIcon } from 'mdbreact';
import React from 'react';
import { Button,  Form,  Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  logo  from '../../Image/Logo.png';
import './Header.css';
const Header = () => {
  return (
<>
      <Navbar >
        <Navbar.Brand className="brand py-3 pl-4">
        <Link to= "/"><img src={logo} alt="" /> </Link>  
        </Navbar.Brand>
        <Form >
        <MDBIcon icon="search" />
          <input type="text" placeholder='Search your Destination...' className="searchBar" />
        </Form>
        <Nav className="ml-auto">
            <Nav><Link to="/news"  className="linkText">News</Link > </Nav>
            <Nav><Link to="/destination"  className="linkText">Destination</Link ></Nav>
            <Nav><Link to="/blog"  className="linkText">Blog</Link ></Nav>
            <Nav><Link to="/contact"  className="linkText">Contact </Link > </Nav>
            <Link  to="/login"> <button className="btn btn-warning">Login</button></Link> 
          </Nav>
      </Navbar>
    
</>
  );
};

export default Header;