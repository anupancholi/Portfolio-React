import React from 'react'
import send_icon from '../assets/send-icon.png'
import right_arrow_blod from '../assets/right-arrow-bold.png'
import right_arrow_blod_dark from '../assets/right-arrow-bold-dark.png'

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
    <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
    <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
    <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">Welcome to my web development portfolio! Here you'll find a curated selection of projects that showcase my skills in both frontend and full-stack development. From responsive user interfaces to robust backend integrations, each project highlights my passion for building seamless and scalable web applications.</p>

    <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        {/* <div className="aspect-square bg-[url('./assets/work-1.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">

            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                    <h2 className="font-semibold">Frontend project</h2>
                    <p className="text-sm text-gray-700">Web Design</p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                    <img src={send_icon} alt="" className="w-5"/>
                </div>
            </div>
        </div> */}


        <div className="aspect-square bg-[url('./assets/blog_generator.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">

            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                    <h2 className="font-semibold">Bolg Generator</h2>
                    <p className="text-sm text-gray-700">Web Application using ML/LLM-Integrated Tool</p>
                </div>
                <a
      href="https://short-blog-writer.onrender.com"  
      target="_blank"
      rel="noopener noreferrer"
      className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
    >
      <img src={send_icon} alt="Go to project" className="w-5" />
    </a>
            </div>
        </div>



        <div className="aspect-square bg-[url('./assets/CareConnect.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">

            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                    <h2 className="font-semibold">CareConnect : A Appointment Management System</h2>
                    <p className="text-sm text-gray-700">MERN Stack Application using MongoDB, Express.js, React.js, and Node.js</p>
                </div>
                <a
                href='https://frontend-care-connect.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
                 className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                    <img src={send_icon} alt="" className="w-5"/>
                </a>
            </div>
        </div>



        {/* <div className="aspect-square bg-[url('./assets/work-4.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group">

            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                    <h2 className="font-semibold">UI/UX designing</h2>
                    <p className="text-sm text-gray-700">UI/UX Design</p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                    <img src={send_icon} alt="" className="w-5"/>
                </div>
            </div>
        </div> */}
    </div>
    <a href="https://github.com/anupancholi" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500
    dark:text-white dark:border-white dark:hover:bg-darkHover">Show more
        <img src={right_arrow_blod} alt="" className="w-4 dark:hidden"/>
        <img src={right_arrow_blod_dark} alt="" className="w-4 hidden dark:block"/>
    </a>

</div>
  )
}

export default Work
