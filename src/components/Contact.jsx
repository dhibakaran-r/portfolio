import { MdMail } from "react-icons/md";
import { MdSmartphone } from "react-icons/md";
export default function Contact(){

    const contact = [
        {
            "icon" : <MdMail />,
            "name" : "Email",
            "details" : "rdhibakaran7@gmail.com"
        },
        {
            "icon" : <MdSmartphone />,
            "name" : "Phone",
            "details" : "+91 97864 51140"
        },

    ]

    return (
        <section className='flex md:flex-row px-5 py-36 bg-white justify-center bg-lt' id='contact'>
          
            {/* <div className='md:w-1/2 py-5 flex justify-center'>
                <img src={resumeimg} alt="resume image" className='w-[600px]' />
            </div> */}


            <div className="md:w-1/2 py-5 flex justify-center items-center">
                <div className="flex flex-col justify-center text-white items-center">
                    <h1 className='text-4xl border-b-4 mb-5 border-[#ffffff] w-[140px] text-[#494D60] font-bold'>Contact</h1>
                    <p className='pb-5 flex py-5 flex-col md:flex-row gap-5 text-3xl md:text-center text-[#42366D]'>Let's Connect and Create Something Great.</p>
                    {
                        contact.map((con, index) =>{
                            return(
                                <p className='pb-5 flex py-5 flex-col md:flex-row items-center gap-5 text-2xl text-[#532AA8] duration-300 hover:scale-110 hover:underline decoration-white' key={index}><span className='font-bold text-black flex justify-center items-center gap-2'>{con.icon} {con.name}</span>{con.details}</p>
                            )
                        })
                    }
                    
                </div>
            </div>

        </section>
    )
}