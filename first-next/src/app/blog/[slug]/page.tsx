import React from "react";
import Image from "next/image";

function SinglePostPage() {
  return (
    <div className=" flex gap-10 px-4">
      <div className=" relative h-[700px] w-[350px]">
        <Image
          src="https://images.pexels.com/photos/25929113/pexels-photo-25929113/free-photo-of-a-green-frog-sits-on-a-leaf-in-the-rainforest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          layout="fill"
          objectFit="cover"
        ></Image>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="text-6xl font-semibold ">Title</h1>
        <div className="flex gap-3">
          <div className="relative rounded-full w-12 h-12 overflow-hidden">
            <Image src="https://images.pexels.com/photos/23848646/pexels-photo-23848646/free-photo-of-a-stone-bridge-over-a-small-stream-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=loading" alt="avatar"
              layout="fill"
              objectFit="cover"
             />
          </div>
          <div>
            <p className=" text-gray-400">Author</p>
            <p>Name of Author</p>
          </div>
          <div>
            <p className="text-gray-400">Published</p>
            <p>01.01.2024</p>
          </div>
        </div>
        <div className="px-3">Desc</div>
      </div>
    </div>
  );
}

export default SinglePostPage;
