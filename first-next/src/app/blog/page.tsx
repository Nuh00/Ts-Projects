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
        link="/"
      />
      <PostCard
        image="https://images.pexels.com/photos/26125407/pexels-photo-26125407/free-photo-of-a-gray-butterfly-sitting-on-a-leaf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        date="01.01.2024"
        title="Title"
        description="amazing to learn, amazing to see, wonderful to behold"
        link="/"
      />
      <PostCard
        image="https://images.pexels.com/photos/25929113/pexels-photo-25929113/free-photo-of-a-green-frog-sits-on-a-leaf-in-the-rainforest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        date="01.01.2024"
        title="Title"
        description="amazing to learn"
        link="/"
      />
      <PostCard
        image="/noavatar.png"
        date="01.01.2024"
        title="Title"
        description="amazing to learn"
        link="/"
      />
      <PostCard
        image="/noavatar.png"
        date="01.01.2024"
        title="Title"
        description="amazing to learn"
        link="/"
      />
    </div>
  );
}

export default BlogPage;
