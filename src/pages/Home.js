import Introduction from '../components/Introduction';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import About from '../components/About';

export default function Home(props){
    return(
        <>
            <Introduction />
            <Skills />
            <About />
            <Projects projects={props.projects}/>
        </>
    )
}