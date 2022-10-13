import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductDetail() {
  return (
  <>
  <div class="container text-center">
  <div class="row">
  <div class="col-sm-3">
  <Card style={{ width: '70rem' }}>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>Audi Q5</Card.Title>
      <Card.Text>
        Audi Car
      </Card.Text>
      <Button variant="primary">View other products</Button>
    </Card.Body>
  </Card>
  </div>
  </div>
  </div>
  </>
  );
}

export default ProductDetail;