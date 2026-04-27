import { HiChevronDown, HiChevronRight } from "react-icons/hi"
import { motion } from "framer-motion"
import { useState } from "react"

const CourseModule = ({moduleName, moduleID, lesson, practice, project, outcome, isExpanded, onToggle})=>{
                    
                    const [expandedSection, setExpandedSections]=useState({})

                            
                    }
                     return(
                           {/*<article
                                     
                                    className={` overflow-hidden py-7 
                                             px-3 text-[20px] text-gray-500 font-semibold  border 
                                             border-gray-300/50 cursor-pointer gap-3 `
                                             }
                                            
                                             >
                                    <div className="flex flex-row justify-between align-center" 
                                        
                                         >
                                        <h2 className="uppercase text-[16px]">Name</h2>
                                        <HiChevronDown  
                                         className={``}
                                        />
                                    </div> 

                                         {/*lesson section / What students will learn 
                                    <div className={`${isExpanded ? 'opacity-100':'opacity-0'}`} >
                                        <span className={`'lesson')`}>
                                            <HiChevronRight 
                                            
                                            className={`'} rounded-full border`}
                                            />
                                            
                                        </span> 
                                            
                                             {/*a list of learning criteria under lesson section
                                        <ul className={`'} overflow-hidden text-[16px] font-light px-7`} >
                                            
                                        </ul>

                                    </div>

                                    
                                    {/*practie section / What students practive 

                                    {practice && <div className={`${isExpanded ? 'opacity-100':'opacity-0'}`}>
                                        <span className={`inline-flex gap-2 items-center `} onClick={()=>toggleSection(moduleID, 'practice')}>
                                            <HiChevronRight 
                                            
                                            className={`${expandedSection[moduleID]?.practice ?'rotate-90 text-indigo-800' : ''} rounded-full border`}
                                            />
                                            {practice.heading}
                                        </span> 
                                            
                                             {/*a list of learning criteria under lesson section
                                        <ul className={`${expandedSection[moduleID]?.practice ?'opacity-100 h-auto':'opacity-0 h-1'} overflow-hidden text-[16px] font-light px-7`} >
                                            {practice.practices.map(practice=>{
                                                  
                                                  return(
                                                         <li 
                                                            key={practice.id}
                                                            className="list-[circle] marker:text-emerald-800 marker:text-[19px]"
                                                            >
                                                            {practice.practice}
                                                         </li>
                                                        )
                                            })}
                                        </ul>

                                    </div>}

                                      {/*project section / What students will create      
                                    <div 
                                        className={``}
                                     >
                                        <span className={``}>    
                                            <HiChevronRight
                                              
                                             className={``} 
                                            />
                                            {project.heading}
                                        </span> 

                                        {/*a list of students projects under section 
                     
                                        
                                    </div>

                                    {/*outcome section     
                                    <div 
                                        className={`${isExpanded ? 'opacity-100':'opacity-0'} transition-all duration-500`}
                                     >
                                        <span className={}>    
                                            <HiChevronRight 
                                            
                                            className={`${expandedSection[moduleID]?.outcome ?'rotate-90 text-indigo-800' : ''} rounded-full border`} 
                                           
                                            />
                                            {outcome.heading}
                                        </span> 
                                         
                                          {/*a list of outcomes under out section *
                                        
                                    </div>
                                    
                            </article>*/}
                    )


export default CourseModule