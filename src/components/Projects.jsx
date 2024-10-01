import { useEffect, useState } from 'react'
import pimg from '../assets/images/devs.png'
import projectDatas from '../components/dataset.json'
import { MdOutlineArrowOutward } from "react-icons/md";
// import axios from 'axios';
import img1 from '../assets/images/slack.jpg';
import img2 from '../assets/images/gallery.jpg';
import img3 from '../assets/images/todo.jpg';
import img4 from '../assets/images/e-com.jpg';

export default function Projects(){

    // const[datas, setDatas] = useState();

    const datas = [
        {
            "banner" : img1,
            "desc" : "Slack website clone using HTML, CSS, JS",
            "link" : "https://dhibakaran-r.github.io/my-slack-clone/"
        },
        {
            "banner" : img2,
            "desc" : "Images gallery website build with Reactjs",
            "link" : "#"
        },
        {
            "banner" : img3,
            "desc" : "A Simple TODO app build with Reactjs",
            "link" : "#"
        },
        {
            "banner" : img4,
            "desc" : "A Simple E-commerce website build with Reactjs",
            "link" : "#"
        },
        // {
        //     "banner" : img1,
        //     "desc" : "Slack website clone using HTML, CSS, JS"
        // },
        // {
        //     "banner" : img2,
        //     "desc" : "Images gallery website build with Reactjs"
        // },
        // {
        //     "banner" : img3,
        //     "desc" : "A Simple TODO app build with Reactjs"
        // },
        // {
        //     "banner" : img4,
        //     "desc" : "A Simple E-commerce website build with Reactjs"
        // }
    ]
    // useEffect(()=>{

    //     fetch('../components/dataset.json').then((res) => {
    //         return res.json
    //     }).then((data) =>{
    //         console.log(data);
    //         setDatas(data);
    //     })

    // })

    return (
        <section className="flex flex-col py-20 pb-40 px-5 justify-center bg-intro" id='project'>
            
            <div className="title w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl border-b-4 mb-5 w-[140px] text-[#3B4BAB] border-[#B2BAE1] font-bold ">Projects</h1>
                    <p className='text-white'>These are some of my projects. L have build these with HTML, CSS, Js and React. Check them out.</p>
                </div>
            </div>

            <div className="img w-full pt-5">
                <div className="flex flex-col md:flex-row px-10 gap-5 flex-wrap justify-center items-center">

                    {
                        datas.map((descData, index)=>{
                            console.log(descData);
                            return(
                                
                                <div className="relative" key={index}>
                                    <img className='w-[310px] h-[150px] md:w-[420px] md:h-[300px]' src={descData.banner} alt="project image" />
                                    <div className="desc"> 
                                        <p className="text-center p-2  md:p-5 text-xl md:text-2xl mt-5">{descData.desc}</p>
                                        <a href={descData.link} target='_blank' className='btn'>view project <MdOutlineArrowOutward className='text-white ms-2 font-bold text-2xl'/></a>
                                    </div>
                                </div>

                            )

                        })
                    }
                </div>
            </div>

        </section>
    )
}