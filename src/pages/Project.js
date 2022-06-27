import ProjectDetails from "../components/ProjectDetails"

export default function Project(props){
    return(
        <>
            <ProjectDetails details={props.getProject}/>
        </>
    )
}