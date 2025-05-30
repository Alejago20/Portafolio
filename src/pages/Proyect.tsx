
import ProjectSlider from '../component/Slider';
import DrawerAppBar from "../component/Menu";
import ParticlesBackground from '../component/ParticlesBackground';
import "../App.css";

const Projects = () => {
  return (
    <section id="projects">
         <ProjectSlider />
       <ParticlesBackground />
    <DrawerAppBar />
     
    </section>
  );
};

export default Projects;
