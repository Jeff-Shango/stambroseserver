import React from 'react'
import { Navbar, Container, Image} from 'react-bootstrap'
import "./navbar.css";
import navBrand from "../../Components/assets/navBrand.png"
const NavLinks = () => {
  return (
    <Navbar fixed='top' collapseOnSelect expand="lg" bg='dark' variant='dark' className='navbarContainer'>
      <Container >
        <Navbar.Brand href="/"><Image id='logoBrand' src={navBrand} alt='St. Ambrose'/></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Text className='navbarSignin'>
            Signed in as: <a href="#login">Jeff Bozier</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavLinks