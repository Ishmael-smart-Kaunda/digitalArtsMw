




export default function Deliverables() {
    return(
        <section className="max-w-6xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl shadow card-shadow border border-borderColor">
                <p className="text-sm text-indigo-600 font-semibold uppercase">Learning experience</p>
                <h3 className="text-xl text-primaryText font-bold mt-1 ">What it feels like</h3>
                <ul className="mt-4 space-y-3 text-slate-600 text-sm">
                <li className="flex gap-3 items-start text-secondaryText"><span className="text-indigo-500 mt-0.5">•</span><span>Weekly live sessions (evenings) with replays for catch-up.</span></li>
                <li className="flex gap-3 items-start text-secondaryText"><span className="text-indigo-500 mt-0.5">•</span><span>Short challenges after each lesson to lock in skills.</span></li>
                <li className="flex gap-3 items-start text-secondaryText"><span className="text-indigo-500 mt-0.5">•</span><span>Critique rooms — submit work, get targeted feedback.</span></li>
                <li className="flex gap-3 items-start text-secondaryText"><span className="text-indigo-500 mt-0.5">•</span><span>Community co-working sessions for accountability.</span></li>
                </ul>
                <div className="mt-5 rounded-xl border border-dashed border-indigo-200 p-4 bg-bgSpecial4 text-indigo-700 text-sm ">
                Bonus: guest sessions with Malawian designers + international mentors.
                </div>
            </div>

            <div className="p-6 bg-slate-900 text-white rounded-2xl shadow-lg border border-slate-800">
                <p className="text-sm text-amber-300 font-semibold uppercase">Deliverables</p>
                <h3 className="text-xl font-bold mt-1">What you leave with</h3>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="p-3 rounded-lg bg-slate/5 border border-white/10">1 polished portfolio piece</div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">Process breakdown PDF</div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">Feedback notes from mentors</div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">Community & accountability buddies</div>
                </div>
                <p className="mt-4 text-slate-200 text-sm">Scholarships available for students and early-career creatives.</p>
            </div>
        </section>
    )
}