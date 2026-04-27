
import { FcGoogle } from "react-icons/fc"
import SignUpform from "./SignUpForm"
import { useState } from "react"
export default function SignUp({signIn, formToggle}){ 
     return(
         
        <aside className={`${signIn ? 'translate-x-full ': '-translate-x-0'} absolute inset-0 md:left-[20%]
            shadow-sm bg-gradient-to-tr from-slate-950 to-red-950/85 rounded-xl rounded-xl md:w-8/10 text-slate/90  h-[7/10] transition-all duration-1000`}>
            <div className="  p-5 mt-2 md:mt-0 ">
              <h3 className="text-lg font-semibold text-secondaryText">Create Account</h3>
              <p className="text-sm text-slate-400 mt-2">Limited seats. <span className="font-bold text-green-600 text-base">FAST</span> / low-cost digital arts courses in 2026.</p>

              <SignUpform />
              <p className="text-xs text-slate-400 mt-1">Already have an account? 
                <strong className="cursor-pointer underline hover:text-indigo-400" onClick={formToggle}>  Sign In</strong>
              </p>
              <p className="text-center text-secondaryText py-3 font-semibold py-3"> OR</p>
              <button className="cursor-pointer flex flex-row justify-center gap-1 py-2  
                                 bg-zinc-400/10
                                 hover:bg-zinc-400/15
                                 backdrop-blur-sm
                                 w-full
                                 border border-zinc-300/30 
                                 text-primaryText font-bold text-sm py-2 rounded-md"> 
                <FcGoogle className="size-5 my-auto"/><span>Sign Up with Google</span>
              </button>
            </div>
          </aside>  
       
     )
}