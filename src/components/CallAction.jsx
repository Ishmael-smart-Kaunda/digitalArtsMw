import ActionCalldata from "../data/CallToActiondata"


export default function CallAction({pageName}){
     const homeActions=ActionCalldata[0]
     const courseActions=ActionCalldata[1]

    if(pageName==='home'){
        return(
               <section className='max-w-6xl mx-auto px-6 pb-14'>
                <div className='bg-gradient-to-r from-green-400 to-red-500 rounded-xl text-white p-8 flex flex-col md:flex-row items-center justify-between gap-6'>
                <div>
                    <h3 className="text-2xl font-bold">{homeActions.heading}</h3>
                    <p className="mt-2 text-sm">{homeActions. descript}</p>
                </div>
                  <div className="flex items-center flex-wrap md:flex-nowrap gap-3">
                    <a href="#contact" className="px-4 py-3 whitespace-nowrap text-center w-full md:w-[fit content] text-center bg-white/20 rounded-md hover:bg-white/30">{homeActions.buttons.applyBtn}</a>
                    <a href="/" className="px-4 py-3 whitespace-nowrap text-center w-full md:w-[fit content] text-center bg-black/10 rounded-md hover:bg-black/20">{homeActions.buttons.seatReserveBtn}</a>
                  </div>
                </div>
             </section>
        )
    }
    return(
               <section className='max-w-6xl mx-auto px-6 pb-14'>
                <div className="rounded-2xl bg-gradient-to-r from-indigo-500 to-amber-400 text-white p-8 shadow-xl flex flex-col md:flex-row items-left md:items-center justify-between gap-6">
                    <div>
                      <p className="uppercase text-xs tracking-[0.2em] text-white/90">{courseActions.questionTag}</p>
                      <h3 className="text-2xl font-bold mt-1">{courseActions.heading}</h3>
                      <p className="text-sm text-white/90 mt-2">{courseActions.descript}</p>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap  md:flex-nowrap">
                      <a href="#contact" className="px-5 py-3 whitespace-nowrap w-full md:w-[fit content] text-center rounded-md bg-white text-indigo-700 font-semibold shadow">{courseActions.buttons.seatReserveBtn}</a>
                      <a href="/" className="px-5 py-3 whitespace-nowrap w-full md:w-[fit content] text-center rounded-md border border-white/40 text-white/90 hover:bg-white/10">{courseActions.buttons.backHomeBtn}</a>
                    </div>
                </div>
              </section>
        
    )
}