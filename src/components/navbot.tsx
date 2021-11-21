import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBot() {
    return (
        <div>
            <div className='flex flex-row justify-around w-full list-none items-center h-16'>
                <li className='hover:text-red-600 hover:shadow-xl'><Link to=''>Home</Link></li>
                <li className='hover:text-red-600 hover:shadow-xl'><Link to='/trade'>Trade</Link></li>
                <li className='hover:text-red-600 hover:shadow-xl'><Link to='/teams'>Teams</Link></li>
                <li className='hover:text-red-600 hover:shadow-xl'><Link to='/about'>About</Link></li>
            </div>
        </div>
    )
}
