import './about.css'
import myImage from "../assets/myimg3.png";



function About(){
    return(
        <>
        <section id="about">
        <div className="main_about">
            <div className = "about_cnt">
                <h1 id="name_line">HI, I'M  <span id="name">KUNAL!</span></h1>
                <p id="about_para">I am a software developer with experience in Python, C++, JavaScript, 
                    and web technologies like React, HTML, and CSS. I enjoy building AI 
                    applications, full-stack websites, and data-driven solutions. I love
                    turning ideas into real-world solutions and constantly exploring new
                    technologies to improve my skills.
                </p>
                <button id="resume_btn">My Resume</button>
            </div>
            <div className = "image_cnt">
                <img id="myimg" src={myImage}></img>
            </div>

        </div>
        </section>
        </>
    )

}

export default About;