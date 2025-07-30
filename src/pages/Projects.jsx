import ImageSlider from "../components/ImageSlider"
import '../cssFiles/Project.css'
import Project1 from "../imgs/AccPrevSys/AccPrevSysdata.js"
import Project2 from "../imgs/PlantsAndTreeInfo/plantAndTreeInfo.js"
import github_icon from "../icons/github_icon.svg"
import search_icon from "../icons/search_icon.svg"

const Projects = () => {
    return (
        <div id="projects" className="project-page">
            <h1>My Projects</h1>
            <div className="project-container">
                <div className="project-sub-container">
                    <div className="slider">
                        <ImageSlider slides={Project1} />
                    </div>
                    <div className="desc-container">
                        <div className="title-container">
                            <h3>Advanced Accident Prevention System</h3>
                            <div className="view-container">
                                <a className="link" href="https://github.com/danielandrose/AnalogDevices.git" target="_blank" rel="noopener noreferrer">
                                    <img className="view" src={github_icon} />
                                </a>

                                <a className="link" href="https://aquamarine-dusk-923212.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <img className="view" src={search_icon} alt="Search Icon" />
                                </a>
                            </div>
                        </div>
                        <h4>Description:</h4><p className="desc">Designed a real-time system to monitor tire pressure and battery percentage for vehicle safety. Built a responsive React
                            interface and integrated REST APIs with Node.js and MongoDB</p>
                        <div className="tech-stack">
                            <p className="tech">React JS</p>
                            <p className="tech">Redux</p>
                            <p className="tech">Node JS</p>
                            <p className="tech">Express JS</p>
                            <p className="tech">Mongo DB</p>
                        </div>
                    </div>

                </div>
                <div className="project-sub-container">
                    <div className="slider">
                        <ImageSlider slides={Project2} />
                    </div>
                    <div className="desc-container">
                        <div className="title-container">
                            <h3>Plants and Trees Info</h3>
                            <div className="view-container">
                                <a className="link" href="https://github.com/danielandrose/FloraFusion.git" target="_blank" rel="noopener noreferrer">
                                    <img className="view" src={github_icon} />
                                </a>
                            </div>
                        </div>
                        <h4>Description:</h4><p className="desc">Developed a MERN stack web application to provide detailed plant and tree information, with features for browsing,
                            searching, and filtering. Utilized Node.js for a high-performance backend</p>
                        <div className="tech-stack">
                            <p className="tech">React JS</p>
                            <p className="tech">Node JS</p>
                            <p className="tech">Express JS</p>
                            <p className="tech">Mongo DB</p>
                        </div>
                    </div>
                </div>
                <div className="project-sub-container">
                    <div className="slider">
                        <ImageSlider slides={Project1} />
                    </div>
                    <div className="desc-container">
                        <div className="title-container">
                            <h3>Advanced Accident System</h3>
                            <div className="view-container">
                                <img className="view" src={github_icon} />
                                <img className="view" src={search_icon} />
                            </div>
                        </div>
                        <h4>Description:</h4><p className="desc">Designed a real-time system to monitor tire pressure and battery percentage for vehicle safety. Built a responsive React
                            interface and integrated REST APIs with Node.js and MongoDB</p>
                        <div className="tech-stack">
                            <p className="tech">React JS</p>
                            <p className="tech">Node JS</p>
                            <p className="tech">Express JS</p>
                            <p className="tech">Mongo DB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projects