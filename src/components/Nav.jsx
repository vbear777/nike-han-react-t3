import { headernike } from "../assets/images";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants";

const Nav = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container ">
                <a href="/">
                    <img 
                        src={headernike} 
                        alt="Logo"
                        width={130}
                        height={29} />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a 
                                href={item.href}
                                className="relative font-montserrat font-bold text-xl text-midnight
                                            transition-transform duration-300 ease-out
                                            hover:translate-x-2

                                            after:content-['']
                                            after:absolute after:left-0 after:-bottom-2
                                            after:h-[3px] after:w-0
                                            after:bg-midnight
                                            after:transition-all after:duration-300
                                            hover:after:w-full"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="hidden max-lg:block">
                    <img 
                        src={hamburger} 
                        alt="Hamburger" 
                        width={25} 
                        height={25} 
                    />
                </div>
            </nav>
        </header>
    )
}

export default Nav;