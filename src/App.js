import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home"
import Project from './pages/Project';
import projectsData from "./data/projectsData"
import { Route, Routes } from "react-router-dom"
import './styles.css';

function App() {
  function findProject(id){
    return projectsData.data.find(e => e.id === id)
  }
  
  const projectRoutes = projectsData.data.map(p => {
    return (
      <Route path={`/project/${p.id}`} key={p.id} element={<Project getProject={findProject(p.id)} />}/>
    )
  })

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home projects={projectsData} />}/>
          {projectRoutes}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
