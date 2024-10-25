import html from '../assets/icon-1.png'
import css from '../assets/icon-2.png'
import js from '../assets/icon-3.png'
import tail from '../assets/tailwind2.png'
import react from '../assets/icon-6.png'
import mongo from '../assets/mongo.png'
import ex from '../assets/ex.png'
import node from '../assets/node.png'
import firebase from '../assets/firebase_logo.png'
import redux from '../assets/redux.png'
import native from '../assets/native.png'

const Skill = () => {
    return (
        <div className='lg:grid lg:grid-cols-2 gap-10'>
    {/* Frontend Section */}
    <div className='mb-10 lg:mb-0 bg-slate-800 rounded-lg shadow-md pb-10'>
        <h1 className='text-center text-3xl font-bold py-6 text-gray-100'>Frontend</h1>
        <div className='lg:flex flex-wrap px-10 gap-4 justify-center '>
            {/* HTML */}
            <div className='flex items-center bg-gray-600 text-gray-100 rounded-lg p-4 hover:bg-gray-500 transition mb-1 lg:mb-0 mb-1 lg:mb-0'>
                <img src={html} alt="HTML" className='w-10 h-10' />
                <p className='ml-4 text-lg font-semibold'>HTML</p>
            </div>
            {/* CSS */}
            <div className='flex items-center bg-gray-600 text-gray-100 rounded-lg p-4 hover:bg-gray-500 transition mb-1 lg:mb-0'>
                <img src={css} alt="CSS" className='w-10 h-10' />
                <p className='ml-4 text-lg font-semibold'>CSS</p>
            </div>
            {/* JavaScript */}
            <div className='flex items-center bg-gray-600 text-gray-100 rounded-lg p-4 hover:bg-gray-500 transition mb-1 lg:mb-0'>
                <img src={js} alt="JavaScript" className='w-10 h-10' />
                <p className='ml-4 text-lg font-semibold'>JavaScript</p>
            </div>
            {/* Tailwind */}
            <div className='flex items-center bg-gray-600 text-gray-100 rounded-lg p-4 hover:bg-gray-500 transition mb-1 lg:mb-0'>
                <img src={tail} alt="Tailwind" className='w-10 h-10' />
                <p className='ml-4 text-lg font-semibold'>Tailwind</p>
            </div>
            {/* React */}
            <div className='flex items-center bg-gray-600 text-gray-100 rounded-lg p-4 hover:bg-gray-500 transition mb-1 lg:mb-0'>
                <img src={react} alt="React" className='w-10 h-10' />
                <p className='ml-4 text-lg font-semibold'>React</p>
            </div>
            <div className='flex items-center bg-gray-600 text-gray-100 rounded-lg p-4 hover:bg-gray-500 transition mb-1 lg:mb-0'>
                <img src={redux} alt="Redux" className='w-10 h-10' />
                <p className='ml-4 text-lg font-semibold'>Redux</p>
            </div>
            <div className='flex items-center bg-gray-600 text-gray-100 rounded-lg p-4 hover:bg-gray-500 transition mb-1 lg:mb-0'>
                <img src={native} alt="Native" className='w-10 h-10' />
                <p className='ml-4 text-lg font-semibold'>React Native</p>
            </div>
        </div>
    </div>

    {/* Backend Section */}
    <div className='bg-slate-800 rounded-lg shadow-md pb-10'>
        <h1 className='text-center text-3xl font-bold py-6 text-gray-100'>Backend</h1>
        <div className='lg:flex flex-wrap px-10 gap-4 justify-center'>
            {/* MongoDB */}
            <div className='flex items-center bg-gray-600 text-gray-100 rounded-lg p-4 hover:bg-gray-500 transition mb-1 lg:mb-0'>
                <img src={mongo} alt="MongoDB" className='w-10 h-10' />
                <p className='ml-4 text-lg font-semibold'>MongoDB</p>
            </div>
            {/* Express */}
            <div className='flex items-center bg-gray-600 text-gray-100 rounded-lg p-4 hover:bg-gray-500 transition mb-1 lg:mb-0'>
                <img src={ex} alt="Express" className='w-10 h-10' />
                <p className='ml-4 text-lg font-semibold'>Express</p>
            </div>
            {/* Node */}
            <div className='flex items-center bg-gray-600 text-gray-100 rounded-lg p-4 hover:bg-gray-500 transition mb-1 lg:mb-0'>
                <img src={node} alt="Node.js" className='w-10 h-10' />
                <p className='ml-4 text-lg font-semibold'>Node.js</p>
            </div>
            {/* Firebase */}
            <div className='flex items-center bg-gray-600 text-gray-100 rounded-lg p-4 hover:bg-gray-500 transition mb-1 lg:mb-0'>
                <img src={firebase} alt="Firebase" className='w-14 h-14' />
                <p className='ml-4 text-lg font-semibold'>Firebase</p>
            </div>
        </div>
    </div>
</div>

    );
};

export default Skill;