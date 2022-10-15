import { useEffect,useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Auth from '../auth/auth';
import axios from 'axios';

const API_URL = "http://localhost:3000";

function NavbarDesign() {
  const [isUser,setIsUser] = useState(false);
  const [isSeller,setIsSeller] = useState(false);
  const [isManufacturer,setIsManufacturer] = useState(false);

  const logoutUser = ()=>{
    Auth.logout();
    CurrentUser();
    window.location.reload();
  }


  const CurrentUser = ()=>{
    if(localStorage.getItem("user")){
      setIsUser(true);
      if(localStorage.getItem('isSeller')=='true'){
        setIsSeller(true);
      }
      if(localStorage.getItem('isManufacturer')=='true'){
        setIsManufacturer(true);
      }
    }
    
    
    // if(localStorage.getItem('isSeller')){
    //   setIsSeller(true);
    // }
    // if(localStorage.getItem('isManufacturer')){
    //   setIsManufacturer(true)
    // }
  }

  useEffect(()=>{
    CurrentUser();
    console.log(isUser,isSeller,isManufacturer)
  },[isUser,isSeller,isManufacturer])

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
            {isSeller && (<Nav.Link href="/product/add">Add Product</Nav.Link>)}
            {isManufacturer && (<Nav.Link href="/">Wallet</Nav.Link>)}
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarDesign;