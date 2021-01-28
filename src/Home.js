import React from 'react'
import dp from "./images/mypic2.png"
import FeatherIcon from "feather-icons-react";
import { Header } from "./Header";
export const Home = () => {
  return (
    <>
   
    <div className="container p-3 pt-2" >
    <Header></Header>
  <div className="row" >
    <div className="col-md" ></div>
    <div className="col-md-10 col-lg-8" >

      <div className="text-center mt-5" >
      <img className="dp shadow-lg" src={dp}  />
      <h1 className="pacifico mt-4" >Praveen Saravanan</h1>
      <p >Hi 👋 I am a Full Stack Software Developer.</p>
      <div>
        <a className="mx-3 text-white" target="blank" href="tel: +91 8778080423" > <FeatherIcon strokeWidth={2}  icon="phone" size={30} ></FeatherIcon></a>
        <a className="mx-3 text-white" target="blank" href="mailto:praveensaravananoff@gmail.com" ><FeatherIcon strokeWidth={2}  icon="mail" size={30} ></FeatherIcon></a>
        <a className="mx-3 text-white" target="blank" href="https://www.linkedin.com/in/praveen-saravanan-738a0b165/" ><FeatherIcon strokeWidth={2} icon="linkedin" size={30} ></FeatherIcon></a>
        <a className="mx-3 text-white" target="blank" href="https://github.com/PraveenSaravanan7" ><FeatherIcon strokeWidth={2}  icon="github" size={30} ></FeatherIcon></a>
       
      </div>
      <button className="btn btn-light text-primary shadow mt-3" >Download Resume</button>
      {/* <button className="btn btn-outline-light ml-2  text-white" > Contact Me</button> */}
      </div>
        {/* Project Div */}

      <div className="mt-5 pt-2" >
        <h3 className="font-weight-bold bb mb-4" >My Projects</h3>
       <div className="row" >
         <div className="col-md-6 mb-3" >
            <div className="project-div p-3  shadow-sm" >
              <div className="overflow mb-2" >
                <img className="project-img" src="https://drive.google.com/uc?id=1ph3w4G4-DbHJZdxe9fM7jgZJ6HOjZb8s" />
                <img className="project-img" src="https://drive.google.com/uc?id=1fro8shFdacoA59R7dw1rnC_qNFRQLvQ6" />
                <img className="project-img" src="https://drive.google.com/uc?id=1dMHbSDDyU9OMPxrfRvtRfqXMyHDwd7mh" />
              
              </div>
                <h4 className="font-weight-bold mb-1" >Sincere Aid Foundation</h4>
                <p className="text-description mb-2 text-muted" >Portfolio website for Sincere Aid Foundation, Chennai.</p>

                <a href="http://www.sincereaid.org/" target="blank" type="button" className="btn btn-primary btn-sm "  ><FeatherIcon icon="globe" size={"16px"}  ></FeatherIcon> View Website </a>

                <a href="https://github.com/PraveenSaravanan7/Sincere-Aid-Foundation" target="blank" type="button" className="btn btn-outline-primary btn-sm ml-2"  ><FeatherIcon icon="github" size={"16px"} ></FeatherIcon> GitHub </a>
                
            </div>

            </div>
            <div className="col-md-6 mb-3" >
            <div className="project-div p-3  shadow-sm" >
              <div className="overflow mb-2" >
                <img className="project-img" src="https://drive.google.com/uc?id=1qLDGPM8gKjcp20A7Vbq4AFPVhzuBY6jv" />
                <img className="project-img" src="https://drive.google.com/uc?id=10HRRXvm_QjyMmOrRH5hN38V5ySi__vuL" />
                <img className="project-img" src="https://drive.google.com/uc?id=1oO4YhQ0KHXcPR2gSI6AkQmQ8BCc60WTa" />
                <img className="project-img" src="https://drive.google.com/uc?id=10L2OwUbuESLEr4AXS2_xamBqNlLFCcCd" />
                <img className="project-img" src="https://drive.google.com/uc?id=1tw8RwQUmJlzIBswhn8tdJvbRU7QRz_FR" />
              
              </div>
                <h4 className="font-weight-bold mb-1" >Catalogued</h4>
                <p className="text-description mb-2 text-muted" >Online Catalog For Your Products.</p>

                <a href="https://praveensaravanan7.github.io/catalogued/" target="blank" type="button" className="btn btn-primary btn-sm "  ><FeatherIcon icon="globe" size={"16px"}  ></FeatherIcon> View Website </a>

                <a href="https://github.com/PraveenSaravanan7/catalogued" target="blank" type="button" className="btn btn-outline-primary btn-sm ml-2"  ><FeatherIcon icon="github" size={"16px"} ></FeatherIcon> GitHub </a>
                
            </div>

            </div>
            <div className="col-md-6 mb-3" >
            <div className="project-div p-3  shadow-sm" >
              <div className="overflow mb-2" >
                <img className="project-img" src="https://drive.google.com/uc?id=1F1rfha-atW0yO3npLSLB-jjWI5ndVaVf" />
                <img className="project-img" src="https://drive.google.com/uc?id=17RZ-Csjm-V-4w0hM6i6PcbstIdjTXB-e" />
                <img className="project-img" src="https://drive.google.com/uc?id=1Xe6F6Kp6lgwXOQbgrmlHIX9zzDiWgBk2" />
                <img className="project-img" src="https://drive.google.com/uc?id=1qwOAEN5PAIrMiz8KaHkyeUXgbp-3M_Ez" />
                <img className="project-img" src="https://drive.google.com/uc?id=199tw-PKka3MAMd7IoDSzC1Qm_EFsmrsX" />
              
              </div>
                <h4 className="font-weight-bold mb-1" >DonateApp</h4>
                <p className="text-description mb-2 text-muted" >Donate And Get Donated.</p>

                <a href="https://praveensaravanan7.github.io/donateapp" target="blank" type="button" className="btn btn-primary btn-sm "  ><FeatherIcon icon="globe" size={"16px"}  ></FeatherIcon> View Website </a>

                <a href="https://github.com/PraveenSaravanan7/donateapp" target="blank" type="button" className="btn btn-outline-primary btn-sm ml-2"  ><FeatherIcon icon="github" size={"16px"} ></FeatherIcon> GitHub </a>
                
            </div>

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
