
import {useRef, useEffect } from "react"
export default function Outcome({outcomes}){
         
        const containerRef=useRef(null)
        useEffect(() => {
            const container = containerRef.current;

            const interval = setInterval(() => {
                if (!container) return;

                if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                container.scrollLeft = 0;
                } else {
                container.scrollLeft += 1;
                }
            }, 18);
            return () => clearInterval(interval);
            }, []);

       return(
              <section className="w-full h-70 rounded-lg shadow-gray-300 shadow-md pt-15 px-4">
                <h1 className="font-bold py-3">Program Outcomes</h1>
                <div 
                    ref={containerRef}
                    className="flex flex-row gap-3 w-full h-fit overflow-x-scroll scrollbar-thin px-1 rounded-lg ">
                        
                        {outcomes.map((item)=>{
                                return(
                                <div className="bg-slate-900 h-40 min-w-1/2 rounded-lg p-4 text-white
                                     key={item.id}
                                ">
                                    <h2 className="text-lg">{item.outcome}</h2>
                                </div> 
                              )})
                        }

                </div>
              </section>
       )
}