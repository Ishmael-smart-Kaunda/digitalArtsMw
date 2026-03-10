import coursePreviewdata from "../data/course previewdata"
import CoursePreview from "../components/course preview/course preview"
import Footer from "../components/Footer"

export default function Sketching(){
          const course="digital drawing"
          const program=coursePreviewdata.find((element)=>element.courseName===course)
      return(
             <>
              <CoursePreview data={program}/>
              <Footer/>
             </>
      )
}