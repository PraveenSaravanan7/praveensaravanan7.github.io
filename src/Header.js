import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./images/path4.png"
export const Header = () => {
    return (
        <div className="header" >
            <img src={logo} className="shadow-sm ml-1" width="35px" />
            <div className="float-right mt-2" >
                <Link to={"/skills"} >
                <span className="tabs-name" >Skills</span>
                </Link>
                <Link to={"/experience"} >
                <span className="tabs-name ml-3 mr-1" >Experience</span>
                </Link>
                {/* <span className="tabs-name ml-3" >Achievements</span> */}
            </div>
        </div>
    )
}
