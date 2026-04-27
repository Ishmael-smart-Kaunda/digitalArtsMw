import { HiChevronDown } from "react-icons/hi"
import gameDevFundamentals from "../../assets/courses data/visual development/gameDevFundamentals"

export default function CourseOutline({module, moduleLessons}){                                   
                                    return(
                                           <>
                                              <article className="overflow-hidden py-7 px-3 text-[20px] text-gray-500 font-semibold  border border-gray-300/50 cursor-pointer gap-3">
                                                    <div className="flex flex-row justify-between align-center">
                                                        <h3 className="uppercase text-[16px]">{module}</h3> <HiChevronDown className={`size-6`}/>
                                                    </div>
                                                    <ul className={`opacity-100 h-auto overflow-hidden text-[16px] font-light px-7`}>
                                                            {
                                                                moduleLessons.map((item)=>{
                                                                    return(
                                                                        <li key={item.id}
                                                                            className="list-[circle] marker:text-red-950 marker:text-[19px]"
                                                                        >
                                                                            {item.lesson}
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                    </ul>

                                              </article>
                                           
                                           </>
                                    )
}