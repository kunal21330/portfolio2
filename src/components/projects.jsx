import "./projects.css"
import projecticon from "../assets/docker-icon.svg"

function Projects(){

    return(
    <>

    <div id="main-projects">
        <h1 id="heading">PROJECTS</h1>
        <div id="project_flex">
            <div className='project_box'><img className="projectimg"src="..\myimg1.png"></img><div className="content_1"><div className="topic">Multimodal Retrieval System for Images and Text</div> <a  className="projecticoncover"src="#about"><img className = "projecticon" src={projecticon}></img></a></div></div>

            <div className='project_box'><img className="projectimg"src="..\myimg1.png"></img><div className="content_1"><div className="topic">Multimodal Retrieval System for Images and Text</div> <a  className="projecticoncover"src="#about"><img className = "projecticon" src={projecticon}></img></a></div></div>

            <div className='project_box'><img className="projectimg"src="..\myimg1.png"></img><div className="content_1"><div className="topic">Multimodal Retrieval System for Images and Text</div> <a  className="projecticoncover"src="#about"><img className = "projecticon" src={projecticon}></img></a></div></div>

            <div className='project_box'><img className="projectimg"src="..\myimg1.png"></img><div className="content_1"><div className="topic">Multimodal Retrieval System for Images and Text</div> <a  className="projecticoncover"src="#about"><img className = "projecticon" src={projecticon}></img></a></div></div>

            <div className='project_box'><img className="projectimg"src="..\myimg1.png"></img><div className="content_1"><div className="topic">Multimodal Retrieval System for Images and Text</div> <a  className="projecticoncover"src="#about"><img className = "projecticon" src={projecticon}></img></a></div></div>

        
        </div>
    </div>

    </>
    )

}


export default Projects;