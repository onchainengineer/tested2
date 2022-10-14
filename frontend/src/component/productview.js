import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

const API_URL = "http://localhost:3000"

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
  },[])

  return (
  <>
  <div class="container text-center ">
  <div class="row">
    {products.map((product,idx)=>{
      return <> 
      <div style={{ width: '4rem' }}/>
      <div class="col-sm-3 shadow p-3 mb-5 bg-white rounded">
      <Card style={{ width: '16rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            Price : {product.price}<br></br>
            Warranty Period : {product.warranty}<br/>
            Details : {product.details}
          </Card.Text>
          <Link to={`/product/${product._id}`} ><Button variant="primary" >View Product</Button></Link>``
        </Card.Body>
      </Card>
      </div>
      </>
      // <>
      // 
  
      // </>
    })}
  
  {/* <div style={{ width: '4rem' }}/>
  <div class="col-sm-3 shadow p-3 mb-5 bg-white rounded">
  <Card style={{ width: '16rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Product1</Card.Title>
      <Card.Text>
        Content
      </Card.Text>
      <Button variant="primary">View Product</Button>
    </Card.Body>
  </Card>
</div>
<div style={{ width: '4rem' }}/>
<div class="col-sm-3 shadow p-3 mb-5 bg-white rounded">
<Card style={{ width: '16rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Product1</Card.Title>
      <Card.Text>
        Content
      </Card.Text>
      <Button variant="primary">View Product</Button>
    </Card.Body>
  </Card>
</div>
<div style={{ width: '4rem' }}/>
<div style={{ width: '4rem' }}/>
<div class="col-sm-3 shadow p-3 mb-5 bg-white rounded">
<Card style={{ width: '16rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Product1</Card.Title>
      <Card.Text>
        Content
      </Card.Text>
      <Button variant="primary">View Product</Button>
    </Card.Body>
  </Card>
</div>
<div style={{ width: '4rem' }}/>
<div class="col-sm-3 shadow p-3 mb-5 bg-white rounded">
<Card style={{ width: '16rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Product1</Card.Title>
      <Card.Text>
        Content
      </Card.Text>
      <Button variant="primary">View Product</Button>
    </Card.Body>
  </Card>
</div>
<div style={{ width: '4rem' }}/>
<div class="col-sm-3 shadow p-3 mb-5 bg-white rounded">
<Card style={{ width: '16rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Product</Card.Title>
      <Card.Text>
        Content
      </Card.Text>
      <Button variant="primary">View Product</Button>
    </Card.Body>
  </Card>
</div>
</div> */}
</div>
</div>
</>
  );
}

export default ProductsPage;