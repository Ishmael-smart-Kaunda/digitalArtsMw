



export default function Coursetrack({badges, courseImg, title, description, takeAways, tools}) {
    return (
        <article id="tracks" className="course-card bg-bgSecondary rounded-xl shadow hover:shadow-lg p-5 border border-borderColor">
          <div className="relative h-40 rounded-md overflow-hidden bg-slate-900">
            <img src={courseImg} alt="Digital drawing students" className="w-full h-full object-cover opacity-90"></img>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70"></div>
            <div className="absolute inset-0 flex items-start justify-between p-3 text-white">
              <span className="px-3 py-1 rounded-full bg-indigo-500/90 text-xs font-semibold">{badges.duration} weeks</span>
              <span className="px-3 py-1 rounded-full bg-white/15 text-xs">{badges.type}</span>
            </div>
          </div>
          <h3 className="mt-4 font-semibold text-lg text-primaryText ">{title}</h3>
          <p className="mt-2 text-sm text-secondaryText "> {description} </p>
          <ul className="mt-3 text-sm text-secondaryText space-y-2 list-disc pl-5 ">
            <li> {takeAways.takeAway1} </li>
            <li>{takeAways.takeAway2} </li>
            <li>{takeAways.takeAway3} </li>
          </ul>
          <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
            <span>Tools: {tools} </span>
            <a href="/" className="text-indigo-600 font-semibold">Preview</a>
          </div>
        </article>
    )
}