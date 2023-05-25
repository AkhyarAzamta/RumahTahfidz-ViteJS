import React from 'react';
import { useState } from 'react';
import {
    AiOutlineMenu,
    AiOutlineHome,
    AiOutlineProject,
    AiOutlineMail,
    AiOutlineArrowRight
} from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs'
import { GrProjects } from 'react-icons/gr'

const linkClass = 'text-teal-600 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-bold hover:scale-90 ease-in duration-200';
const navDetail = [
    {
        id: 1,
        name: 'Beranda',
        href: '#main',
        icon: <AiOutlineHome size={20} />,
        linkClassName: 'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200',
        linkClass: 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium',
    },
    {
        id: 2,
        name: 'Tentang',
        href: '#main',
        icon: <GrProjects size={20} />,
        linkClassName: 'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200',
        linkClass: 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium',
    },
    {
        id: 3,
        name: 'Program',
        href: '#main',
        icon: <AiOutlineProject size={20} />,
        linkClassName: 'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200',
        linkClass: 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium',
    },
    {
        id: 4,
        name: 'Kontak',
        href: '#main',
        icon: <BsPerson size={20} />,
        linkClassName: 'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200',
        linkClass: 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium',
    }
    // add more items here
];

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <AiOutlineMenu
                onClick={handleNav}
                className='absolute top-4 right-4 z-[99] md:hidden'
            />
            {nav ? (
                <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                    {navDetail.map((item) => (
                        <a
                            key={item.id}
                            href={item.href}
                            className={item.linkClassName}
                        >
                            {item.icon}
                            <span className='pl-4'>{item.name}</span>
                        </a>
                    ))}
                </div>
            ) : (
                ''
            )}
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                            <div className="flex">
                                <img
                                    className="h-16 w-16"
                                    src="/logo.png"
                                    alt="Logo"
                                />
                                <div>
                                <p className='text-teal-600 text-2xl font-extrabold font-Shojumaru'>Rumah Tahfidz</p>
                                <p className='text-teal-600 text-xl font-Recursive font-bold'>Ummi Samsah</p>
                                </div>
                            </div>
                            <div className="hidden lg:block lg:ml-10">
                                <div className="flex space-x-4">
                                    {navDetail.map((item) => (
                                        <a
                                            key={item.id}
                                            href={item.href}
                                            className={linkClass}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                    <a href='#' className='flex items-center bg-teal-400 p-2 rounded-md font-bold hover:scale-110 ease-in duration-200'>
                                            Daftar
                                    <AiOutlineArrowRight size={20}/>
                                    </a>
                                </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Services
                </a>
                {/* Tambahkan item menu lainnya di sini 
              </div>
            </div> 
                */}
            {/* <div className='md:block hidden fixed top-[5%] z-10'>
                <div className='flex flex-col'>
                {navDetail.map((item) => (
                    <a
                    key={item.id}
                    href={item.href}
                    className={item.linkClass}
                    >
                        {item.icon}
                    </a>
                ))}
                </div>
            </div> */}
        </div>
    );
};

export default Navbar;
