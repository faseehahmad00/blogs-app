export default function Topic({data}){
    return(
        <div className="mb-6 mt-6" id="1">
        <div className="flex space-x-6">
          <div>
            <h3 className="text-gray-800 text-md font-semibold">{data.name}</h3>
            <div className="text-xs mb-2 text-gray-400">
                {data.followers} people follow
            </div>  
            <button className="mt-2 text-xs text-indigo-600 flex space-x-0.5 items-end border border-gray-400 rounded-xl px-1 hover:bg-gray-200 transition duration-200">
                    follow
            </button>
          </div>
        </div>
      </div>
    );
}