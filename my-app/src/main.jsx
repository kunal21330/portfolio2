import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import CustomCur from './components/Customcur.jsx'
import About from './components/about.jsx'
import Skills from './components/skills.jsx'
import Projects from './components/projects.jsx'
import './main.css'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  
  <>
  <StrictMode>
  <CustomCur />

    <Header />
    <div className='container'>
    
    <About />
    <Projects />
    <Skills />
    <Contact />
    <Footer />
    
    </div>
    
    
    {/* 
  
    
 */}
    </StrictMode>
  </>

)
