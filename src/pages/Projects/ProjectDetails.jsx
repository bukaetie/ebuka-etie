import ProjectInfo from '../../source/ProjectInfo';
import Details from '../../components/Details';
import { useParams } from 'react-router-dom';


const ProjectDetails = () => {
  
  const {id} = useParams();
  console.log(id);

  return (
    <>
    {
        ProjectInfo.filter(item=>item.id == id).map(filteredItem=>(
          <Details key={id} image={filteredItem.image} about={filteredItem.about} title={filteredItem.title} githubLink={filteredItem.githubLink} liveDemo={filteredItem.liveDemo}/>
        ))
    }
    </>
  )
}

export default ProjectDetails