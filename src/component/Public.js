import React,{useState} from 'react'
import mmm from '../images/mmm.png'
import front from '../images/front1.png'
import back from '../images/backend.png'
import testing from '../images/testing.jpg'
import test from '../images/test1.jpg'
import {BsFillMoonStarsFill} from "react-icons/bs"
import {AiFillLinkedin, AiFillGithub, AiFillTwitterCircle} from "react-icons/ai"

const Public = () => {
  const [darkMode,setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
      <section className=' min-h-screen'>
        <nav className=' py-10 mb-12 flex justify-between'>
          <h1 className=' text-xl font-serif dark:text-white'>DEVELOPEDBYMAY</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className=" text-2xl ml-4 cursor-pointer dark:text-white"/>
            </li>
            <li>
              <a className=' bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-white ml-4 rounded-md' href="#">Resume</a>
            </li>
          </ul>
        </nav>
        <div className=' text-center p-10'>
          <h2 className=' text-5xl py-2 text-teal-600 font-medium md:text-6xl'>May Myat Moe</h2>
          <h3 className=' text-2xl py-2  md:text-3xl dark:text-white'>Full Stack Developer</h3>
          <p className=' text-md py-5 text-gray-500 leading-8 md:text-xl max-w-lg mx-auto dark:text-white'>
            Freelancer providing services for frontend and backend needs. 
            Join me down below and let's get cracking.
          </p>
        </div>
        <div className=' text-5xl flex justify-center gap-16 py-3 text-gray-600'>
          <AiFillLinkedin/>
          <AiFillGithub/>
          <AiFillTwitterCircle/>
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 md:h-96 md:w-96'>
          <img src={mmm} layout='fill' objectFit='cover'/>
        </div>
      </section>

      <section>
        <div>
          <h3 className='text-3xl py-1 mt-7 dark:text-white'>Services I offer</h3>
          <p className=' text-md text-gray-800 leading-8 py-2 dark:text-white'>
            Since the beginning of my journey as a freelance developer,
            I have done remote work for <span className='text-teal-500'> agencies</span>&nbsp;
            consulted for <span className=' text-teal-500'> startups</span>&nbsp;
            and collaborated with talented people to create digital product
            for both business and cosumer use.
          </p>
          <p className=' text-md text-gray-800 leading-8 py-2 dark:text-white'>
            I offer from a wide range of services, including  frontend, backend and teaching. 
          </p>
        </div>
        <div className='lg:flex gap-10'>
          <div className='shadow-lg p-10 text-center rounded-xl my-10 dark:bg-white'>
            <img src={front} width={100} height={100} className=' ml-20 lg:ml-36'/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Front End Designs</h3>
            <p className='py-2'>
              Createign elegant designs suited for your needs cool 
              design theory. 
            </p>
            <h4 className='py-4 text-teal-600'>Front End Languages I use</h4>
            <p className='text-gray-800 py-1'>HTML</p>
            <p className='text-gray-800 py-1'>CSS</p>
            <p className='text-gray-800 py-1'>JavaScript</p>
            <h4 className='py-4 text-teal-600'>Front End Frameworks and Libraries I use</h4>
            <p className='text-gray-800 py-1'>ReactJS</p>
            <p className='text-gray-800 py-1'>JQuery</p>
          </div>
          <div className='shadow-lg p-10 text-center rounded-xl my-10 dark:bg-white'>
            <img src={back} width={100} height={100} className=' ml-20 lg:ml-36'/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Back End Designs</h3>
            <p className='py-2'>
              Createign elegant designs suited for your needs cool 
              design theory. 
            </p>
            <h4 className='py-4 text-teal-600'>Back End Languages I use</h4>
            <p className='text-gray-800 py-1'>PHP</p>
            <p className='text-gray-800 py-1'>NodeJs</p>
            <h4 className='py-4 text-teal-600'>Back End Frameworks and Libraries I use</h4>
            <p className='text-gray-800 py-1'>Express</p>
            <p className='text-gray-800 py-1'>Laravel</p>
          </div>
         
        </div>
      </section>
      
      <section>
        <div>
          <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
          <p className=' text-md text-gray-800 leading-8 py-2 dark:text-white'>
            Since the beginning of my journey as a freelance developer,
            I have done remote work for <span className='text-teal-500'> agencies</span>&nbsp;
            consulted for <span className=' text-teal-500'> startups</span>&nbsp;
            and collaborated with talented people to create digital product
            for both business and cosumer use.
          </p>
          <p className=' text-md text-gray-800 leading-8 py-2 dark:text-white'>
            I offer from a wide range of services, including  frontend, backend and teaching. 
          </p>
        </div>
        <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          <div className='basis-1/3 flex-1'>
            <img 
            src={testing} 
            className='rounded-lg object-cover' 
            width={"100%"}
            height={"100%"}
            layout='responsive'
            />
          </div>
          <div className='basis-1/3 flex-1'>
            <img 
            src={test} 
            className='rounded-lg object-cover' 
            width={"100%"}
            height={"100%"}
            layout='responsive'
            />
          </div>
          <div className='basis-1/3 flex-1'>
            <img 
            src={testing} 
            className='rounded-lg object-cover' 
            width={"100%"}
            height={"100%"}
            layout='responsive'
            />
          </div>
          <div className='basis-1/3 flex-1'>
            <img 
            src={test} 
            className='rounded-lg object-cover' 
            width={"100%"}
            height={"100%"}
            layout='responsive'
            />
          </div>
          <div className='basis-1/3 flex-1'>
            <img 
            src={testing} 
            className='rounded-lg object-cover' 
            width={"100%"}
            height={"100%"}
            layout='responsive'
            />
          </div>
          <div className='basis-1/3 flex-1'>
            <img 
            src={test} 
            className='rounded-lg object-cover' 
            width={"100%"}
            height={"100%"}
            layout='responsive'
            />
          </div>
        </div>
      </section>
    </main>
    </div>  
  )
}

export default Public