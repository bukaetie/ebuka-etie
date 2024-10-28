import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProjectInfo from '../../source/ProjectInfo';

const Projects = () => { 
  return (
    <div className='d-flex flex-row flex-wrap gap-3 justify-content-center align-items-center my-4'>
      {ProjectInfo.map((item, id) => {
        return (
          <Card key={id} className='shadow-sm card-hover' style={{ width: '18rem' }}>
            <Card.Header className='text-center'>
              {item.title}
            </Card.Header>
            <Card.Body className='pt-3 pb-3'>
              <Card.Img 
                variant='top' 
                src={item.image}
                style={{ objectFit: 'cover', height: '150px' }}
                alt='project_image' 
              />
            </Card.Body>
            <Card.Footer className='text-center'>
              <Link to={`/projectDetails/${item.id}`}>
                <Button variant='primary'>View Details</Button>
              </Link>
            </Card.Footer>
          </Card>
        );
      })}
    </div>
  );
}

export default Projects;
