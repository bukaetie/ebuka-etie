import { Button, Card, Row, Col } from 'react-bootstrap';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Details = ({ about, image, title, githubLink, liveDemo }) => {
  return (
    <div className='my-4'>
      <Card className='container py-3 border-0 shadow-sm'>
        <Row className="g-4 align-items-center">
          <Col xs={12} md={4} className="text-center">
            <Card.Img 
              variant='top' 
              className='rounded box_shadow_hover shadow object-fit-cover'
              src={image} 
              alt='my_image' 
              style={{ maxWidth: '16.5rem', maxHeight: '16.5rem' }} 
            />
          </Col>
          <Col xs={12} md={8}>
            <Card.Body>
              {title && <Card.Title className='text-center fs-4 mb-3'>{title}</Card.Title>}
              <Card.Text className='fs-5 text-muted'>{about}</Card.Text>
              <div className='d-flex justify-content-center mt-3'>
                {title ? (
                  <>
                    <Button variant='primary' className='me-2'>
                      <Link 
                        target='_blank' 
                        className='text-decoration-none text-white' 
                        to={githubLink}
                      >
                        View Code <FaGithubSquare />
                      </Link>
                    </Button>
                    <Button variant='success'>
                      <Link 
                        target='_blank' 
                        className='text-decoration-none text-white' 
                        to={liveDemo}
                      >
                        Live Demo
                      </Link>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant='primary' className='me-2'>
                      <Link 
                        target='_blank' 
                        className='text-decoration-none text-white' 
                        to={'https://github.com/bukaetie'}
                      >
                        GitHub <FaGithubSquare />
                      </Link>
                    </Button>
                    <Button variant='primary'>
                      <Link 
                        target='_blank' 
                        className='text-decoration-none text-white' 
                        to={'https://www.linkedin.com/'}
                      >
                        LinkedIn <FaLinkedin />
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
