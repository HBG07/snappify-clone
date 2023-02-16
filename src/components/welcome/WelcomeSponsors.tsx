import {FaHtml5} from 'react-icons/fa'
import {FaCss3} from 'react-icons/fa'
import {FaJs} from 'react-icons/fa'
import {FaJira} from 'react-icons/fa'
import {FaYarn} from 'react-icons/fa'

export default function WelcomeSponsors() {
    return (
        <div className="mt-24">
            <p className="text-center mb-10 text-gray-500 font-bold text-xl">Trusted by industry leaders around the globe</p>
            <div className="flex flex-wrap justify-center space-x-10">
                <div className='flex text-gray-500'><FaHtml5 size={50}/><p className='mt-3 ml-2 text-lg'>HTML5</p></div>
                <div className='flex text-gray-500'><FaCss3 size={50}/><p className='mt-3 ml-2 text-lg'>CSS3</p></div>
                <div className='flex text-gray-500'><FaJs size={50}/><p className='mt-3 ml-2 text-lg'>JavaScript</p></div>
                <div className='flex text-gray-500'><FaYarn size={50}/><p className='mt-3 ml-2 text-lg'>Yarn</p></div>
                <div className='flex text-gray-500'><FaJira size={50}/><p className='mt-3 ml-2 text-lg'>Jira</p></div>
            </div>
        </div>
    );
}