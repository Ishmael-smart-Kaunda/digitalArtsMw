
import { FaFacebook,FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"
import { SiTiktok } from "react-icons/si"


export default function () {
     
    


    return (
        <footer className="bg-[#020617] text-white border-t border-white/10">
            <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <h4 className="font-bold">Digital Arts Academy MW</h4>
                    <p className="mt-2 text-sm text-slate-300">Creating opportunities for Malawian creatives.</p>
                    <p className="mt-3 text-xs text-slate-400">Habakkuk 2:2 • Philippians 4:13</p>
                   
                    <div className="mt-3">
                    <h5 className="font-semibold">Quick links</h5>
                    <ul className="w-1/2 md:w-[fit-content] mt-3 text-sm text-slate-300 space-y-2">
                        <li className="hover:text-indigo-300 "><a href="/">Home</a></li>
                        <li className="hover:text-indigo-300 "><a href="#courses">Courses</a></li>
                        <li className="hover:text-indigo-300 " ><a href="#team">Team</a></li>
                        <li className="hover:text-indigo-300 " ><a href="#contact">Contact</a></li>
                    </ul>
                    </div>
                </div>

                <div className="-mt-2">
                  <div>
                    <h5 className="font-semibold">Contact Us</h5>
                    <address className="flex flex-col gap-1 mt-2">
                    <span className="flex flex-row items-center gap-2 ">
                        <p> Phone : </p>
                        <a href="tel: +265890361889" className="text-amber-100 text-sm"> +265 890361889</a>  
                    </span> 

                    <span className="flex flex-row items-center gap-2">
                        <p>Email : </p>
                        <a href="mailto:digitalartsacademymw.register@gmail.com " className="text-amber-100 text-sm">digitalartsacademymw.register@gmail.com</a>
                    </span>   
                    </address>
                  </div>
                    <article className="mt-2
                     py-2" >
                    <h5 className="font-semibold">Follow Us</h5>
                    <div  className="mt-3 flex flex-row items-center gap-4">
                        <a href="https://web.facebook.com/profile.php?id=61586510541142" >
                           <FaFacebook className="h-[24px] w-[24px] transition-transform  hover:scale-110" />
                        </a>
                       < a href="https://www.instagram.com/digitalartacademymw/">
                           <FaInstagram className="h-[24px] w-[24px] transition-transform hover:scale-110" />
                       </a>
                       <a href="https://www.tiktok.com/@digitalartsacademy.mw?lang=en">
                        <SiTiktok className="h-[23px] w-[23px] transition-transform  hover:scale-110"  />
                       </a>
                           
                        <a href="https://www.youtube.com/channel/UC-tcfLP7qf_sDgAmStUSjWw">
                           <FaYoutube className="h-[25px] w-[25px] hover:scale-110"  />
                        </a>
                    </div>
                </article>
                </div>
                
                <div className=" w-full h-[200px] md:w-[300px] bg-white/40 text-slate-100 flex items-center justify-center text-lg"> 
            
             <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2267.4949588833306!2d35.02306444172996!3d-15.799592032770489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18d845006b9f1d99%3A0x3f28457121263266!2sGamers%20Planet!5e0!3m2!1sen!2smw!4v1768762796683!5m2!1sen!2smw" 
                    className="w-full h-full"
                    loading="lazy"
                    allowFullScreen=""  
                    referrerPolicy="no-referrer-when-downgrade">
               </iframe> 
                
                </div>
                 
                 
                
            </div>

            <div className="text-center text-xs text-slate-500 py-4">© <span id="year">2026</span> Digital Arts Academy MW — All rights reserved</div>
            
                    </footer>
    )
}