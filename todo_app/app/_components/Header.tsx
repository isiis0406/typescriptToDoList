import Link from 'next/link'
import React from 'react'
import { SiTodoist } from "react-icons/si";
import { IoAddCircleSharp } from "react-icons/io5";

const Header = () => {
    return (
        <div className='flex justify-center items-center mt-24 gap-24'>
            {/* Logo */}
            <div>
                <h1 className=' text-lg font-bold'>
                    <Link href='/'>
                        <SiTodoist className='inline-block text-4xl text-slate-500' />
                        <span className=' text-rose-100 pl-4'>To do</span>
                    </Link>
                </h1>
            </div>
            {/* Nav */}
            <nav>
                <ul className='flex space-x-4'>
                    <Link href='/todo/add'>
                        <li className=' bg-slate-500 p-2 rounded-2xl hover:bg-slate-700 transition-all'>
                            <IoAddCircleSharp className='inline-block text-2xl' />
                        </li>
                    </Link>
                    <Link href='/'>
                        <li className=' bg-slate-500 p-2 rounded-2xl hover:bg-slate-700 transition-all'>Profil</li>
                    </Link>

                </ul>
            </nav>
        </div>
    )
}

export default Header