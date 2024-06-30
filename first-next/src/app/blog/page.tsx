import React from "react";
import PostCard from "@/components/PostCard/PostCard";

interface

const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if(!res.ok){
    throw new Error("Something went wrong")
  }
  return res.json();
}




async function BlogPage() {



  const posts = await getData();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {posts.map( (post) => (
        <PostCard
          key={post.id}
          image="https://images.pexels.com/photos/23848646/pexels-photo-23848646/free-photo-of-a-stone-bridge-over-a-small-stream-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=loading"
          date="01.01.2024"
          title={post.title}
          description={post.body}
          link={`/blog/${post.id}`}
        ></PostCard>
      ))}
      <PostCard
        image="https://images.pexels.com/photos/23848646/pexels-photo-23848646/free-photo-of-a-stone-bridge-over-a-small-stream-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=loading"
        date="01.01.2024"
        title="Title"
        description="amazing to learn"
        link="/blog/postwhoops"
      />
    </div>
  );
}

export default BlogPage;