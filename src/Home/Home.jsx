import { Typewriter } from 'react-simple-typewriter'
import { FaBook, FaBriefcase, FaDownload, FaEnvelope, FaGithub, FaGraduationCap, FaHome, FaInstagram, FaLinkedin, FaMap, FaPen, FaPhone, FaUser } from "react-icons/fa";
import about from '../assets/coding.jpg'
import banner from '../assets/banner.png'
import project1 from '../assets/event.png'
import project2 from '../assets/hotel.png'
import project3 from '../assets/tech.png'
import react from '../assets/icon-6.png'
import html from '../assets/icon-1.png'
import css from '../assets/icon-2.png'
import js from '../assets/icon-3.png'
import { useState } from 'react';
import './home.css'
import Skill from './Skill';
import Contact from './Contact';
import animation from "./coding.json"
import Lottie from 'lottie-react';
import { Link, Element } from 'react-scroll';
import Navbar from './Navbar';




const Home = () => {
    const [formData, setFormData] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };
    return (
        <div className='bg-black'>
            <div className='min-h-screen'>
                {/* navbar */}
                <Navbar />
                {/* banner */}
                <Element className='' name="home">
                    <div className="banner min-h-screen flex-col lg:flex-row flex lg:justify-between align-middle curve">
                        <img src={banner} className="lg:w-1/4 lg:h-1/4 w-1/2 h-1/2 mx-auto border-4 border-slate-500 rounded-full mt-10 lg:mt-20 lg:ml-32 " />

                        <div className='lg:mt-20 lg:w-1/2 text-center lg:text-start mx-auto'>
                            <h1 className="text-2xl lg:text-4xl font-bold text-white -mb-4 lg:-mb-0">Hi, <br /> I'm Mahbuba Haq Muna</h1>
                            <h1 className="lg:pb-7 text-3xl lg:text-4xl text-white" style={{ paddingTop: '2rem', margin: 'auto 0', fontWeight: 'normal' }}>
                                I'm a{' '}
                                <span style={{ color: '#00A881', fontWeight: 'bold' }}>

                                    <Typewriter
                                        words={['Frontend Developer', 'React Native Developer', 'MERN Stack Enthusiast', 'Frontend Developer']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </span>
                            </h1>
                            <p className='lg:text-xl text-white'>Passionate Frontend Developer | Crafting Engaging Web Experiences</p>
                            <div className='text-center mt-10'><a href="#contact"><button className="py-1 rounded-md bg-emerald-500 w-32 text-white hover:bg-emerald-700">Hire Me</button></a></div>
                            <div className='flex gap-12 justify-center mb-28 lg:mb-0 mt-20'>
                                <div><a href="https://github.com/mahbuba-haq-muna"> <FaGithub className='text-4xl text-white hover:text-emerald-500' /></a></div>
                                <div><a href="https://www.linkedin.com/in/mahbuba-haq-muna-a51972253/"> <FaLinkedin className='text-4xl text-white hover:text-emerald-500' /></a></div>
                                <div><a href=""> <FaInstagram className='text-4xl text-white hover:text-emerald-500' /></a></div>
                            </div>
                        </div>
                    </div>
                </Element>
                {/* banner end */}
            </div>

            {/* about me start*/}

            <Element name="about" className='lg:px-20 px-5 py-20 '>
                <h1 className='text-4xl font-bold text-center mb-5 text-emerald-500'>About Me</h1>
                <div className="lg:flex gap-20 w-full">

                    <div className='relative lg:w-1/2'>
                        <img src={about} alt="About" className='lg:mt-20 p-3 rounded-full w-96 h-96 mx-auto border-4 border-gray-300' />

                        <img src={html} alt="Small Image 1" className='lg:absolute lg:w-12 lg:h-12 lg:rounded-full lg:border-2 lg:border-gray-300 lg:top-5 lg:left-1/3 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 hidden' />

                        <img src={css} alt="Small Image 2" className='lg:absolute lg:w-12 lg:h-12 lg:rounded-full lg:border-2 lg:border-gray-300 lg:bottom-55 lg:right-1/4 lg:transform lg:-translate-x-1/2 lg:translate-y-1/2 hidden' />

                        <img src={js} alt="Small Image 3" className='lg:absolute lg:w-12 lg:h-12 lg:rounded-full lg:border-2 lg:border-gray-300 lg:top-1/3 lg:right-10 lg:transform lg:translate-x-1/2 lg:translate-y-1/2 hidden' />

                        <img src={react} alt="Small Image 4" className='lg:absolute lg:w-12 lg:h-12 lg:rounded-full lg:border-2 lg:border-gray-300 lg:bottom-1/4 lg:left-10 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 hidden' />
                    </div>

                    <div className="text-gray-100 lg:w-1/2 ">
                        <h2 className="lg:text-4xl text-2xl">Frontend Developer on a MERN Stack Adventure</h2>
                        <p className='lg:text-md py-5'>Hi there! I'm Mahbuba Haq Muna, a passionate front-end developer with a knack for crafting seamless, user-friendly web and mobile experiences. With a strong foundation in React, I've enjoyed turning design concepts into engaging and dynamic interfaces. I also gained valuable experience during my 5-month internship as a React Native Developer, where I built mobile applications and enhanced my cross-platform development skills.
                            <br /> <br />
                            I have been expanding my expertise in the MERN stack—mastering Node.js, Express.js, and MongoDB to develop full-stack applications that are both scalable and performant. I'm always eager to take on new challenges, collaborate with others, and contribute my skills to innovative projects.
                            <br /> <br />
                            I'm looking for possibilities to work with others on challenging and inspiring projects, lending my abilities as needed. Let's get in touch and start creating amazing digital experiences together!

                        </p>
                        <div className="mx-auto">
                            <a href="/public/Mahbuba_Haq_Muna_resume_Frontend.pdf" download> <button className="flex flex-row items-center gap-5 px-5 py-2 rounded-2xl bg-emerald-500 mx-auto text-white hover:bg-emerald-700"><FaDownload /> Download CV</button></a>
                        </div>
                    </div>
                </div>
            </Element>

            {/* about me end */}

            {/* skills section start */}
            <Element name="skill" className='lg:px-20 px-5 lg:my-20' >
                <h1 className='text-4xl font-bold text-center mb-10 text-emerald-500'>My Skills</h1>
                <Skill></Skill>
            </Element>

            {/* experience section start */}
            <Element name="experience" className='lg:px-20 mt-20'>
                <h1 className='text-4xl font-bold text-center mb-10 text-emerald-500'>My Experience And Education</h1>

                {/* <div className='flex'>

                    <div className='text-gray-100 pb-16'>
                        <h3 className='text-3xl font-bold py-5'>React Native Intern</h3>
                        <p className='text-xl font-semibold'>Company: TS4U limited</p>
                        <p className='text-xl py-2'>Duration: May 2024 - Present</p>
                        <p className='text-xl'> Description: As a React Native intern at TS4U Ltd., I have been actively contributing to mobile application development projects. My responsibilities include building and optimizing components, integrating APIs, and working collaboratively in a team environment to deliver high-quality mobile experiences.</p>
                    </div>
                </div> */}
            </Element >


            {/* experience section end */}


            {/* education */}
            <Element name="edu" className='lg:px-20 mt-20'>
                
                <div className='grid lg:grid-cols-2'>
                    <div>
                    <h1 className='text-3xl font-bold text-center mb-20 text-emerald-500'>Education</h1>
                        <div className='flex'>
                            <FaGraduationCap className='text-4xl text-emerald-500 z-20 bg-black' />
                            <div className='border-l-2 pl-8 -ml-4 pb-16 text-gray-100'>
                                <h3 className='text-3xl font-bold py-5'>Master of Science (MSc)</h3>
                                <p className='text-xl'>  Institute : Eden Mohila College, Dhaka <br />
                                    University : University of Dhaka <br />
                                    Department : Physics</p>
                            </div>
                        </div>
                        <div className='flex mt-5'>
                            <FaGraduationCap className='text-4xl text-emerald-500 z-100 bg-black' />
                            <div className='border-l-2 pl-8 -ml-4 pb-16 text-gray-100 mt-9'>
                                <h3 className='text-3xl font-bold py-5'> Bachelor of Science (BSc)</h3>
                                <p className='text-xl'>  Institute : Eden Mohila College, Dhaka <br />
                                    University : University of Dhaka <br />
                                    Department : Physics</p>
                            </div>
                        </div>
                    </div>
                    <Element name="experience" className=''>
                        <h1 className='text-3xl font-bold text-center mb-20 text-emerald-500'>Experience</h1>

                        <div className='flex'>
                        {/* <FaGraduationCap className='text-4xl text-emerald-500 z-30 bg-black' /> */}
                        <FaBriefcase className='text-emerald-500 text-8xl'/>
                            <div className='border-l-2 mt-16 pl-5 -ml-3 pb-16 text-gray-100'>
                                <h3 className='text-3xl font-bold py-5'>React Native Intern</h3>
                                <p className='text-xl font-semibold'>Company: TS4U limited</p>
                                <p className='text-xl py-2'>Duration: May 2024 - Present</p>
                                <p className='text-xl'> Description: As a React Native intern at TS4U Ltd., I have been actively contributing to mobile application development projects. My responsibilities include building and optimizing components, integrating APIs, and working collaboratively in a team environment to deliver high-quality mobile experiences.</p>
                            </div>
                        </div>
                    </Element >
                </div >
            </Element >



            {/* projects section start */}
            <Element name="project" className='lg:px-20 my-20 '>
                <h1 className='text-4xl font-bold text-center mb-5 text-emerald-700'>My projects</h1>
                <div className="grid lg:grid-cols-3 gap-10">
                    <div className="card bg-base-100 shadow-xl">
                        <div className='h-56 overflow-y-auto'>
                            <img src={project1} alt="" />
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title mb-5">Wedding Planner</h2>
                            <div>
                                <a href="https://65f57ff7a4d565a8616a2c7b--bejewelled-lamington-418524.netlify.app/"><button className='btn border-2 border-emerald-500 rounded-3xl lg:mr-10'>Live View</button></a>
                                <a href="https://github.com/mahbuba-haq-muna/event-management"><button className='btn border-2 border-emerald-500 rounded-3xl '>Code View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className='h-56 overflow-y-auto'>
                            <img src={project2} alt="" />
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title mb-5">Royal Oasis</h2>
                            <div>
                                <a href="https://royel-oasis-client.web.app/"><button className='btn border-2 border-emerald-500 rounded-3xl lg:mr-10'>Live View</button></a>
                                <a href="https://github.com/mahbuba-haq-muna/hotel_booking_client"><button className='btn border-2 border-emerald-500 rounded-3xl '>Code View</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-xl">
                        <div className='h-56 overflow-y-auto'>
                            <img src={project3} alt="" />
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title mb-5">Flow Tech</h2>
                            <div>
                                <a href="https://flow-tech-client.web.app/"><button className='btn border-2 border-emerald-500 rounded-3xl lg:mr-10'>Live View</button></a>
                                <a href="https://github.com/mahbuba-haq-muna/flow-tech-client"><button className='btn border-2 border-emerald-500 rounded-3xl '>Code View</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
            {/* projects section end */}

            {/* contact me start */}
            <Element name="contact" className='my-20'>

                <h1 className='text-4xl font-bold text-center mb-5 text-emerald-700'>Contact me</h1>
                <div className='contact'>
                    <div className=' lg:p-20 lg:flex gap-10'>
                        <div className='w-1/2 mx-auto pt-20'>
                            <div className='flex gap-5'><FaEnvelope className='lg:text-3xl'></FaEnvelope> <h3 className='lg:text-2xl font-semibold'> muna3828@gmail.com </h3> </div>
                            <div className='flex gap-5 my-5 lg:my-10'><FaPhone className='lg:text-3xl'></FaPhone> <h3 className='lg:text-2xl font-semibold'> 01927969885 </h3>
                            </div>
                            <div className='flex gap-5 my-5 lg:my-10'><FaMap className='lg:text-3xl'></FaMap> <h3 className='lg:text-2xl font-semibold'> Dhaka, Bangladesh </h3>
                            </div>
                        </div>
                        <Contact></Contact>
                    </div>
                </div>
            </Element>
            {/* contact me end */}

            {/* footer */}
            <section>
                <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">

                    <aside>
                        <p>Copyright © 2024 - All right reserved by Mahbuba Haq Muna</p>
                    </aside>
                </footer>
            </section>
        </div >
    );
};

export default Home;