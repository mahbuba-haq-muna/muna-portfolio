import { Typewriter } from 'react-simple-typewriter'
import { FaBook, FaDownload, FaEnvelope, FaGithub, FaGraduationCap, FaHome, FaInstagram, FaLinkedin,  FaMap, FaPen, FaPhone, FaUser } from "react-icons/fa";
import about from '../assets/coding.jpg'
import banner from '../assets/banner.png'
import project1 from '../assets/event.png'
import project2 from '../assets/hotel.png'
import project3 from '../assets/tech.png'
import { useState } from 'react';
import './home.css'
import Skill from './Skill';
import Contact from './Contact';



const Home = () => {
    const [formData, setFormData] = useState()
   
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        // You can send the form data to a server, perform validation, etc.
    };
    return (
        <div>
            {/* navbar */}
            <div className="navbar bg-black bg-opacity-25 w-full fixed z-10">
                <div className=" navbar-center mx-auto lg:hidden flex">
                    <ul className="menu menu-horizontal px-1 text-emerald-700 text-xl shadow-lg ">
                        <li><a href='#home'><FaHome></FaHome></a></li>
                        <li><a href='#about'><FaUser></FaUser></a></li>
                        <li><a href='#skill'><FaPen></FaPen></a></li>
                        <li><a href='#edu'><FaGraduationCap></FaGraduationCap></a></li>
                        <li><a href='#project'><FaBook></FaBook></a></li>
                        <li><a href='#contact'><FaEnvelope></FaEnvelope></a></li>
                    </ul>
                </div>
                <div className="navbar-center hidden mx-auto lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl font-bold text-emerald-600 ">
                        <li><a href='#home'>Home</a></li>
                        <li><a href='#about'>About Me</a></li>
                        <li><a href='#skill'>Skill</a></li>
                        <li><a href='#edu'>Education</a></li>
                        <li><a href='#project'>Projects</a></li>
                        <li><a href='#contact'>Contact Me</a></li>
                    </ul>
                </div>
            </div>

            {/* banner */}
            <div id='home' className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <img src={banner} className="max-w-sm banner-img border-8 border-emerald-500 mt-16 lg:mt-0" />
                    <div>
                        <h1 className="text-2xl lg:text-4xl font-bold">Hi, <br /> I'm Mahbuba Haq Muna</h1>
                        <h1 className="pb-7 text-3xl lg:text-5xl" style={{ paddingTop: '2rem', margin: 'auto 0', fontWeight: 'normal' }}>
                            I'm a{' '}
                            <span style={{ color: '#00A881', fontWeight: 'bold' }}>
                                
                                <Typewriter
                                    words={['Frontend Developer', 'MERN Stack Enthusiast', 'Frontend Developer']}
                                    loop={5}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h1>
                        <p className='text-xl'>Passionate Frontend Developer | Crafting Engaging Web Experiences</p>
                        <div className='text-center mt-10'><a href="#contact"><button className="btn bg-emerald-500 w-32 text-white hover:bg-emerald-700">Hire Me</button></a></div>
                        <div className='flex gap-12 justify-center mt-20'>
                            <div><a href="https://github.com/mahbuba-haq-muna"> <FaGithub className='text-3xl' /></a></div>
                            <div><a href="https://www.linkedin.com/in/mahbuba-haq-muna-a51972253/"> <FaLinkedin className='text-3xl' /></a></div>
                            <div><a href=""> <FaInstagram className='text-3xl' /></a></div>
                        </div>
                    </div>

                </div>
            </div>
            {/* banner end */}

            {/* about me start*/}

            <section id='about' className='lg:px-20 my-20 '>
                <h1 className='text-4xl font-bold text-center mb-5 text-emerald-700'>About Me</h1>
                <div className="card lg:card-side bg-emerald-100 shadow-xl w-full">
                    <div className='lg:w-1/2 '><img src={about} alt="Album" className='h-full' /></div>
                    <div className="card-body lg:w-1/2 ">
                        <h2 className="card-title lg:text-4xl">Frontend Developer on a MERN Stack Adventure</h2>
                        <p className='lg:text-md py-5'>Hi there! I'm Mahbuba Haq Muna, a dedicated front-end developer with a strong background in React. Turning design concepts into dynamic, aesthetically pleasing online interfaces brings me joy. At the moment, I'm fully engrossed in the MERN stack, improving my Node.js, Express.js, and MongoDB skills to build robust and complete apps.
                            <br />
                            I'm looking for possibilities to work with others on challenging and inspiring projects, lending my abilities as needed. Let's get in touch and start creating amazing digital experiences together!

                        </p>
                        <div className="card-actions ">
                            <a href="/public/mahbuba-muna-resume.pdf" download> <button className="btn bg-emerald-500  text-white hover:bg-emerald-700"><FaDownload /> Download CV</button></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* about me end */}

            {/* skills section start */}
            <section id='skill' className='lg:px-20 px-5 my-20' >
                <h1 className='text-4xl font-bold text-center mb-10 text-emerald-700'>My Skills</h1>
                <Skill></Skill>

                {/* education */}
                <div id='edu' className='my-20'>
                    <h1 className='text-4xl font-bold text-center mb-20 mt-20 text-emerald-700'>My Education</h1>
                    <div className='grid lg:grid-cols-2'>
                        <div className='flex'>
                            <FaGraduationCap className='text-4xl text-emerald-500 z-10 bg-slate-100' />
                            <div className='border-l-2 pl-8 -ml-4 pb-16'>
                                <span className='text-2xl'>2012</span>
                                <h3 className='text-3xl font-bold py-5'>Secondary School Certificate (S.S.C)</h3>
                                <p className='text-xl'>  Institute : Dakkhin Banasree Model High School <br />
                                    Educational Board : Dhaka <br />
                                    Group : Science</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <FaGraduationCap className='text-4xl text-emerald-500 z-10 bg-slate-100' />
                            <div className='border-l-2 pl-8 -ml-4 pb-16'>
                                <span className='text-2xl'>2014</span>
                                <h3 className='text-3xl font-bold py-5'>Higher Secondary Certificate (H.S.C)</h3>
                                <p className='text-xl'>  Institute : National Ideal College, Dhaka <br />
                                    Educational Board : Dhaka <br />
                                    Group : Science</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <FaGraduationCap className='text-4xl text-emerald-500 z-10 bg-slate-100' />
                            <div className='border-l-2 pl-8 -ml-4 pb-16'>
                                <span className='text-2xl'>2018</span>
                                <h3 className='text-3xl font-bold py-5'> Bachelor of Science (BSc)</h3>
                                <p className='text-xl'>  Institute : Eden Mohila College, Dhaka <br />
                                    University : University of Dhaka <br />
                                    Department : Physics</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <FaGraduationCap className='text-4xl text-emerald-500 z-10 bg-slate-100' />
                            <div className='border-l-2 pl-8 -ml-4 pb-16'>
                                <span className='text-2xl'>2019</span>
                                <h3 className='text-3xl font-bold py-5'>Master of Science (MSc)</h3>
                                <p className='text-xl'>  Institute : Eden Mohila College, Dhaka <br />
                                    University : University of Dhaka <br />
                                    Department : Physics</p>
                            </div>
                        </div>
                    </div >
                </div >
            </section >
            {/* skills section end */}

            {/* projects section start */}
            <section id='project' className='lg:px-20 my-20 '>
                <h1 className='text-4xl font-bold text-center mb-5 text-emerald-700'>My projects</h1>
                <div className="grid lg:grid-cols-3 gap-10">
                    <div className="card bg-base-100 shadow-xl">
                        <div className='h-56 overflow-y-auto'>
                            <img src={project1} alt="" />
                        </div>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title mb-5">Wedding Planner</h2>
                            <div>
                                <a href="https://65240f35b28fb8052cedcc07--bejewelled-lamington-418524.netlify.app/"><button className='btn border-2 border-emerald-500 rounded-3xl lg:mr-10'>Live View</button></a>
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
            </section>
            {/* projects section end */}

            {/* contact me start */}
            <section id='contact' className='my-20'>

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
            </section>
            {/* contact me end */}

            {/* footer */}
            <section>
                <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">

                    <aside>
                        <p>Copyright © 2023 - All right reserved by Mahbuba Haq Muna</p>
                    </aside>
                </footer>
            </section>
        </div >
    );
};

export default Home;