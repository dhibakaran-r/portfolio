import { AiOutlineLinkedin, AiOutlineFacebook } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer(){

    const social = [
        {
          "icon" : <AiOutlineFacebook size={20}/>,
          "link" : "https://www.facebook.com/profile.php?id=61564281480989"
        },
        {
          "icon" : <AiOutlineLinkedin size={20}/>,
          "link" : "https://www.linkedin.com/in/dhibakaran-r/"
        },
        {
          "icon" : <FaXTwitter size={20}/>,
          "link" : "https://x.com/R_Dhibakara2002"
        },
      ]

    return (
        <section className='bg-color' id='resume'>
            <p className='py-5 text-xl text-white text-center italic tracking-widest leading-3'>&copy; R_Dhibakaran 2024</p>
            <div className="flex justify-center items-center">
                {
                    social.map((icons, index) =>{
                        return(
                            <a href={icons.link} key={index} className="p-2 me-3 mb-2 hover:text-white duration-200 text-gray-700">{icons.icon}</a>
                        )
                    })
                }
            </div>
        </section>
    )
}