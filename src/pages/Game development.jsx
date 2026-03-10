import coursePreviewdata from "../data/course previewdata"

import Footer from "../components/Footer"
import CoursePreview from "../components/course preview/course preview"

export default function GameDevelopment(){               
                  const course="game development"
                  const program=coursePreviewdata.find((element)=>element.courseName===course)
            return(
                  <>
                    
                    <CoursePreview data={program}/>
                    <Footer/>
                 </>
      )
}