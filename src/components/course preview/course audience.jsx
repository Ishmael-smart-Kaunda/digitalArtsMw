

export default function Audience(){
           return(
                   <aside className="md:sticky top-16 col-span-1 w-full h-[80vh] md:h-[100vh] bg-slate-100 px-2 py-5">
                        <div className="w-full h-[40%] bg-gray-50 rounded-sm px-2">
                            {/*<img src={gameImg} className="w-full h-full object-cover" alt=""/>
                            <video controls autoPlay muted loop     
                                className="pointer-events-none w-full  mx-auto h-full object-cover rounded-sm"
                                > 
                            <source src={gameVideo} type="video/mp4"/>
                            </video>
                */}
                        </div>
                        <div className="w-full mt-5">
                            <h2 className="text-[23px] text-slate-900 font-semibold"> Who is this for?</h2>
                            <ul className="text-gray-500 text-[15px] space-y-2 px-5">
                                <li className="list-disc marker:text-indigo-800">Students interested in game design & interactive media</li>
                                <li className="list-disc marker:text-indigo-800">Aspiring developers & creators</li>
                                <li className="list-disc marker:text-indigo-800">Digital artists expanding into interactive content</li>
                                <li className="list-disc marker:text-indigo-800">Anyone passionate about building games</li> 
                            </ul>

                        </div>
                    </aside>
           )
}