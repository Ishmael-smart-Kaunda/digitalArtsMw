



export default function Showcase({data}) {
    return(
        
        <div className="rounded-xl bg-bgSecondary p-4 shadow hover:shadow-lg transition">
            <img src={data.showImg} alt="student" class="w-full h-40 object-cover rounded-md"/>
            <h4 className="mt-3 font-semibold text-secondaryText">{data.title}</h4>
            <p className="mt-1 text-sm text-secondaryText">{data.description}</p>
            <div className="mt-3 text-xs text-slate-400">Published: {data.publishDate}</div>
        </div>
    )
}