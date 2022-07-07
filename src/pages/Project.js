import ProjectDetails from "../components/ProjectDetails"
import { useParams } from 'react-router-dom';

export default function Project(props){
    const { id } = useParams(); // Get the id parameter from route
    const details = props.getProject(id)

    return(
        <div>
          <ProjectDetails details={details}/>
        </div>
    )
}