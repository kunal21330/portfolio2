import "./skills.css"
import htmlicon from "../assets/html-icon.svg";
import pythonicon from "../assets/python-programming-language-icon.svg";
import cssicon from "../assets/tailwind-css-icon.svg";
import awsicon from "../assets/aws-icon.svg";
import azureicon from "../assets/azure-icon.svg";
import dockericon from "../assets/docker-icon.svg";
import giticon from "../assets/git-icon.svg";
import hubicon from "../assets/icons8-github.svg";
import jsicon from "../assets/javascript-programming-language-icon.svg";
import sqlicon from "../assets/mysql-icon.svg";
import postmanicon from "../assets/postman-icon.svg";
import reacticon from "../assets/react-js-icon.svg";
import vscodeicon from "../assets/visual-studio-code-icon.svg";



function Skills(){

    return(

        <>
        <section id="skills">
        <div className="main_skills">
            <h1 id ="heading">SKILLS</h1>
            <p id="subheading">The skills, tools and technologies I use:</p>
            <div id="tools">
                <img className="icon" src={htmlicon} alt="html icon"></img>
                <img className="icon" src={pythonicon} alt="python icon"></img>
                <img className="icon" src={cssicon} alt="tailind icon"></img>
                <img className="icon" src={awsicon} alt="AWS icon"></img>
                <img className="icon" src={azureicon} alt="azure icon"></img>
                <img className="icon" src={dockericon} alt="docker icon"></img>
                <img className="icon" src={giticon} alt="git icon"></img>
                <img className="icon" src={hubicon} alt="github icon"></img>
                <img className="icon" src={jsicon} alt="javascript icon"></img>
                <img className="icon" src={sqlicon} alt="sql icon"></img>
                <img className="icon" src={postmanicon} alt="postman icon"></img>
                <img className="icon" src={reacticon} alt="react icon"></img>
                <img className="icon" src={vscodeicon} alt="VScode icon"></img>
                
            </div>
         </div>
         </section>
        </> 
    )
}

export default Skills