import NavBar from "./Navbar"
import { useState } from "react"

const Header = () => {

    const logo = "/logo.svg"
    const [navopen, setNavopen] = useState(false)
    return (
        <header className="fixed top-0 left-0 w-full z-40 flex items-center bg-gradient-to-b from-zinc-900 to-zinc-900/0">
            <div className="max-w-3xl w-full mx-auto px-4 flex items-center justify-between md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
                <h1>
                    <a 
                        href="/" 
                        className="logo"
                        >
                        <img 
                        src={logo}
                        width={40}
                        height={40}
                        alt="Felipe Amorim"
                        />
                    </a>
                </h1>
                
                <div className="relative md:justify-self-center">
                    <button className="menu-btn md:hidden md:justify-self-end" onClick={() => setNavopen((prev) => !prev)}>
                        <span className="material-symbols-rounded">
                            {navopen ? "close" : "menu"}
                        </span>
                    </button>
                    <NavBar navopen={navopen}/>
                </div>
                <a href="#contact" className="btn btn-secondary max-md:hidden md:justify-self-end">
                    contact me
                </a>
            </div>
        </header>
    )
}

export default Header