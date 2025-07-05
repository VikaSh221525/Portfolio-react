import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navlinks } from '../../constants';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false); // Auto-close on link click
    };

    return (
        <nav className="w-full px-8 lg:px-20 py-6 flex justify-between items-center text-white">
            {/* Logo */}
            <div className="logo h-8">
                <img className="h-full object-cover" src="/NameLogoWhite.png" alt="Logo" />
            </div>

            {/* Hamburger Button (mobile only) */}
            <div className="lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative w-[27px] h-5 flex flex-col justify-between items-center lg:hidden z-[1000]"
                >
                    {/* Top line */}
                    <span
                        className={`w-full h-[2px] bg-white transform transition duration-300 ease-in-out
                        ${isOpen ? 'rotate-45 translate-y-[9px]' : ''}`}
                    ></span>
                    {/* Middle line */}
                    <span
                        className={`w-full h-[2px] bg-white transition-all duration-300 ease-in-out
                        ${isOpen ? 'opacity-0' : ''}`}
                    ></span>
                    {/* Bottom line */}
                    <span
                        className={`w-full h-[2px] bg-white transform transition duration-300 ease-in-out
                        ${isOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}
                    ></span>
                </button>
            </div>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex gap-10">
                {Navlinks.map((link) => (
                    <li className="list-none text-lg" key={link.id}>
                        <a
                            href={`#${link.id.toLowerCase()}`}
                            className={`relative group ${link.id === 'Contact' ? 'ml-[20rem]' : ''}`}
                        >
                            {link.title}
                            <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-amber-50 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    </li>
                ))}
            </ul>

            {/* Mobile Nav (animated dropdown) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        className="flex flex-col gap-6 absolute top-16 left-0 w-full bg-[#121214]/80 backdrop-blur-md p-6 lg:hidden z-50"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {Navlinks.map((link) => (
                            <li className="list-none text-lg" key={link.id}>
                                <a
                                    href={`#${link.id.toLowerCase()}`}
                                    onClick={handleLinkClick}
                                    className="relative group"
                                >
                                    {link.title}
                                    <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-amber-50 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;



// import { Navlinks } from '../../constants'