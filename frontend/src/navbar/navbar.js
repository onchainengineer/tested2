import { useEffect,useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Auth from '../auth/auth';

function NavbarDesign() {
  const [isUser,setIsUser] = useState(false);

  const logoutUser = ()=>{
    Auth.logout();
    CurrentUser();
  }

  const CurrentUser = ()=>{
    if(localStorage.getItem("user")){
      setIsUser(true);
    }
    else{
    setIsUser(false);
  }}

  useEffect(()=>{
    CurrentUser();
  },[])

  return (
    <Navbar bg="navbar-dark bg-white shadow p-3 mb-5 bg-white rounded" expand="lg">
      <Container>
        <Navbar.Brand>
        <span class="navbar-brand mb-0 h1"><Nav.Link href="/">Athena</Nav.Link></span>
        </Navbar.Brand>
          <Nav className="justify-content-end">
            {!isUser && <Nav.Link href="/login">Login</Nav.Link>}
            {isUser && <Nav.Link onClick={logoutUser}>Logout</Nav.Link>}
            <Nav.Link href="/products">View Products</Nav.Link>
            <Nav.Link href="/product/add">Add Product</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarDesign;