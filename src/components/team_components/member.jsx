

export default function Member({data}){
         return( <>
                <div className="p-4 bg-bgSecondary rounded-xl shadow transition-colors duration-300">
                    <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-tr from-indigo-500 to-amber-400 rounded-full avatar-pulse flex items-center justify-center text-white font-bold">{data.image}</div>
                    <div>
                        <h3 className="font-semibold text-secondaryText transition-colors duration-300">{data.name}</h3>
                        <p className="text-xs text-specialText1 transition-colors duration-300">{data.role}</p>
                    </div>
                    </div>
                <p className="mt-4 text-sm text-secondaryText transition-colors duration-300">{data.description}</p>
            </div>
        </>

            
         )
}