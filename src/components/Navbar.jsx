import {Link} from "react-router-dom";
import Logo from "../assets/Logo.png"
import logoDark from "../assets/logo/logo-dark.jpg"
import logoLight from "../assets/logo/logo-light.jpg"
import { useState , useEffect } from "react";


import { FiMenu, FiX , FiSun, FiMoon} from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

{/*sign in and sign up forms */}
import SignInForm from "./home page/home_components/signInForm";
import SignUpform from "./home page/home_components/SignUpForm";
import SignIn from "./home page/home_components/singIn";
import SignUp from "./home page/home_components/signUp";


export default function Navbar() {
    const NavLinks=[
        {id:1, linkName:"Home", linkTo: "/"},
        {id:2, linkName:"Courses", linkTo: "/Courses"},
        {id:3, linkName:"Team", linkTo: "/Team"},
        {id:4, linkName:"Contact", linkTo: "/Contact"}
    ]
    const Links=NavLinks.map(link => <Link key={link.id} to={link.linkTo}>
                                      <a onClick={()=>setOpen(false)} className="text-[18px] font-semibold text-primaryText hover:text-indigo-400 transition-colors duration-300 " >{link.linkName}</a>
                                    </Link>
                            )
    const [open, setOpen]=useState(false)
    const [showSignForm, setShowSignForm]=useState(false)
    const [theme, setTheme]=useState(localStorage.getItem('theme') || 'light')

    {/* show / hide signIn/Up component */}
    function toggleSignUp(){
        setShowSignForm(!showSignForm)
        console.log(showSignForm)
    }
     {/* singIn/SignUp form toggle */}
    const [signIn, setSignIn]=useState(true)
    const formToggle=()=>{
          setSignIn(!signIn)
     }

    function toggleTheme(){
        console.log('toggle theme button clicked')
        if(theme==='light'){
            setTheme('dark')
        }
        if(theme==='dark'){
            setTheme('light')
        }   
    }
    useEffect(()=>{
        localStorage.setItem('theme', theme)
        const currentTheme=localStorage.getItem('theme')
        if(currentTheme==='light'){
            document.documentElement.classList.add(currentTheme)
            document.documentElement.classList.remove('dark')
        }
        if(currentTheme==='dark'){
            document.documentElement.classList.add(currentTheme)
            document.documentElement.classList.remove('light')
        }
    },[theme])

    return(
            <>
                <header className={`fixed top-0  w-full z-1000 py-3 bg-bgrimary  shadow-sm ${theme==='dark'? 'bg-slate-900 border-b border-white/8': ' bg-white border-b border-white/3'}`}>
                    <div className=" max-w-6xl px-5 mx-auto flex items-center justify-between">
                        {/*logo */}
                        <span className=" flex items-center gap-3">
                           {/* <img src={Logo} alt="Digital Arts Academy MW logo" className="size-10 rounded-md object-contain ring-2 ring-black/10 bg-white"></img>
                            <div>
                             <h1 className="text-lg text-primaryText font-bold transition-colors duration-300">Digital Arts Academy <span className="text-sm font-semibold text-slate-500">MW</span></h1>
                             <p className="text-xs text-slate-500 -mt-1">Create • Learn • Shine</p>
                            </div>*/}
                            <img src={theme==='dark'?logoLight:logoDark} alt="logo" className="h-10"/>
                        </span>
                        {/* Navigation on wider screen */}
                        <nav className="  -translate-x-20 hidden md:flex items-center gap-4">
                              {Links}
                        </nav>

                        {/* navigation menu for mobile devices */}
                            <div className={`md:hidden flex flex-col items-center gap-7 absolute top-16 
                                ${open ? '':'translate-y-[-150%] opacity-0'} ${theme==='dark'? ' bg-slate-900': 'bg-white '} 
                                left-0 transition px-5 py-4 space-y-2 shadow-sm w-full h-[90vh] transition-colors duration-300`}>
                                    <nav className="flex flex-col items-center gap-7">
                                      {Links}
                                    </nav>

                                <button onClick ={()=>{setOpen(!open); setShowSignForm(!showSignForm)}}
                                    className="sticky top-[90%] cursor-pointer mx-auto flex flex-row justify-center text-white bg-gradient-to-r from-indigo-800 to-red-500/30 border border-white/10 gap-5 rounded-sm w-full md:w-[90%] p-2">
                                   <FaUser className="size-6"/> Sign In
                                </button>

                            </div>
                        

                        <button onClick={toggleTheme} id="dark-toggle" className={`hidden md:flex items-center justify-center size-10 rounded-md ring-1 ring-slate-600 ${theme==='dark' ?'hover:bg-slate-700 ring-slate-100':''} hover:bg-slate-100 transition-colors`} aria-label="Toggle dark mode">
                           { theme==='light' ?<FiMoon />:<FiSun className="text-white"/> }
                      </button>

                        <div className="md:hidden flex items-center gap-2">
                            <button onClick={toggleTheme} id="dark-toggle-mobile" className={`p-2 rounded-md ring-1 ring-slate-600 ${theme==='dark' ?'hover:bg-slate-700 ring-slate-100 transition-colors duration-300':''} hover:bg-slate-100 transition-colors duration-300`} aria-label="Toggle dark mode">
                              { theme==='light' ?<FiMoon />:<FiSun className="text-white" /> }
                            </button>
                            <button id="mobile-menu-btn" onClick={()=>setOpen(!open)} className={`p-2 rounded-md ring-1 ring-slate-200 ${theme==='dark'?'hover:bg-slate-700':''} hover:bg-slate-100 transition-colors duration-300`}>
                                {open ? (<FiX className={`${theme==='dark'?'text-white':''} hover:text-red-700`}/>) : <FiMenu className={`${theme==='dark'?'text-white hover:text-white':''} hover:text-gray-700`}/>}
                          </button>
                        </div>
                    </div>

                      {/*sign up form*/}
                    
                    <div className={`md:hidden absolute  ${ showSignForm & !open ? '':'z-100 translate-x-[150%]'}  top-16 translate-x- bg-slate-900  z-100 rounded-sm  px-5 py-10 w-full h-[100vh] transition-all duration-500 delay-1000`}>
                        <button onClick={toggleSignUp}  className="cursor-pointer relative w-full hover:scale-110 transition-transiform duration-500">
                            <AiOutlineClose className="size-7 text-red-600 translate absolute left-[95%] -top-10"/></button>
                        <div className="mx-auto w-fit p-2 rounded-full bg-gradient-o-b from-amber-950 to-white">
                            <FaUser className="size-10 text-white/50 w-ful"/>
                        </div>
                        
                        <div className={`relative flex border-t border-t-red-600/50 overflow-hidden rounded-xl min-h-[70vh]`}>
                            <SignIn signIn={signIn} formToggle={formToggle} />
                            <SignUp signIn={signIn} formToggle={formToggle}/>
                         </div>
                    </div>


                    
                </header>
            
            </>

    )
}