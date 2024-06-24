import React from "react";
import PostCard from "@/components/PostCard/PostCard";
function BlogPage() {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <PostCard
        image="https://images.pexels.com/photos/23848646/pexels-photo-23848646/free-photo-of-a-stone-bridge-over-a-small-stream-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=loading"
        date="01.01.2024"
        title="Title"
        description="amazing to learn"
        link="/blog/post"
      />
      <PostCard
        image="https://images.pexels.com/photos/26125407/pexels-photo-26125407/free-photo-of-a-gray-butterfly-sitting-on-a-leaf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        date="01.01.2024"
        title="Title"
        description="amazing to learn, amazing to see, wonderful to behold"
        link="/blog/post"
      />
      <PostCard
        image="https://images.pexels.com/photos/25929113/pexels-photo-25929113/free-photo-of-a-green-frog-sits-on-a-leaf-in-the-rainforest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        date="01.01.2024"
        title="Title"
        description="amazing to learn"
        link="/blog/post"
      />
      <PostCard
        image="https://images.pexels.com/photos/24243724/pexels-photo-24243724/free-photo-of-a-photo-of-a-cloud-with-a-moon-in-the-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        date="01.01.2024"
        title="Title"
        description="amazing to learn"
        link="/blog/post"
      />
      <PostCard
        image="https://images.pexels.com/photos/14785695/pexels-photo-14785695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        date="01.01.2024"
        title="Title"
        description="amazing to learn"
        link="/blog/post"
      />
    </div>
  );
}

export default BlogPage;
