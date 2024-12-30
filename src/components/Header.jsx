import { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from '../assets/images/rdkw.jpg'

export default function Header() {
    const[toggle, setToggle] = useState(false);

    const menus = [
        {
            "id" : "#intro",
            "item" : "Home"
        },
        {
            "id" : "#about",
            "item" : "About"
        },
        {
            "id" : "#project",
            "item" : "Project"
        },
        {
            "id" : "#resume",
            "item" : "Resume"
        },
        {
            "id" : "#contact",
            "item" : "Contact"
        },
    ]

  return (
    <header className="flex justify-between px-5 py-4 z-10 fixed w-full bg-color ">
        <a className="font-bold text-danger" href="#">
            {/* <p className="text-gray-700">Dhibakaran R</p> */}
            <img src={logo} className="logo" alt="logo" />
        </a>

        <nav className="hidden md:block">

            <ul className="flex gap-8">
                
                {menus.map((items) => {
                    return (
                        <li key={items}><a href={items.id}>{items.item}</a></li>
                    )

                })}
                
            </ul>
            
        </nav>

       {toggle && <nav className="block md:hidden ">

            <ul className="flex flex-col mobile-nav">

                {menus.map((items) => {
                    return (
                        <li onClick={() => setToggle(!toggle)}><a href={items.id}>{items.item}</a></li>
                    )

                })}
            </ul>

        </nav>}

        <button onClick={() => setToggle(!toggle)} className="block md:hidden"><FaBars className=" text-white h-5 font-bold bar"></FaBars></button>
    </header>
  )
}
