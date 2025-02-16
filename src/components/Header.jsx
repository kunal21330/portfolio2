import { useState } from "react";
import "./Header.css";


function Header(){
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen((prev) => !prev);
      };
    
      // Function to close menu when an option is clicked
      const handleMenuItemClick = () => {
        setMenuOpen(false);
      };

    return (
        <>
        <header>
            <div className = "main-header">
                <div className = "left"><a>KUNAL SAPRA</a></div>

                <div className="menu-icon" onClick={handleMenuToggle}>
                    ☰
                </div>

                <div className={menuOpen ? "centre menu-open" : "centre"}>
                    <ul>
                        <li><a onClick={handleMenuItemClick} className='headpart' href="#about">ABOUT</a></li>
                        <li><a onClick={handleMenuItemClick} className='headpart' href="#main-projects">PROJECT</a></li>
                        <li><a onClick={handleMenuItemClick} className='headpart' href="#skills">SKILL</a></li>
                        <li><a onClick={handleMenuItemClick} className='headpart' href="#contact_main">CONTACTS</a></li>
                    </ul>
                </div>
            </div>
        </header>
        </>
    )

}

export default Header;