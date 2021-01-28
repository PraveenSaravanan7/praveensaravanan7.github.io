import React from 'react'
import FeatherIcon from "feather-icons-react";
import { useHistory } from 'react-router-dom';
export const Skills = () => {
    const history=useHistory()
    return (
        <>
        <div className="container p-3 pt-2" >
      
      <div className="row" >
        <div className="col-md" ></div>
        <div className="col-md-10 col-lg-8" >
            <div> <a className="float-right text-white mt-2" onClick={()=>{history.go(-1)}} ><FeatherIcon icon="x" size={30} ></FeatherIcon></a>  </div>
            <h3 className="bb font-weight-bold  " >My Skills  </h3> 
            <div className="row mt-4" >
                <div className="col-md-6" >                 
                <div className="project-div p-3 mb-3" >
                    <h5 className="font-weight-bold mb-4 bb2 " > <FeatherIcon icon="code"   ></FeatherIcon> Computer Languages</h5><br/>
                    <img className="skill-img" src="https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png" />
                    <img className="skill-img" src="https://cdn.iconscout.com/icon/free/png-512/css3-8-1175200.png" />
                    <img className="skill-img" src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/288_Sass-512.png" />
                    <img className="skill-img" src="https://cdn.iconscout.com/icon/free/png-256/javascript-24-1174950.png" />
                    <img className="skill-img" src="https://cdn.iconscout.com/icon/free/png-256/php-99-1175127.png" />
                    <img className="skill-img" src="https://cdn.iconscout.com/icon/free/png-256/python-14-569257.png" />
                    <img className="skill-img" src="https://icons.veryicon.com/256/System/Windows%208/Files%20Sql.png" />
                </div>
                </div>
                <div className="col-md-6" >                 
                <div className="project-div p-3 mb-3" >
                    <h5 className="font-weight-bold mb-4 bb2 " > <FeatherIcon icon="layout"   ></FeatherIcon> Frontend Web Technologies</h5><br/>
                    <img className="skill-img" src="https://cdn.iconscout.com/icon/free/png-256/react-226053.png" />
                    <img className="skill-img" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/21_Angular_logo_logos-512.png" />
                    <img className="skill-img" src="https://cdn.iconscout.com/icon/free/png-256/jquery-10-1175155.png" />
                    <img className="skill-img" src="https://cdn.iconscout.com/icon/free/png-256/redux-283024.png" />
                    <img className="skill-img" src="https://img.icons8.com/color/452/bootstrap.png" />
                    <img className="skill-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Material_Design_Logo.svg/220px-Google_Material_Design_Logo.svg.png" />
                </div>
                </div>
                <div className="col-md-6" >                 
                <div className="project-div p-3 mb-3" >
                    <h5 className="font-weight-bold mb-4 bb2 " > <FeatherIcon icon="smartphone"   ></FeatherIcon> Cross Platform Technologies</h5><br/>
                    <img className="skill-img" src="https://cssilize.com/img/reactnative-logo.png" />
                    <img className="skill-img" src="https://cdn.iconscout.com/icon/free/png-256/ionic-4-1175016.png" />
                    <img className="skill-img" src="https://cordova.apache.org/static/img/cordova_256.png" />
                    <img className="skill-img" src="https://upload.wikimedia.org/wikipedia/commons/4/4f/NativeScript_logo.png" />
                   
                </div>
                </div>
                <div className="col-md-6" >                 
                <div className="project-div p-3 mb-3" >
                    <h5 className="font-weight-bold mb-4 bb2 " > <FeatherIcon icon="server"   ></FeatherIcon> Backend Technologies</h5><br/>
                    <img className="skill-img" src="https://cdn.iconscout.com/icon/free/png-256/nodejs-2-226035.png" />
                    <img className="skill-img" src="https://www.designbust.com/download/168/png/laravel_icon512.png" />
                    <img className="skill-img" src="https://cdn.iconscout.com/icon/free/png-256/django-12-1175186.png" />
                   
                </div>
                </div>
                <div className="col-md-6" >                 
                <div className="project-div p-3 mb-3" >
                    <h5 className="font-weight-bold mb-4 bb2 " > <FeatherIcon icon="book"   ></FeatherIcon> Database</h5><br/>
                    <img className="skill-img" src="https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png" />
                    <img className="skill-img" src="https://cdn.iconscout.com/icon/free/png-256/mysql-21-1174941.png" />
                   
                </div>
                </div>
                <div className="col-md-6" >                 
                <div className="project-div p-3 mb-3" >
                    <h5 className="font-weight-bold mb-4 bb2 " > <FeatherIcon icon="settings"   ></FeatherIcon> DevOps</h5><br/>
                    <img className="skill-img" src="https://res-3.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/r4wsu8rl4jvpjydbhooy" />
                    <img className="skill-img" src="https://cdn.iconscout.com/icon/free/png-256/azure-1868965-1583129.png" />
                   
                </div>
                </div>
            </div>
           <div className="mt-4 mb-3 text-center"  >
        <h6>Made By Praveen Saravanan.</h6>
      </div>
        </div>
        <div className="col-md" ></div>
        </div>
        </div>
        </>
    )
}
