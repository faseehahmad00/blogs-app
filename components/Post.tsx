import {ChevronRightIcon } from '@heroicons/react/solid';

export default function Post({data}){
    return(
        <div className="mb-6" id={data.id}>
        <div className="flex space-x-6">
          <div className="flex shrink-0">
            <img
              className="aspect-square h-48 object-cover"
              src={data.img}
              alt=""
            />
          </div>
          <div>
            <h3 className="text-gray-900 text-xl font-semibold mb-0.5">{data.title}</h3>
            <div className="text-sm mb-2 text-gray-500">
              {data.author} &middot;
              {data.likes} people liked
            </div>
            <p className="line-clamp-3 text-gray-700">
              {data.content}
            </p>
  
            <button className="mt-4 font-medium text-indigo-600 flex space-x-0.5 items-end">
              <span>Read More</span>
              <ChevronRightIcon className="h-5 w-5 mb-0.5" />
            </button>
          </div>
        </div>
      </div>
    )
}