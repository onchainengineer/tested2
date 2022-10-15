import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React,{useState,useEffect} from "react"
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

const API_URL = "https://athena-backend.vercel.app";
 
function ProductDetail() {
  const {id} = useParams();
  const [product,setProduct] = useState();

  const getProduct = ()=>{
    axios.get(API_URL+"/products/"+id)
    .then((resp)=>{
      setProduct(resp.data);
    })
  }

  useEffect(()=>{
    getProduct();
  },[localStorage.getItem("user")])
  return (
  <>
  <div class="container text-center shadow p-3 mb-5 bg-white rounded">
  <div class="row">
  <div class="col-sm-3">
  {product && (<Card style={{ width: '69rem' }}>
   
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>
        Price: {product.price}<br/>
        Warranty : {product.warranty}<br/>
        Details : {product.details}
      </Card.Text>
      <a target="_blank" href="https://athena-marketplace.vercel.app/">
      {/* <Link to="/products"> */}
        <Button variant="primary">Buy Product</Button>
        {/* </Link> */}
      </a>
    </Card.Body>
  </Card>)}
  </div>
  </div>
  </div>
  </>
  );
}

export default ProductDetail;