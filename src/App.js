import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import Project from './pages/Project';
import projectsData from "./data/projectsData";
import { Route, Routes } from "react-router-dom";
import './styles.css';

function App() {
  function findProject(id){
    return projectsData.data.find(e => e.id === parseInt(id))
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home projects={projectsData} />}/>
          <Route
            exact
            path="/project/:id"
            element={ <Project getProject={findProject} /> }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
