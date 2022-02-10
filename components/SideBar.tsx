import Blog from './Blog';
import { blogs, topics } from '../data/data'
import Topic from './Topic';

export default function SideBar() {
    return (
        <div className="ml-3 p-2">

            <h3 className="text-gray-700 text-xl font-semibold mb-0.5">Topics</h3>
            <div className="grid grid-cols-3">
                {
                    topics.map(topic => (
                        <Topic data={topic} />
                    ))
                }
            </div>
            
            <div className="mt-8">
                <h3 className="text-gray-700 text-xl font-semibold mb-0.5">Blogs</h3>
                    {
                        blogs.map(blog => (
                            <Blog data={blog} />
                        ))
                    }
            </div>

        </div>
    );
}