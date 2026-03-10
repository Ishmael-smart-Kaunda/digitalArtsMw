import coursePreviewdata from "../data/course previewdata"

import CoursePreview from "../components/course preview/course preview"
import Footer from "../components/Footer"


export default function Modelling(){
                  const course="3d modelling"
                        const program=coursePreviewdata.find((element)=>element.courseName===course)
                  return(
                        <> 
                          <CoursePreview data={program}/>
                          <Footer/>
                        </>
      )
}