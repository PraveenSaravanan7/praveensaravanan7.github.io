import React from 'react'
import FeatherIcon from "feather-icons-react";
import { useHistory } from 'react-router-dom';
export const Experience = () => {
    const history=useHistory()
    return (
        <>
        <div className="container p-3 pt-2" >
      
      <div className="row" >
        <div className="col-md" ></div>
        <div className="col-md-10 col-lg-8" >
            <div> <a className="float-right text-white mt-2" onClick={()=>{history.go(-1)}} ><FeatherIcon icon="x" size={30} ></FeatherIcon></a>  </div>
            <h3 className="bb font-weight-bold  " > 1 Year Experience  </h3> 
            <div className="row mt-4" >
                <div className="col-md-6" >                 
                <div className="project-div p-3 mb-3" >
                   <h2 className="font-weight-bold" >Sincere Aid Foundation, Chennai</h2>
                   <h5 className="font-weight-bold " >Web Developer</h5>
                   <span className=" h6 " >1 MONTH <span className="text-muted" >   (DEC 2020 - JAN 2021)</span></span>
                </div>
                </div>
                <div className="col-md-6" >                 
                <div className="project-div p-3 mb-3" >
                   <h2 className="font-weight-bold" >IIEC, Chennai</h2>
                   <h5 className="font-weight-bold " >Web Developer</h5>
                   <span className=" h6 " >1 WEEK <span className="text-muted" >  (DEC 2019)</span></span>
                </div>
                </div>
                <div className="col-md-6" >                 
                <div className="project-div p-3 mb-3" >
                   <h2 className="font-weight-bold" >Hylite Industries, Chennai</h2>
                   <h5 className="font-weight-bold " >Web Developer</h5>
                   <span className=" h6 " >6 MOUNTHS <span className="text-muted" > (JUN 2019 - NOV 2019)</span></span>
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
