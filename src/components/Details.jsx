import { Button, Card, Row, Col } from 'react-bootstrap';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Details = ({ about, image, title, githubLink, liveDemo }) => {
  return (
    <div className="my-4">
      <Card className="container py-4 border-0 shadow-sm">
        <Row className="g-4 align-items-center">
          <Col xs={12} md={4} className="text-center">
            <Card.Img 
              variant="top" 
              className="rounded shadow object-fit-cover"
              src={image} 
              alt="Project thumbnail" 
              style={{ maxWidth: '16.5rem', maxHeight: '16.5rem' }} 
            />
          </Col>
          <Col xs={12} md={8}>
            <Card.Body className="text-md-start text-center">
              {title && (
                <Card.Title className="fs-3 mb-3 fw-semibold text-primary">
                  {title}
                </Card.Title>
              )}
              <Card.Text className="fs-5 text-muted mb-4">
                {about}
              </Card.Text>
              <div className="d-flex justify-content-md-start justify-content-center gap-3 mt-3">
                {githubLink && (
                  <Button variant="primary" className="d-flex align-items-center gap-2">
                    <FaGithubSquare />
                    <Link
                      to={githubLink}
                      target="_blank"
                      className="text-white text-decoration-none"
                    >
                      View Code
                    </Link>
                  </Button>
                )}
                {liveDemo && (
                  <Button variant="success" className="d-flex align-items-center gap-2">
                    <Link
                      to={liveDemo}
                      target="_blank"
                      className="text-white text-decoration-none"
                    >
                      Live Demo
                    </Link>
                  </Button>
                )}
                {!githubLink && !liveDemo && (
                  <>
                    <Button variant="primary" className="d-flex align-items-center gap-2">
                      <FaGithubSquare />
                      <Link
                        to="https://github.com/bukaetie"
                        target="_blank"
                        className="text-white text-decoration-none"
                      >
                        GitHub
                      </Link>
                    </Button>
                    <Button variant="primary" className="d-flex align-items-center gap-2">
                      <FaLinkedin />
                      <Link
                        to="https://www.linkedin.com/"
                        target="_blank"
                        className="text-white text-decoration-none"
                      >
                        LinkedIn
                      </Link>
                    </Button>
                  </>
                )}
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Details;
