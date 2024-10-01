// import aboutimg from '../assets/images/devs.png'
import aboutimg from '../assets/images/aboutbg.png'

export default function About(){

    const datas = [
        {
            "about" : "Hi, I’m R Dhibakaran, a passionate and enthusiastic web developer with a strong foundation in front-end technology and a growing interest in back-end development. I specialize in creating beautiful and user-friendly web applications using HTML, CSS, Bootstrap, and Tailwind CSS. My expertise in JavaScript, React JS, and Redux allows me to create dynamic, functional, and efficient user interfaces."
        },
        {
            "about" : "Has an innovator, I am always looking for new technologies and ways to stay ahead of the ever-changing technological landscape. My strong understanding of SQL and MySQL databases empowers me to work well with data-driven applications, while my knowledge of core Java gives me a good understanding of object-oriented programming principles"
        },
        {
            "about" : "Driven by a desire to learn and grow in web development, I am excited about the opportunities ahead. Whether it’s working with a team or tackling challenges independently, I’m eager to contribute my skills to create impactful digital experiences."
        },
        {
            "about" : "When I’m not coding, you can find me exploring new design trends, learning about emerging technologies, or working on individual projects that push the boundaries of what I know."
        },
    ]

    return (
        <section className='flex flex-col md:flex-row px-5 py-28 bg-lt' id='about'>
          
            <div className='md:w-1/2 pb-20'>
                <img src={aboutimg} alt="about" />
            </div>

            <div className="md:w-1/2 flex justify-center">
                <div className="flex flex-col justify-center text-white about-block">
                    <h1 className='text-4xl border-b-4 mb-5 w-[165px] text-[#27283D] font-bold'>About Me</h1>
                    {
                        datas.map((datas, index) => {
                            return(
                                <p className='pb-5 text-xl' key={index}>{datas.about}</p>
                            )
                        })
                    }
                    
                </div>
            </div>

        </section>
    )
}