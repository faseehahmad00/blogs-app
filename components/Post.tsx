import { ChevronRightIcon } from "@heroicons/react/solid";

export default function Post({ data }) {
  return (
    <div className="flex space-x-6 mb-6">
      <div className="flex shrink-0">
        <img
          className="aspect-square h-44 object-cover rounded"
          src={data.img}
          alt=""
        />
      </div>
      <div>
        <h3 className="mb-0.5 text-xl font-semibold text-gray-900 font-serif">
          {data.title}
        </h3>
        <div className="mb-2 text-sm text-gray-500">
          {data.author} &middot;
          {" " + data.likes} people liked
        </div>
        <p className="text-gray-700 line-clamp-3">{data.content}</p>

        <button className="mt-4 flex items-end space-x-0.5 font-medium text-indigo-600">
          <span>Read More</span>
          <ChevronRightIcon className="mb-0.5 h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
