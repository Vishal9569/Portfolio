
import React from 'react'

function Navbar() {
    return (
        <div className='MainNav'>

            <h1>Vishal Kumar</h1>

            <div className="right-div">
                <a href="#Home"><i className="home">Home</i></a>
                <a href="#Project"><i className="Projects">Project</i></a>
                <a href="resume.pdf" target='blank'><i className="Contact">Resume</i></a>
                <a href="#Contact" ><i className="Contact">Contact</i></a>
            </div>

        </div>
    )
}

export default Navbar