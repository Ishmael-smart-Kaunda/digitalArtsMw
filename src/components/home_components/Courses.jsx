
export default function Courses({data}) {
    return (
        
        <article className=" course-card bg-bgSecondary rounded-xl shadow hover:shadow-lg  p-5">
                    <div className="relative h-40 rounded-md overflow-hidden ">
                        <img src={data.courseImg} className="w-full h-full object-cover opacity-90"></img>
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl drop-shadow">
                            {data.caption}
                        </div>
                    </div>
                    <h4 className="mt-4 font-semibold text-secondaryText">{data.courseName}</h4>
                    <p className="mt-2 text-sm text-secondaryText">{data.courseDesc}</p>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="text-xs text-slate-400">Duration: {data.duration} weeks</span>
                        <a href="#courses" className="text-indigo-600 text-sm">Learn more</a>
                    </div>
                </article>
    )
}