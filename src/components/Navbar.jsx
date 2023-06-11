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
import { Link } from 'react-scroll';

const linkClass = 'max-lg:text-base cursor-pointer text-black hover:bg-gradient-to-r from-teal-700 via-teal-400 to-green-500 rounded-3xl hover:text-white px-3 py-2 text-md font-bold hover:scale-90 ease-in duration-200';
const navDetail = [
    {
        id: 1,
        name: 'Beranda',
        to: 'beranda',
        icon: <AiOutlineHome size={20} />,
        linkClassName: 'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200',
        linkClass: 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium',
    },
    {
        id: 2,
        name: 'Tentang',
        to: 'tentang',
        icon: <GrProjects size={20} />,
        linkClassName: 'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200',
        linkClass: 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium',
    },
    {
        id: 3,
        name: 'Program',
        to: 'program',
        icon: <AiOutlineProject size={20} />,
        linkClassName: 'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 ease-in duration-200',
        linkClass: 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium',
    },
    {
        id: 4,
        name: 'Kontak',
        to: 'kontak',
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
                className='fixed top-4 right-4 z-[99]  md:hidden'
                size={28}
            />
            {nav ? (
                <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                    {navDetail.map((item) => (
                        <Link
                            key={item.id}
                            // href={item.href}
                            onClick={handleNav}
                            to={item.to}
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                            className={item.linkClassName}
                        >
                            {item.icon}
                            <span className='pl-4'>{item.name}</span>
                        </Link>
                    ))}
                </div>
            ) : (
                ''
            )}
            {/* Navbar Desktop Start */}
            <nav className="bg-white shadow-md fixed z-50 w-full">
                <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex">
                            <img
                                className="h-16 w-16"
                                src="/logo.png"
                                alt="Logo"
                            />
                            <div className='flex flex-col justify-center'>
                                <p className='text-teal-600 text-2xl max-sm:text-lg max-lg:text-lg font-extrabold font-Shojumaru'>Rumah Tahfidz</p>
                                <p className='text-teal-600 text-xl max-sm:text-sm max-lg:text-base font-Recursive font-bold'>Ummi Samsah</p>
                            </div>
                        </div>
                        <div className="max-md:hidden lg:ml-10">
                            <div className="flex space-x-4">
                                {navDetail.map((item) => (
                                    <Link
                                        key={item.id}
                                        // href={item.href}
                                        className={linkClass}
                                        to={item.to}
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={1000}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <div className='bg-black bg-gradient-to-r from-teal-700 via-teal-400 to-green-500 rounded-2xl'>
                                    
                                <a href='#' className='flex m-1 items-center bg-white p-1 px-4 rounded-xl font-bold hover:scale-110 ease-in duration-200'>
                                    Daftar
                                    {/* <AiOutlineArrowRight size={20} /> */}
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
