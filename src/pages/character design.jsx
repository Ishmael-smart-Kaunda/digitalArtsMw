
import characterdesignData from "../assets/courses data/visual development/character design"
import CourseOutline from "../components/course preview/course outline"



export default function CharacterDesign(){
                                    return(
                                    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 min-h-[90vh]">
                                    <aside className="md:sticky top-16 col-span-1 w-full h-[80vh] md:h-[100vh] bg-slate-100 px-2 py-5">
                                        <div className="w-full h-[40%] bg-gray-50 rounded-sm px-2">
                                        {/*<img src={gameImg} className="w-full h-full object-cover" alt=""/>*/}
                                    
                            
                                        </div>
                                        <div className="w-full mt-5">
                                            <h2 className="text-[23px] text-slate-900 font-semibold"> Who is this for?</h2>
                                            
                                            <ul className="text-gray-500 text-[15px] space-y-2 px-5">
                                                
                                            </ul>

                                        </div>
                                    </aside>

                                    <div className="md:col-span-2 py-5 md:py-18">
                                        <h1 className=" text-2xl font-bold uppercase">Introduction to Dynamic skethcing</h1>
                                        <p className=" text-center mx-auto font-normal py-5"> 
                                                An 8-week course utilizing observational drawing to understand how to see the
                                                world for the creation of design and illustration; develop strong foundation
                                                sketching skills through observation
                                        </p>
                                        <h3 className="font-semibold text-primaryText text-[17px]">Course Overview</h3>
                                    
                                        <div className="w-full flex flex-col gap-5 py-4">
                                                
                                                {       
                                                    characterdesignData.map((item)=>{
                                                        
                                                        return(   
                                                                <CourseOutline
                                                                    key={item.id}
                                                                    moduleID={item.id}  
                                                                    {...item}
                                                                    
                                                                
                                                                />
                                                        )
                                                })}
                                        </div>
                                    
                                    </div>
                                </div>
                 )
}