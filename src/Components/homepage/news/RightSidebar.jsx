import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSidebar = () => {
    return (
        <div>
           <h2 className=' font-bold text-lg mb-4'>Login With</h2> 
           <div className='flex flex-col gap-1'>
            <button className='btn border-blue-400 text-blue-400'><FaGoogle /> Login With Google</button>
           <button className='btn border-blue-400 text-blue-500'><FaGithub/> Login With Github</button>
           </div>
        </div>
    );
};

export default RightSidebar;