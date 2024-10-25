import { Button, Card, ListGroup, Col, Row, Container } from 'react-bootstrap';
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Link } from 'react-router-dom';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <Container className='mt-4'>
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <Card className='p-3 border-0 shadow'>
            <Row className="align-items-center g-5">
              {/* Intro Text Section */}
              <Col xs={12} md={6} className="text-md-start text-center">
                <Card.Body>
                  <Card.Text className="fs-3 mb-1 text-muted">Hello, I'm</Card.Text>
                  <Card.Text className="fs-2 text-dark">
                    Ebuka Etie
                  </Card.Text>
                  <Card.Text className='fs-5 text-secondary mb-4'>
                    Aspiring Software Developer
                  </Card.Text>
                  <Button variant='primary' href="mailto:your-mail@gmail.com" className="px-4 py-2 fs-6">
                    Contact Me <IoMdMail size={18} className="ms-2" />
                  </Button>

                  {/* Social Links */}
                  <ListGroup className='border-0 mt-4 d-flex flex-row justify-content-center justify-content-md-start gap-3'>
                    <Link target='_blank' to='https://www.facebook.com/' className='text-dark'>
                      <FaFacebookSquare size={24}/>
                    </Link>
                    <Link target='_blank' to='https://www.instagram.com/' className='text-dark'>
                      <FaSquareInstagram size={24} />
                    </Link>
                    <Link target='_blank' to='https://www.linkedin.com/' className='text-dark'>
                      <FaLinkedin size={24} />
                    </Link>
                    <Link target='_blank' to='https://github.com/' className='text-dark'>
                      <FaGithubSquare size={24}/>
                    </Link>
                  </ListGroup>
                </Card.Body>
              </Col>

              {/* Image Section */}
              <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                <Card.Img
                  className='w-100 rounded-circle shadow-sm object-fit-cover border border-5 border-primary'
                  src='/pic.jpg'
                  alt='Ebuka Etie'
                  style={{ maxWidth: '14rem', maxHeight: '14rem' }}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      {/* Skills Section */}
      <Row className="mt-4">
        <Col>
          <Skills />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
