import React from 'react'
import Image from 'next/image'; 
import { MagnifyingGlassIcon,BeakerIcon, UserCircleIcon } from '@heroicons/react/24/outline';
function Header() {
  return <header>
    <div className='flex flex-col md:flex-row items-center p-5 bg-gray-500/10'>
        <Image 
        src="https://links.papareact.com/c2dd5" 
        width={300} 
        height={100} 
        alt="logo"
        className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />

<div>
        {/* Search Bar */}
        <form className='flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial'>
       {/*} <MagnifyingGlassIcon className="h-6 w-6 mx-1 stroke-orange-400" /> */}
            <input type="text" className='p-2 flex-1 outline-none'/>
            <button hidden>Search</button>
        </form>

        {/* Avatar */}

    </div>
    </div>
    </header>;

}

export default Header
