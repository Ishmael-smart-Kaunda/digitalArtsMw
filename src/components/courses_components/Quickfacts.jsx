




export default function Quickfacts() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-bgSpecial2 border border-borderColor ">
              <p className="text-xs uppercase text-indigo-600 font-semibold">Length</p>
              <h3 className="text-xl font-bold text-primaryText mt-1">4–8 weeks</h3>
              <p className="text-sm text-secondaryText mt-1">Weekly live sessions + practice time.</p>
            </div>
            <div className="p-4 rounded-xl bg-bgSpecial3 border border-borderColor ">
              <p className="text-xs uppercase text-amber-600 font-semibold">Projects</p>
              <h3 className="text-xl font-bold text-primaryText mt-1">Portfolio-first</h3>
              <p className="text-sm text-secondaryText mt-1">Ship a piece you can publish or add to your reel.</p>
            </div>
            <div className="p-4 rounded-xl bg-bgSpecial4 border border-borderColor ">
              <p className="text-xs uppercase text-emerald-600 font-semibold">Support</p>
              <h3 className="text-xl font-bold text-primaryText mt-1">Mentors + peers</h3>
              <p className="text-sm text-secondaryText mt-1">Reviews, accountability, and feedback loops.</p>
            </div>
          </div>
        </section>
    )
}