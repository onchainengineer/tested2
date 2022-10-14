import Container from 'react-bootstrap/Container';
import logo from './logo.png';
import Card from 'react-bootstrap/Card';

function MainPage() {
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