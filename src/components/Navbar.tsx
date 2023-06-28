'use client'
import React, {useEffect, useState} from 'react'
import Link from 'next/link';
import {navLinks, styles} from '@/constants';

const Navbar = () => {
    const [active, setActive] = useState('')
    const [toggle, setToggle] = useState(false)
    return (
        <nav className={`px-6 sm:px-16 w-full flex justify-center items-center fixed py-5 top-0 z-20 bg-sky-950`}>
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
                <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={()=>{
                        setActive("");
                        window.scrollTo(0,0);
                    }}
                >
                    <img src="/assets/logo.svg" alt="logo" className="w-9 h-9 object-contain"></img>
                    <p className="text-white text-lg font-bold cursor-pointer flex">
                        Jhonatan &nbsp;
                        <span className="sm:block hidden"> | Backend Developer</span>
                    </p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((link)=>(
                        <li key={link.id} className={`${
                            active===link.title
                                ? "text-white"
                                : "text-red"
                        } hover:text-white text-lg hover:font-medium cursor-pointer`}
                            onClick={()=>{
                                setActive(link.title)
                            }
                            }>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
                <div className="sm:hidden flex felx-1 justify-end items-center">
                    <img
                        src={toggle?"/assets/close.svg":"/assets/menu.svg"}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={()=>setToggle(!toggle)}
                    ></img>
                </div>
                <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20  right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                    <ul className="list-none flex flex-col justify-end items-start gap-4">
                        {navLinks.map((link)=>(
                            <li key={link.id} className={`${
                                active===link.title
                                    ? "text-white"
                                    : "text-red"
                            } font-poppins font-medium cursor-pointer text-[16px]`}
                                onClick={()=>{
                                    setToggle(!toggle)
                                    setActive(link.title)
                                }
                                }>
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar