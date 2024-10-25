import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center p-3">
      <Row>
        <Col className="text-center">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>Sorry, the page you're looking for doesn't exist.</p>
          <Link to="/">
            <Button variant="primary">Go Back to Home</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
