import Post from './Post';
import {posts} from '../data/data'

export default function PostSection({title,tag}){
  return(
    <section id="trending-post" >
    <h2 className="text-gray-900 text-xl font-semibold mb-8">{title}</h2>
    {posts.filter(post => post.tags.includes(tag)).map(post => (
      <Post data={post}/>
    ))}
  </section>
  );
} 