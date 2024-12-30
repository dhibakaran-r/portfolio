import React from 'react'
import pic from '../assets/images/prodev.jpg'
import { AiOutlineLinkedin, AiOutlineFacebook } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

function Intro() {

  const social = [
    {
      "icon" : <AiOutlineFacebook size={40}/>,
      "link" : "https://www.facebook.com/profile.php?id=61564281480989"
    },
    {
      "icon" : <AiOutlineLinkedin size={40}/>,
      "link" : "https://www.linkedin.com/in/dhibakaran-r/"
    },
    {
      "icon" : <FaXTwitter size={40}/>,
      "link" : "https://x.com/R_Dhibakara2002"
    },
  ]

  return (
    <section className='flex flex-col md:flex-row px-5 py-40 bg-intro justify-center' id='intro'>
      
      <div className="md:w-1/2 flex flex-col justify-center">
      
        <h1 className='text-white text-3xl md:text-6xl'>Hi, <br/> I'm <span className='text-orange-600'>Raju </span>Dhibakaran,
          <p className='mt-2 text-gray-300 text-xl'>Frontend Developer | Web Developer</p>   
        </h1>

        <div className='flex py-10'>
          {
            social.map((links,index) =>{
              return(
                <a href={links.link} target='_blank' className='pr-5 hover:text-white' key={index}>{links.icon}</a>
              )
            })
          }
        </div>

      </div>
      <div className="md:w-1/3">
      
        <img src={pic} alt="intro" />
      
      </div>
    </section>
  )
}

export default Intro