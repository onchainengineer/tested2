import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

const API_URL = "https://athena-backend.vercel.app"

function ProductsPage() {
  const [products,setProducts] = useState([]);

  const getProducts = ()=>{
    axios.get(API_URL+'/products')
    .then((resp)=>{
      setProducts(resp.data);
      console.log(products)
    })
  }

  useEffect(()=>{
    getProducts();
  },[localStorage.getItem("user")])

  return (
  <>
  <div class="container text-center ">
  <div class="row">
    {products.map((product,idx)=>{
      return <> 
      <div style={{ width: '4rem' }}/>
      <div class="col-sm-3 shadow p-3 mb-5 bg-white rounded">
      <Card style={{ width: '16rem' }}>
        
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            Price : {product.price}<br></br>
            Warranty Period : {product.warranty}<br/>
            Details : {product.details}
          </Card.Text>
          <Link to={`/product/${product._id}`} ><Button variant="primary" >View Product</Button></Link>
        </Card.Body>
      </Card>
      </div>
      </>

    })}
  
</div>
</div>
</>
  );
}

export default ProductsPage;