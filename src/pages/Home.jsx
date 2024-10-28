import { useState } from 'react';
import { Button, Card, ListGroup, Col, Row, Container, Form } from 'react-bootstrap';
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaServer, FaDesktop, FaShoppingCart, FaCogs } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import Skills from '../components/Skills';
import Projects from './Projects/Projects';
import ScrollToTop from 'react-scroll-to-top';
import api from '../api/Api';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [feedback, setFeedback] = useState(''); // State to hold feedback messages
  const [loading, setLoading] = useState(false); // State to manage loading state for the button

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submitting
    setFeedback(''); // Reset feedback message

    try {
      const response = await api.post('/contact', formData);
      // Handle the response
      setFeedback(response.data.message || 'Message sent successfully!'); // Set success message
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending contact form:', error);

      // Accessing error message more robustly
      const errorMessage = error.response?.data?.error || error.response?.data?.message || 'Failed to send message. Please try again later.';
      setFeedback(errorMessage);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <Container className='my-4'>
      <Row className="justify-content-center">
        <Col xs={12} md={10}>
          <Card className='p-3 border-0 shadow'>
            <Row className="align-items-center g-5">
              {/* Image Section */}
              <Col xs={12} md={6} className="d-flex align-items-center justify-content-center">
                <Card.Img
                  className='w-100 rounded-circle shadow-sm object-fit-cover border border-5 border-primary'
                  src='/pic.jpg'
                  alt='Ebuka Etie'
                  style={{ maxWidth: '14rem', maxHeight: '14rem' }}
                />
              </Col>

              {/* Intro Text Section */}
              <Col xs={12} md={6} className="text-md-start text-center">
                <Card.Body>
                  <Card.Text className="fs-3 mb-1 text-muted">Hello, I'm</Card.Text>
                  <Card.Text className="fs-2 text-dark">Ebuka Etie</Card.Text>
                  <Card.Text className='fs-5 text-secondary mb-4'>
                    Aspiring Software Developer
                  </Card.Text>
                  <Button variant='primary' href="mailto:etieebuka@gmail.com">
                    Contact Me <IoMdMail size={18} className="ms-2" />
                  </Button>

                  {/* Social Links */}
                  <ListGroup className='border-0 mt-4 d-flex flex-row justify-content-center justify-content-md-start gap-3'>
                    <a target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/' className='text-dark'>
                      <FaFacebookSquare size={24}/>
                    </a>
                    <a target='_blank' rel="noopener noreferrer" href='https://www.instagram.com/' className='text-dark'>
                      <FaSquareInstagram size={24} />
                    </a>
                    <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/' className='text-dark'>
                      <FaLinkedin size={24} />
                    </a>
                    <a target='_blank' rel="noopener noreferrer" href='https://github.com/' className='text-dark'>
                      <FaGithubSquare size={24}/>
                    </a>
                  </ListGroup>
                </Card.Body>
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

      {/* Services Section */}
      <Row className="mt-4">
        <Col>
          <h3 className="text-center text-primary">Services</h3>
          <p className="text-center text-muted">
            Offering a range of services in software development
          </p>
          <Row className="justify-content-center">
            <Col xs={12} md={6} className="mb-3">
              <Card className="shadow-sm border-0 card-hover">
                <Card.Body className="text-center">
                  <FaServer size={40} color='#007bff' className="mb-2" />
                  <Card.Title>Backend Development</Card.Title>
                  <Card.Text>
                    Building robust server-side applications to manage data, user authentication, and integrations, ensuring secure and efficient performance.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6} className="mb-3">
              <Card className="shadow-sm border-0 card-hover">
                <Card.Body className="text-center">
                  <FaDesktop size={40} color='#007bff' className="mb-2" />
                  <Card.Title>Frontend Development</Card.Title>
                  <Card.Text>
                    Crafting user-friendly and responsive interfaces that provide seamless user experiences across all devices.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6} className="mb-3">
              <Card className="shadow-sm border-0 card-hover">
                <Card.Body className="text-center">
                  <FaShoppingCart size={40} color='#007bff' className="mb-2" />
                  <Card.Title>E-commerce Solutions</Card.Title>
                  <Card.Text>
                    Designing and developing secure, scalable, and feature-rich e-commerce platforms that drive sales and enhance customer engagement.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={6} className="mb-3">
              <Card className="shadow-sm border-0 card-hover">
                <Card.Body className="text-center">
                  <FaCogs size={40} color='#007bff' className="mb-2" />
                  <Card.Title>Site Maintenance & Reliability</Card.Title>
                  <Card.Text>
                    Offering continuous monitoring and support to keep your website running smoothly, along with updates and issue resolution.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Projects Section */}
      <Row className="mt-4">
        <Col>
          <h3 className="text-center text-primary">Projects</h3>
          <Projects />
        </Col>
      </Row>

      {/* Contact Section */}
      <Row className="mt-4">
        <Col>
          <h3 className="text-center text-primary">Contact</h3>
          <p className="text-center text-muted">
            Feel free to reach out for collaboration or to learn more about my work.
          </p>
          <Row className="justify-content-center">
            <Col xs={12} md={10}>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3 form-floating" controlId="formName">
                      <Form.Control 
                        type="text" 
                        placeholder="Enter your name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required 
                      />
                      <Form.Label>Name</Form.Label>
                    </Form.Group>
                  </Col>

                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3 form-floating" controlId="formEmail">
                      <Form.Control 
                        type="email" 
                        placeholder="Enter your email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                      <Form.Label>Email</Form.Label>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3 form-floating" controlId="formSubject">
                  <Form.Control 
                    type="text" 
                    placeholder="Enter the subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                  <Form.Label>Subject</Form.Label>
                </Form.Group>

                <Form.Group className="mb-3 form-floating" controlId="formMessage">
                  <Form.Control 
                    as="textarea" 
                    style={{ height: '200px' }} 
                    placeholder="Enter your message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required 
                  />
                  <Form.Label>Message</Form.Label>
                </Form.Group>

                {/* Submit Button */}
                <Button variant="primary" type="submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </Form>
              {/* Feedback message display */}
              {feedback && (
                <div className="mt-3 text-center text-muted">{feedback}</div>
              )}
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Scroll to top button */}
      <ScrollToTop smooth color="#007bff" />
    </Container>
  );
};

export default Home;
