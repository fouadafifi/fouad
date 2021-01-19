import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'






const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
      {/* bg='dark' variant='dark'Navbar className="navbar fixed-top  " bg="dark" expand="lg" */}
      <Navbar  className="navbar fixed-top  "  variant='dark'  expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/home'>
            <Navbar.Brand><img className="logo" src="favicon.ico" alt=""/></Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className="mr-auto menu">
         <Nav.Link href="/Home">Home</Nav.Link>
        
        <Nav.Link href="/HomeScreen">Products</Nav.Link>
        <Nav.Link href="/About">About</Nav.Link>
        <Nav.Link href="/News">News</Nav.Link>
        <Nav.Link href="/Clients">Clients</Nav.Link>
         <Nav.Link href="/Photogallery">Photogallery</Nav.Link>
         <Nav.Link href="/Conatct">Conatct</Nav.Link>
      
       </Nav>

            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  {/* fa fa-opencart */}
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
