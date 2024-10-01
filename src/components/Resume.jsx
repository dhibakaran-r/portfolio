import resumeimg from '../assets/images/detail.jpg'
import { MdOutlineFileDownload } from "react-icons/md";

export default function Resume(){

   
    return (
        <section className='flex flex-col md:flex-row px-5 py-20 bg-white' id='resume'>
          
            <div className='md:w-1/2 py-5 flex justify-center'>
                <img src={resumeimg} alt="resume image" className='md:w-[600px]' />
            </div>


            <div className="md:w-1/2 py-5 flex justify-center items-center">
                <div className="flex flex-col justify-center text-white w-[600px]">
                    <h1 className='text-4xl border-b-4 mb-5 border-[#056BAE] w-[140px] text-[#27283D] font-bold'>Resume</h1>
                    <p className='pb-5 flex py-5 flex-col md:flex-row items-center gap-5 text-2xl text-[#621473]'>Check My Resume Here. <a href='DHIBAKARAN_R.pdf' download target='_blank' className='btn-2 '>Download <MdOutlineFileDownload className='ms-2' size={20}/></a></p>
                </div>
            </div>

        </section>
    )
}