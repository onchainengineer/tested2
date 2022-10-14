import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductDetail() {
  return (
  <>
  <div class="container text-center shadow p-3 mb-5 bg-white rounded">
  <div class="row">
  <div class="col-sm-3">
  <Card style={{ width: '69rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Audi Q5</Card.Title>
      <Card.Text>
        Audi Car

        Price: 
        Manufactured Date:
      </Card.Text>
      <a href="#productview">
      <Button variant="primary">View other products</Button>
      </a>
    </Card.Body>
  </Card>
  </div>
  </div>
  </div>
  </>
  );
}

export default ProductDetail;