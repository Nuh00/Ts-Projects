import React from "react";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost, getUser } from "../../../../lib/data";

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

  const post = await getPost(slug);
  return (
    <div className=" flex gap-10 px-4 justify-start">
      <div className="hidden md:flex  relative h-[700px] w-[350px] ">
        <Image
          src={post && post.img}
          alt=""
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>

      <div className="flex flex-col gap-6 md:justify-start justify-center">
        <h1 className="text-6xl font-semibold ">{post && post.title}</h1>
        <div className="flex gap-3">
          <div className="relative rounded-full w-12 h-12 overflow-hidden">
            <Image
              src={post.img}
              alt="avatar"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* <Suspense fallback={<div>Please wait...</div>}>
            {post && <PostUser userNum={post.id} />}
          </Suspense> */}
          <div>
            <p className="text-gray-400">Published</p>
            <p>01.01.2024</p>
          </div>
        </div>
        <div className="px-3">{post && post.body}</div>
      </div>
    </div>
  );
}

export default SinglePostPage;
