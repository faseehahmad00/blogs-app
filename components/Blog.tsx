export default function Blog({ data }) {
  return (
    <div className="mb-6 mt-6" id="1">
      <div className="flex space-x-6">
        <div className="flex shrink-0">
          <img
            className="aspect-square h-20 rounded-full object-cover"
            src={data.img}
            alt=""
          />
        </div>
        <div>
          <h3 className="text-md font-semibold text-gray-800">{data.name}</h3>
          <div className="mb-2 text-xs text-gray-400">
            {data.followers} people follow
          </div>
          <button className="mt-2 flex items-end space-x-0.5 rounded-xl border border-gray-400 px-1 text-xs text-indigo-600 transition duration-200 hover:bg-gray-200">
            follow
          </button>
        </div>
      </div>
    </div>
  );
}
