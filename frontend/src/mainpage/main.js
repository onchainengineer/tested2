import Container from 'react-bootstrap/Container';
import logo from './logo.png';
import Card from 'react-bootstrap/Card';
import { useEffect,useState } from 'react';
import axios from 'axios'

const API_URL = "http://localhost:3000";

function MainPage() {
//   const [isUser,setIsUser] = useState(false);

//   const CurrentUser = async()=>{
//     if(localStorage.getItem("user")){
//       setIsUser(true);
//     }
//     else{
//     setIsUser(false);
//   }}
//   const getUser = ()=>{
//     axios.post(API_URL+'/users/getuser',{headers:{
//       Authorization:'Bearer '+ localStorage.getItem("user")
//   }})
//   .then((res)=>{
//     console.log(res)
//     if(res.data.isSeller==true){
//       localStorage.setItem('isSeller',true)
//     }
//     if(res.data.isManufacturer==true){
//       localStorage.setItem('isManufacturer',true)
//     }
//   })
//   .catch((err)=>{console.log(err)})
// }

// useEffect(()=>{
//   console.log('Okay',isUser)
//   async function func(){
//     await CurrentUser();
//   }
//   console.log('Okay',isUser)
//   if(isUser){
//     getUser();
//   }
// },[])

  return (
    <Container>
      <div class="row">
       <div class="col-sm-7">
       <img src={logo} alt="Logo" />
       </div>
       <div style={{ width: '5rem' }}/>
       <div class="col-sm-4 shadow p-6 mb-6 bg-white rounded">
       <div style={{ height: '2rem' }}/>
       <Card style={{ width: '22rem' }}>
       
    <Card.Body>
      <Card.Text>
      <p class="lead">
       Want to experience online shopping <b><i>feeling secure</i></b> about the products you are buying, being sure that they are not fake, and get the authentic products without any damage?
       </p>
       </Card.Text>
    </Card.Body>
  </Card>
  <div style={{ height: '2rem' }}/>
  <Card style={{ width: '22rem' }}>
       
    <Card.Body>
      <Card.Text>
      <p class="lead">
       Then <b>Athena</b> - <i>Unlocking Data Accessibility with Non-Fungibility</i> is perfect for you :)
       </p>
       </Card.Text>
    </Card.Body>
  </Card>
  </div>
  </div>
    </Container>
  );
}

export default MainPage;