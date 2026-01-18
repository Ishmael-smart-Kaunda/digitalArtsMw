
import teamData from "../../data/teamData"
import Member from "./member"


export default function Teamdeets() {
     
    const teamMembers=teamData.map(member => {
          return <Member key={member.id} data={member}/>
         }
    )

    return(
        <main className="max-w-6xl mx-auto px-6 py-12 pt-24">
            <h1 className="text-3xl font-bold mb-6 text-secondaryText ">Founders & Instructors</h1>

            <p className="text-secondaryText mb-6 ">We are building a small founding team of established creatives. Below are the founding roles — update with real bios and links when you have them.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">



             {teamMembers}
            </div>

            <div className="mt-8">
            <a href="#contact" className="text-indigo-600">Apply to join the team →</a>
            </div>
        </main>
    )
}