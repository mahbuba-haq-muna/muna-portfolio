import html from '../assets/icon-1.png'
import css from '../assets/icon-2.png'
import js from '../assets/icon-3.png'
import tail from '../assets/tailwind.png'
import react from '../assets/icon-6.png'
import mongo from '../assets/mongo.png'
import ex from '../assets/ex.png'
import node from '../assets/node.png'
import firebase from '../assets/firebase_logo.png'


const Skill = () => {
    return (
        <div className='lg:grid lg:grid-cols-2 gap-10 '>
            {/* frontend */}
            <div className='mb-10 lg:mb-0 bg-gradient-to-r from-emerald-100 to-emerald-300 rounded-lg pb-20'>
                <h1 className='text-center text-3xl font-bold py-6'>Frontend</h1>
                <div className='grid grid-cols-2 lg:flex px-10 gap-3'>
                    <div className='border-2 flex bg-white rounded-lg px-3 py-2 gap-2 hover:border-emerald-600 hover:shadow-2xl'>
                        <div className=''>
                            <img src={html} alt="" className='w-10' />
                        </div>
                        <p className='w-1/2 text-center font-bold'>HTML</p>
                    </div>
                    <div className='border-2  flex bg-white rounded-lg px-3 py-2 gap-2 hover:border-emerald-600 hover:shadow-2xl'>
                        <div className=''>
                            <img src={css} alt="" className='w-10' />
                        </div>
                        <p className='w-1/2 text-center font-bold'>CSS</p>
                    </div>
                    <div className='border-2  flex bg-white rounded-lg px-3 py-2 gap-2 hover:border-emerald-600 hover:shadow-2xl'>
                        <div className=''>
                            <img src={js} alt="" className='w-10' />
                        </div>
                        <p className='w-1/2 text-center font-bold'>JS</p>
                    </div>
                    <div className='border-2  flex bg-white rounded-lg px-3 py-2 gap-2 hover:border-emerald-600 hover:shadow-2xl'>
                        <div className=''>
                            <img src={tail} alt="" className='w-10' />
                        </div>
                        <p className=' text-center font-bold'>TailWind</p>
                    </div>
                    <div className='border-2  flex bg-white rounded-lg px-3 py-2 gap-2 hover:border-emerald-600 hover:shadow-2xl'>
                        <div className=''>
                            <img src={react} alt="" className='w-10' />
                        </div>
                        <p className='w-1/2 text-center font-bold'>React</p>
                    </div>

                </div>
            </div>
            {/*backend  */}
            <div className='bg-gradient-to-r from-emerald-300 to-emerald-100 rounded-lg pb-20'>
                <h1 className='text-center text-3xl font-bold py-6'>Backend</h1>
                <div className='grid grid-cols-2 lg:flex px-10 gap-3'>
                    <div className='border-2  flex bg-white rounded-lg px-3 py-2 gap-2 hover:border-emerald-600 hover:shadow-2xl'>
                        <div className=''>
                            <img src={mongo} alt="" className='w-10' />
                        </div>
                        <p className='w-1/2 text-center font-bold'>Mongodb</p>
                    </div>
                    <div className='border-2  flex bg-white rounded-lg px-3 py-2 gap-2 hover:border-emerald-600 hover:shadow-2xl'>
                        <div className=''>
                            <img src={ex} alt="" className='w-10' />
                        </div>
                        <p className='w-1/2 text-center font-bold'>Express</p>
                    </div>
                    <div className='border-2  flex bg-white rounded-lg px-3 py-2 gap-2 hover:border-emerald-600 hover:shadow-2xl'>
                        <div className=''>
                            <img src={node} alt="" className='w-10' />
                        </div>
                        <p className='w-1/2 text-center font-bold'>Node</p>
                    </div>
                    <div className='border-2  flex bg-white rounded-lg px-3 py-2 gap-2 hover:border-emerald-600 hover:shadow-2xl'>
                        <div className=''>
                            <img src={firebase} alt="" className='w-16' />
                        </div>
                        <p className=' text-center font-bold'>Firebase</p>
                    </div>
                   

                </div>
            </div>
        </div>
    );
};

export default Skill;