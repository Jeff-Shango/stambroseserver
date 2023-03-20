import React, {useEffect, useState} from 'react'
import { Navbar, Container, Image} from 'react-bootstrap'
import "./navbar.css";
import navBrand from "../../Components/assets/navBrand.png"

const NavLinks = () => {
  const [pathName, setPathName] = useState(window.location.pathname);

  useEffect(() => {
    const handlePathChange = () => setPathName(window.location.pathname);
    window.addEventListener('popstate', handlePathChange);
    return () => window.removeEventListener('popstate', handlePathChange);
  }, []);

  return (
    <Navbar fixed='top' collapseOnSelect expand="lg" bg='dark' variant='dark' className='navbarContainer'>
      <Container >
        <Navbar.Brand target="_blank" href="https://www.stambros.org/"><Image id='logoBrand' src={navBrand} alt='St. Ambrose'/></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Text className='navbarSignin'>
            {pathName === '/login' || pathName === '/register' ? "" : (
            <a href='/'>
              Logout
            </a>)}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavLinks