import styles from './ProjectsStyles.module.css';
import viberr from '../../../assets/viberr.png';
import ProjectCard from '../../../common/ProjectCard';
import freshBurger from '../../../assets/fresh-burger.png' ;
import hipsster from '../../../assets/hipsster.png' ;
import netflix from '../../../assets/netflix.png' ;
import weather from '../../../assets/weather.jpeg' ;
import ankit from '../../../assets/ankit.png' ;
import mode from '../../../assets/mode.png' ;
import bid from '../../../assets/bid.jpg' ;

function Projects() {
  return (<section id='projects' className={styles.container}>
  <h1 className='sectionTitle'>Projects</h1>
  <div className={styles.projectsContainer}>

    {/* my project 1 */}
    <ProjectCard src={netflix} link='https://github.com/Ankit-Sharma-Dev/Netflix-Clone' h3='Netflix Clone' p="Streaming App"/>

{/* my project 2 */}
    <ProjectCard 
    src={weather} 
    link='https://github.com/Ankit-Sharma-Dev/TAI-IP' 
    h3='Open Weather ' 
    p="Weather Forecasting App "/>

{/* my project 3 */}
    <ProjectCard 
    src={ankit} 
    link='https://github.com/Ankit-Sharma-Dev' 
    h3='Portfolio ' 
    p="Personal Website"/>

    {/* project 4 */}
    <ProjectCard 
    src={mode} 
    link='https://github.com/Ankit-Sharma-Dev/Modern-Calculator' 
    h3='Modern Calculator' 
    p="Calculation App"/>

<ProjectCard 
    src={bid} 
    link='https://github.com/Ankit-Sharma-Dev/Auction-Platform' 
    h3='Auction Platform' 
    p="Bidding App"/>

    
  </div>
  </section>
  );
}

export default Projects