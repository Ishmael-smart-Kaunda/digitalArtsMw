import { HiChevronDown, HiChevronRight } from "react-icons/hi"
import { motion } from "framer-motion"
import { useState } from "react"

const CourseModule = ({moduleName, moduleID, lesson, practice, project, outcome, isExpanded, onToggle})=>{
                    
                    const [expandedSection, setExpandedSections]=useState({})
                    const toggleSection =(moduleId, section)=>{
                            setExpandedSections((prev)=>({
                                    ...prev,
                                    [moduleId]:{
                                    ...prev[moduleId],
                                    [section]:!prev[moduleId]?.[section]
                                    },
                                
                            }))
                            console.log("Lesson objet" + lesson)
                    }
                     return(
                           <article
                                     
                                    className={`${isExpanded ? 'h-auto':'h-23'} overflow-hidden py-7 
                                             px-3 text-[20px] text-gray-500 font-semibold  border 
                                             border-gray-300/50 cursor-pointer gap-3 `
                                             }
                                            
                                             >
                                    <div className="flex flex-row justify-between align-center" 
                                         onClick={onToggle}
                                         >
                                        <h2 className="uppercase text-[16px]">{moduleName}</h2>
                                        <HiChevronDown  
                                         className={`${isExpanded ? '-rotate-180':''} bg-zinc-100 size-8 rounded-sm`}
                                        />
                                    </div> 

                                         {/*lesson section / What students will learn */}
                                    <div className={`${isExpanded ? 'opacity-100':'opacity-0'}`} >
                                        <span className={`inline-flex gap-2 items-center `} onClick={()=>toggleSection(moduleID, 'lesson')}>
                                            <HiChevronRight 
                                            
                                            className={`${expandedSection[moduleID]?.lesson ?'rotate-90 text-indigo-800' : ''} rounded-full border`}
                                            />
                                            {lesson.heading}
                                        </span> 
                                            
                                             {/*a list of learning criteria under lesson section */}
                                        <ul className={`${expandedSection[moduleID]?.lesson ?'opacity-100 h-auto':'opacity-0 h-1'} overflow-hidden text-[16px] font-light px-7`} >
                                            {lesson.criteria.map(criterion=>{
                                                  
                                                  return(
                                                         <li 
                                                            key={criterion.id}
                                                            className="list-[circle] marker:text-emerald-800 marker:text-[19px]"
                                                            >
                                                            {criterion.criterion}
                                                         </li>
                                                        )
                                            })}
                                        </ul>

                                    </div>

                                    
                                    {/*practie section / What students practive */}

                                    {practice && <div className={`${isExpanded ? 'opacity-100':'opacity-0'}`}>
                                        <span className={`inline-flex gap-2 items-center `} onClick={()=>toggleSection(moduleID, 'practice')}>
                                            <HiChevronRight 
                                            
                                            className={`${expandedSection[moduleID]?.practice ?'rotate-90 text-indigo-800' : ''} rounded-full border`}
                                            />
                                            {practice.heading}
                                        </span> 
                                            
                                             {/*a list of learning criteria under lesson section */}
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

                                      {/*project section / What students will create */}      
                                    <div 
                                        className={`${isExpanded ? 'opacity-100': 'opacity-0'}`}
                                     >
                                        <span className={`inline-flex gap-2 items-center`} onClick={()=>toggleSection(moduleID, 'project')}>    
                                            <HiChevronRight
                                              
                                             className={`${expandedSection[moduleID]?.project ?'rotate-90 text-indigo-800' : ''} rounded-full border`} 
                                            />
                                            {project.heading}
                                        </span> 

                                        {/*a list of students projects under section */}
                                        <ul className={`${expandedSection[moduleID]?.project ?'opacity-100 h-auto':'opacity-0 h-1'} overflow-hidden text-sm font-light px-7`} >
                                            {project.projects.map(project=>{
                                                  
                                                  return(
                                                         <li 
                                                            key={project.id}
                                                            className="list-[circle] marker:text-emerald-800 marker:text-[19px]"
                                                            >
                                                            {project.project}
                                                         </li>
                                                        )
                                            })}
                                        </ul>
                                        
                                    </div>

                                    {/*outcome section */}      
                                    <div 
                                        className={`${isExpanded ? 'opacity-100':'opacity-0'} transition-all duration-500`}
                                     >
                                        <span className={`inline-flex gap-2 items-center`} onClick={()=>toggleSection(moduleID, 'outcome')}>    
                                            <HiChevronRight 
                                            
                                            className={`${expandedSection[moduleID]?.outcome ?'rotate-90 text-indigo-800' : ''} rounded-full border`} 
                                           
                                            />
                                            {outcome.heading}
                                        </span> 
                                         
                                          {/*a list of outcomes under out section */}
                                          <ul className={`${expandedSection[moduleID]?.outcome ?'opacity-100 h-auto':'opacity-0 h-1'} overflow-hidden text-sm font-light px-7`} >
                                            {outcome.outcomes.map(outcome=>{
                                                  
                                                  return(
                                                         <li 
                                                            key={outcome.id}
                                                           className="list-[circle] marker:text-emerald-800 marker:text-[19px]"
                                                            >
                                                            {outcome.outcome}
                                                         </li>
                                                        )
                                            })}
                                        </ul>
                                    </div>
                                    
                            </article>
                    )
}

export default CourseModule