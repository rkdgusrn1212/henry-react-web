import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const Header = ()=>(
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/home">Henry&apos;s React Web</a>
      </Navbar.Brand>
      <Navbar.Toggle/>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem href="/WrongURL">WRONG URL</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
export default Header;
