import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React,{useState,useEffect} from "react"
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

const API_URL = "http://localhost:3000";
 
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
  },[])
  return (
  <>
  <div class="container text-center shadow p-3 mb-5 bg-white rounded">
  <div class="row">
  <div class="col-sm-3">
  {product && (<Card style={{ width: '69rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{product.name}</Card.Title>
      <Card.Text>
        Price: {product.price}<br/>
        Warranty : {product.warranty}<br/>
        Details : {product.details}
      </Card.Text>
      <a href="#productview">
      <Link to="/products"><Button variant="primary">View other products</Button></Link>
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