import React from "react";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getUser } from "../../../../lib/data";

// const getData = async (slug: string) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
//   // If you know that your fetched data will not constantly change, you can keep it as force-cache.
//   // And if you know that your fetched data will constantly change, you can set cache to "no-cache".
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }
//   return res.json();
// };

type paramProps = {
  params: {
    slug: string;
  };
};

async function SinglePostPage({ params }: paramProps) {
  const { slug } = params;

  const user = await getUser(slug);
  return (
    <div className=" flex gap-10 px-4 justify-start">
      <div className="hidden md:flex  relative h-[700px] w-[350px] ">
        <Image
          src="https://images.pexels.com/photos/25929113/pexels-photo-25929113/free-photo-of-a-green-frog-sits-on-a-leaf-in-the-rainforest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>

      <div className="flex flex-col gap-6 md:justify-start justify-center">
        <h1 className="text-6xl font-semibold ">{user && user.name}</h1>
        <div className="flex gap-3">
          <div className="relative rounded-full w-12 h-12 overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/23848646/pexels-photo-23848646/free-photo-of-a-stone-bridge-over-a-small-stream-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=loading"
              alt="avatar"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <Suspense fallback={<div>Please wait...</div>}>
            {user && <PostUser userNum={user.id} />}
          </Suspense>
          <div>
            <p className="text-gray-400">Published</p>
            <p>01.01.2024</p>
          </div>
        </div>
        <div className="px-3">{user && user.body}</div>
      </div>
    </div>
  );
}

export default SinglePostPage;
