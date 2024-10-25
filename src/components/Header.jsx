import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  // Toggle navbar expansion
  const toggleNavbar = () => setExpanded(prevExpanded => !prevExpanded);

  // Close navbar on link click
  const handleNavLinkClick = () => setExpanded(false);

  return (
    <Navbar expand="lg" expanded={expanded} className="bg-body-tertiary shadow-sm sticky-top">
      <Container>
        <Navbar.Brand>
          <NavLink 
            to='/' 
            className='fs-3 text-decoration-none text-body border border-1 px-2 border-primary rounded'
            onClick={handleNavLinkClick}
          >
            Ebuka Etie
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggleNavbar} aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto d-block d-md-flex align-items-center">
            <Nav.Item className='me-4'>
              <NavLink 
                to='/' 
                className={({ isActive }) => 
                  `text-decoration-none fs-5 fw-normal hover-act ${isActive ? 'text-primary' : 'text-body'}`
                }
                onClick={handleNavLinkClick}
              >
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item className='me-4'>
              <NavLink 
                to='/about' 
                className={({ isActive }) => 
                  `text-decoration-none fs-5 fw-normal hover-act ${isActive ? 'text-primary' : 'text-body'}`
                }
                onClick={handleNavLinkClick}
              >
                About
              </NavLink>
            </Nav.Item>
            <Nav.Item className='me-4'>
              <NavLink 
                to='/projects' 
                className={({ isActive }) => 
                  `text-decoration-none fs-5 fw-normal hover-act ${isActive ? 'text-primary' : 'text-body'}`
                }
                onClick={handleNavLinkClick}
              >
                Projects
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink 
                download="Ebuka_Etie_Resume" 
                target="_blank" 
                rel="noopener noreferrer" 
                to='/Resume.pdf'
                onClick={handleNavLinkClick}
              >
                <Button variant='primary' className="fw-semibold">Download Resume</Button>
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
