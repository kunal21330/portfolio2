import "./contact.css"
import contacticon from "../assets/contact-icon.svg"
import githubicon from "../assets/icons8-github.svg"
import linkedinicon from "../assets/icons8-linkedin.svg"
import telegramicon from "../assets/icons8-telegram.svg"



function Contact(){

    return(
        <>

        <div id="contact_main">
            
            <div id="right_contact">
            <h1 id ="heading2">Looking to collaborate or just want to say hi? Feel free to reach out!</h1>
            <div id="divcon"><img src={contacticon}></img><h2 className="headingc">CONTACT ME</h2></div>
            <div> <h3 className="headingc">Email: <a className="headingcs"href="mailto:kunal21330@iiitd.ac.in">Kunal21330@iiitd.ac.in</a></h3></div>

            <div id="divcon"><h2 className="headingc">SOCIAL MEDIA</h2></div>
            <div id ="socialflex"> 
                <a className="headingcs"href="https://github.com/kunal21330"><img className="iconsize" src={githubicon}></img></a>
                <a className="headingcs"href="https://www.linkedin.com/in/saprakunal/"><img className="iconsize" src={linkedinicon}></img></a>
                <a className="headingcs"href="https://t.me/kunalsapra"><img className="iconsize" src={telegramicon}></img></a>

            </div>
            </div>

            <div id="left_contact">
                <h1 id="heading2">CONTACT FORM</h1>
                <input id="name_fill" className="formstyle" placeholder="Enter your Name"type="text"></input>
                <input id="email_fill" className="formstyle" placeholder="Enter your Email "type="email"></input>
                <input id="message_fill" className="formstyle" placeholder="Enter your Message" type="text"></input>
                <button id="send_btn">SEND</button>


            </div>

            
       
        
        </div>
        </>
    )

}

export default Contact;