import React from "react";
import PostCard from "@/components/postCard/PostCard";
import { getPosts } from "../../../lib/data";

interface Post {
  userID: string;
  title: string;
  desc: string;
  img: string;
  slug: string;
}

// WITH FETCH API
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: "no-cache"});
//   // If you know that your fetched data will not constantly change, you can keep it as force-cache.
//   // And if you know that your fetched data will constantly change, you can set cache to "no-cache".
//   if(!res.ok){
//     throw new Error("Something went wrong")
//   }
//   return res.json();
// }

async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {posts.map((post: Post) => (
        <PostCard
          key={post.userID}
          image={post.img}
          date="01.01.2024"
          title={post.title}
          description={post.desc}
          link={`/blog/${post.slug}`}
        ></PostCard>
      ))}
    </div>
  );
}

export default BlogPage;
