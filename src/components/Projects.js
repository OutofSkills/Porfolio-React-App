import { Link } from "react-router-dom";

export default function Projects(props){
    const projectElements = props.projects.data.map(project => {
        return (
            <Link key={project.id} to={`/project/${project.id}`} className="portfolio__item">
                <img src={require(`../images/${project.img}`)} alt={`Project ${project.id}`} className="portfolio__img" />
            </Link>
        );
    })

    return(
        <section className="my-work" id="work">
            <h2 className="section__title section__title--work">My Projects</h2>
            <p className="section__subtitle section__subtitle--work">Selection of my range of work</p>

            <div className="portfolio">
                {projectElements}
            </div>
        </section>
    );
}