import '../cssFiles/skills.css'
import c_logo from "../icons/c_logo.svg"
import java_logo from "../icons/java_logo.svg"
import python_logo from "../icons/python_logo.svg"
import js_logo from "../icons/js_logo.svg"
import react_logo from "../icons/react_logo.svg"
import html_logo from "../icons/html_logo.svg"
import css_logo from "../icons/css_logo.svg"
import node_logo from "../icons/node_log.svg"
import express_logo from "../icons/express_logo.svg"
import mongodb_logo from "../icons/mongoDB_logo.svg"
import MySql_logo from "../icons/my-sql_logo.svg"
import vs_logo from "../icons/vs_logo.svg"
import postman_logo from "../icons/postman_logo.svg"
import git_logo from "../icons/git_logo.svg"
import figma_logo from "../icons/figma_logo.svg"
import canva_logo from "../icons/canva_logo.svg"

const Skills = () => {
    return (
        <div className='skill-page'>
            <h1 className="my-skills-heading">My Skills</h1>
            <div className="total-container">
                <div className="skill-sub-container">
                    <h2 className="skill-heading">Programming Languages</h2>
                    <div class="line"></div>
                    <div className="skills-container">
                        <div className="skill-element">
                            <img src={c_logo} alt="c_Logo" />
                            <p>C</p>
                        </div>
                        <div className="skill-element">
                            <img src={java_logo} alt="java_logo" />
                            <p>Java</p>
                        </div>
                        <div className="skill-element">
                            <img src={python_logo} alt="python_logo" />
                            <p>Python</p>
                        </div>
                        <div className="skill-element">
                            <img src={js_logo} alt="js_logo" />
                            <p>Java Script</p>
                        </div>
                    </div>
                </div>
                <div className="skill-sub-container">
                    <h2 className="skill-heading">Frontend Development</h2>
                    <div class="line"></div>
                    <div className="skills-container">
                        <div className="skill-element">
                            <img src={html_logo} alt="html_logo" />
                            <p>HTML</p>
                        </div>
                        <div className="skill-element">
                            <img src={css_logo} alt="css_Logo" />
                            <p>CSS</p>
                        </div>
                        <div className="skill-element">
                            <img src={react_logo} alt="react_Logo" />
                            <p>React</p>
                        </div>
                    </div>
                </div>
                <div className="skill-sub-container">
                    <h2 className="skill-heading">Backend Development</h2>
                    <div class="line"></div>
                    <div className="skills-container">
                        <div className="skill-element">
                            <img src={node_logo} alt="node_logo" />
                            <p>NodeJS</p>
                        </div>
                        <div className="skill-element">
                            <img src={express_logo} alt="express_logo" />
                            <p>ExpressJS</p>
                        </div>
                        <div className="skill-element">
                            <img src={mongodb_logo} alt="mongodb_logo" />
                            <p>MongoDB</p>
                        </div>
                        <div className="skill-element">
                            <img src={MySql_logo} alt="MySQL_logo" />
                            <p>MySQL</p>
                        </div>
                    </div>
                </div>

                <div className="skill-sub-container">
                    <h2 className="skill-heading">Tools</h2>
                    <div class="line"></div>
                    <div className="skills-container">
                        <div className="skill-element">
                            <img src={vs_logo} alt="vs_logo" />
                            <p>VS Code</p>
                        </div>
                        <div className="skill-element">
                            <img src={postman_logo} alt="postman_logo" />
                            <p>Postman</p>
                        </div>
                        <div className="skill-element">
                            <img src={git_logo} alt="git_logo" />
                            <p>git</p>
                        </div>
                        <div className="skill-element">
                            <img src={figma_logo} alt="figma_logo" />
                            <p>Figma</p>
                        </div>
                        <div className="skill-element">
                            <img src={canva_logo} alt="canva_logo" />
                            <p>canva</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills