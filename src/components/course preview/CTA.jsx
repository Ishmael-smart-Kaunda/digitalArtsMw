import { FcGoogle } from "react-icons/fc"
import { FaCreditCard } from "react-icons/fa"
import SignUpform from "../home_components/SignUpForm"

export default function CTA(){
       return(
               <section className='max-w-6xl mx-auto px-6 py-14'>
                <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-amber-400 text-white p-8 shadow-xl flex flex-col md:flex-row items-left md:items-center justify-between gap-6">
                    <div>
                      <p className="uppercase text-xs tracking-[0.2em] text-white/90">Ready ?</p>
                      <h3 className="text-2xl font-bold mt-1">Join the first Digital Arts Academy cohort</h3>
                      <p className="text-sm text-white/90 mt-2">Tell us which track you want, and we’ll reserve your spot</p>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap  md:flex-nowrap">
                      <a href="#" className="px-5 py-3 whitespace-nowrap w-full md:w-[fit content] text-center rounded-md bg-white text-indigo-700 font-semibold shadow">Enroll Now</a>
                      <a href="/" className="px-5 py-3 whitespace-nowrap w-full md:w-[fit content] text-center rounded-md border border-white/40 text-white/90 hover:bg-white/10">Back to Home</a>
                    </div>
                </div>

                 {/*overlay*/}
                 <div className="fixed z-10 top-17 left-0 w-full h-[100vh] bg-black/80"></div>
                  <article className="fixed top-20 left-[50%] z-100 translate-x-[-50%] w-6/10 md:w-3/10 bg-bgSecondary p-5 mt-2 md:mt-0 ">
                       
                        <h3 className="text-lg font-semibold text-secondaryText">Billing Information</h3>
                        <p className="text-sm text-slate-400 mt-2">Limited seats. <span className="font-bold text-green-600 text-base">FAST</span> / low-cost digital courses in 2026.</p>
                        
                        <form>
                         <input 
                                type="text"
                                name="username" 
                                placeholder="Your name" 
                                
                                required 
                                className="my-3 w-full px-3 py-2 border border-inputBorder  placeholder: text-placeholder bg-bgSecondary focus:outline-none"
                        />
                        <select 
                                name="country"
                                required
                                className="my-3 text-[1rem] w-full max-w-full overflow-hidden px-3 py-2  border border-inputBorder  placeholder: text-placeholder bg-bgSecondary focus:outline-none"
                        
                        
                        >
                                <option value="" className=" border border-inputBorder  placeholder: text-placeholder bg-bgSecondary focus:outline-none" >select your country</option>
                                <option className="">Malawi</option>
                                <option   >Zambia</option>
                                <option>Tanizania</option>
                        </select>
                        </form>

                        <h3 className="text-secondaryText font-semibold py-3">Payment Methods</h3>
                        <div className="w-full h-50 border border-inputBorder p-3 text-[13px] font-semibold">
                          <h3 className="text-indigo-600 font-bold inline-flex gap-3 mb-2"><FaCreditCard className="size-5"/> Card</h3>
                          <form>
                            <fieldset>
                                <label className="text-secondaryText text-[12px]">Card Number</label>
                                <input 
                                        type="text"
                                        name="username" 
                                        placeholder="1243 1265 1256 1256" 
                                        
                                        required 
                                        className="my-3 w-full  p-1 border border-inputBorder placeholder:text-[12px] placeholder:font-semibold placeholder:text-placeholder bg-bgSecondary focus:outline-none"
                               />
                            </fieldset>
                            <div className="flex flex-row justify-between gap-2">
                                <fieldset>
                                <label className="text-secondaryText text-[12px]">Expiration Date</label>
                                <input 
                                        type="text"
                                        name="" 
                                        placeholder="MM/YY" 
                                        
                                        required 
                                        className="my-3 w-full  p-1 border border-inputBorder placeholder:text-[12px] placeholder:font-semibold placeholder:text-placeholder bg-bgSecondary focus:outline-none"
                               />
                            </fieldset>
                            <fieldset>
                                <label className="text-secondaryText text-[12px]">Security Code</label>
                                <input 
                                        type="text"
                                        name="" 
                                        placeholder="ISK" 
                                        
                                        required 
                                        className="my-3 w-full  p-1 border border-inputBorder placeholder:text-[12px] placeholder:font-semibold placeholder:text-placeholder bg-bgSecondary focus:outline-none"
                               />
                            </fieldset>
                                
                            </div> 


                          </form>       
                        
                        
                        </div>
                        
                        <button className="flex flex-row justify-center gap-1 py-2 bg-indigo-600 hover:bg-indigo-700 w-full text-white font-bold text-sm py-2 my-3"> 
                                <FcGoogle className="size-5 my-auto"/><span>Pay Now</span>
                        </button>
                      
                </article> 




              </section>



       )
}