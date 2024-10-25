import { Button, Card, ListGroup, Col, Row, Container } from 'react-bootstrap';
import { FaFacebookSquare, FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Link } from 'react-router-dom';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <Container className='mt-3'>
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <Card className='box-shadow fs-6 p-4'>
            <Row className="g-4 align-items-center">
              <Col xs={12} md={6} className="text-md-start">
                <Card.Body>
                  <Card.Text className="fs-4">Hi</Card.Text>
                  <Card.Text className="fs-5">
                    I am <span className='fw-semibold'>Ebuka Etie</span>
                  </Card.Text>
                  <Card.Text className='fw-light text-secondary'>
                    Aspiring Software Developer
                  </Card.Text>
                  <Button variant='primary' href="mailto:your-mail@gmail.com" className="mb-3 fs-6">
                    Contact Me <IoMdMail size={20} />
                  </Button>

                  <ListGroup className='border-0 mt-3'>
                    <div className='d-flex justify-content-around'>
                      <Link target='_blank' to='https://www.facebook.com/' className='text-primary hover-act'>
                        <FaFacebookSquare size={28}/>
                      </Link>
                      <Link target='_blank' to='https://www.instagram.com/' className='text-primary hover-act'>
                        <FaSquareInstagram size={28} />
                      </Link>
                      <Link target='_blank' to='https://www.linkedin.com/' className='text-primary hover-act'>
                        <FaLinkedin size={28} />
                      </Link>
                      <Link target='_blank' to='https://github.com/' className='text-primary hover-act'>
                        <FaGithubSquare size={28}/>
                      </Link>
                    </div>
                  </ListGroup>
                </Card.Body>
              </Col>
              <Col xs={12} md={6} className="text-md-end text-center">
                <Card.Img
                  className='w-100 rounded box_shadow_hover shadow-lg object-fit-cover'
                  src='/pic.jpg'
                  alt='my_image'
                  style={{ maxWidth: '16.5rem', maxHeight: '16.5rem' }}
                />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Skills />
    </Container>
  );
}

export default Home;
