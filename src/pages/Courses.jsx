import Header from "../components/Header"
import headerData from "../data/headerData"
import Coursetrack from "../../courses_components/Coursetrack"

import Visualtrackdata from "../data/visualDevTrackdata"
import modellingtrackdata from "../data/modellingTrackdata js"
import gametrackdata from "../data/gameDevTrackdata"

import Quickfacts from "../../courses_components/Quickfacts"
import Deliverables from "../../courses_components/Deliverables"

{/*import FAQ from "../components/courses_components/FAQ"*/}
import FAQuestions from "../components/courses_components/FrequentQuestions"


import CallAction from "../components/CallAction"
import Footer from "../components/Footer"
import DTrackdataJs from "../data/modellingTrackdata js"


export default function Courses() {
    {/*const commonQuestions= FAQdata.map(question=>{
        return<Questions key={question.id} data={data}/>
    })
   */}
    const visualCourseTracks = Visualtrackdata.map(track => {
        return <Coursetrack 
            key={track.id}
            courseImg = {track.courseImg}
            title = {track.title}
            description = {track.info.description}
            takeAways = {track.info.takeAways}
            tools = {track.tools}
            badges = {track.bagdes}
            pathname ={track.pathname}
        />
    })
    
    {/*3D modelling */}
     const modellingCourseTracks = modellingtrackdata.map(track => {
        return <Coursetrack 
            key={track.id}
            courseImg = {track.courseImg}
            title = {track.title}
            description = {track.info.description}
            takeAways = {track.info.takeAways}
            tools = {track.tools}
            badges = {track.bagdes}
            pathname ={track.pathname}
        />
    })
      {/*Game Development */}
     const gameDevCourseTracks = gametrackdata.map(track => {
        return <Coursetrack 
            key={track.id}
            courseImg = {track.courseImg}
            title = {track.title}
            description = {track.info.description}
            takeAways = {track.info.takeAways}
            tools = {track.tools}
            badges = {track.bagdes}
            pathname ={track.pathname}
        />
    })

    return (
        <div className="bg-bgPrimary">
            <Header pageNmae='course' data={headerData} />

            <Quickfacts />
             {/*Visual development */}
            <section id="tracks" className="max-w-6xl mx-auto px-6 pb-6 ">
                <div className="flex items-center justify-between mb-6">
                    <div>
                    <p className="text-sm text-indigo-600 font-semibold uppercase">Pick your path</p>
                    <h2 className="text-2xl text-primaryText md:text-3xl font-bold ">Visual Development</h2>
                    <p className="text-secondaryText mt-1 ">Transfrom ideas into captivating visual stories.</p>
                    </div>
                    <a href="#contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700 ">Talk to us</a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {visualCourseTracks}
                </div>
            </section>

            {/* 3D modelling & VFX*/}
            <section id="tracks" className="max-w-6xl mx-auto my-15 px-6 pb-6 ">
                <div className="flex items-center justify-between mb-6">
                    <div>
                    
                    <h2 className="text-2xl text-primaryText md:text-3xl font-bold ">3D Modelling & VFX</h2>
                    <p className="text-secondaryText mt-1 ">Master digital creation and cinematic storytelling.</p>
                    </div>
                    {/*<a href="#contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700 ">Talk to us</a>*/}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {modellingCourseTracks}
                </div>
            </section>

             {/* Game Development section*/}
            <section id="tracks" className="max-w-6xl mx-auto my-15 px-6 pb-6 ">
                <div className="flex items-center justify-between mb-6">
                    <div>
                    
                    <h2 className="text-2xl text-primaryText md:text-3xl font-bold ">Game Development</h2>
                    <p className="text-secondaryText mt-1 ">Build immersive words and interactive experience.</p>
                    </div>
                    {/*<a href="#contact" className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700 ">Talk to us</a>*/}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {gameDevCourseTracks}
                </div>
            </section>

            <Deliverables />
           
            <FAQuestions/> 
            
           

            <section className="w-full px-6 py-12">
                <CallAction pageName='course' />
             </section>

            <Footer />
        </div>
    )
}