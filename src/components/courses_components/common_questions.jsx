

export default function Questions({data}){
      return(
             <div className="bg-bgSecondary p-4 rounded-xl border border-borderColor ">
                <h4 className="font-semibold text-primaryText ">{data.question}</h4>
                <p className="mt-2 text-primaryText">{data.response}</p>
             </div> 

      )
}