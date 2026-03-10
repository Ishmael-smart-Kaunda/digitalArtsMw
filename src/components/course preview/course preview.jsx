
import CourseModule from "./Module"
import gameVideo from "../../assets/videos/game videos/game.mp4"
import { useState } from "react"
import Outcome from "./outcome"

export default function CoursePreview({data}){
        
            const [expandedIds, setExpandedIds] = useState([])
            
            
            const toggleExpansion = (id) =>{
                  setExpandedIds((prev)=>
                      prev.includes(id)
                      ?prev.filter((item)=>item!==id)
                      :[...prev, id]
                  )
            }
            
            
            
           
            return(
                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 min-h-[90vh]">
                        <aside className="md:sticky top-16 col-span-1 w-full h-[80vh] md:h-[100vh] bg-slate-100 px-2 py-5">
                            <div className="w-full h-[40%] bg-gray-50 rounded-sm px-2">
                               {/*<img src={gameImg} className="w-full h-full object-cover" alt=""/>*/}
                              <video controls autoPlay muted loop     
                                    className="pointer-events-none w-full  mx-auto h-full object-cover rounded-sm"
                                    > 
                                <source src={data.videoFile} type="video/mp4"/>
                                </video>
                  
                            </div>
                            <div className="w-full mt-5">
                                <h2 className="text-[23px] text-slate-900 font-semibold"> Who is this for?</h2>
                                
                                <ul className="text-gray-500 text-[15px] space-y-2 px-5">
                                    { 
                                    data.audiences.map((audience)=>{
                                      return(
                                         <li key={audience.id} className="list-disc marker:text-indigo-800">
                                            {audience.audience}   
                                        </li>    
                                      )
                                     })}
                                </ul>

                            </div>
                        </aside>

                        <div className="md:col-span-2 py-5 md:py-18">
                            <h1 className=" text-2xl font-bold uppercase">{data.courseName} {/*Game Development*/}</h1>
                            <p className=" text-justify mx-auto font-normal py-5"> 
                                    {data.description}
                                    {/* */}
                            </p>
                            <h3 className="font-semibold text-primaryText text-[17px]">Course Overview</h3>
                           
                            <div className="w-full flex flex-col gap-5 py-4">
                                    
                                    {       
                                        data.modules.map((item)=>{
                                            
                                            return(   
                                                    <CourseModule
                                                        key={item.id}
                                                        moduleID={item.id}  
                                                        {...item}
                                                        isExpanded={expandedIds.includes(item.id)}
                                                        onToggle={() => toggleExpansion(item.id)}
                                                    
                                                    />
                                            )
                                    })}
                            </div>
                           
                            {/* program outcome section */}
                            <Outcome outcomes={data.outcomes}/>
                        </div>
                    </div>
              )
}