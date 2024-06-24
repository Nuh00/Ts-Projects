import React from "react";
import Image from "next/image";
import Link from "next/link";

function PostCard() {
  return (
    <div className="flex flex-col gap-4 mb-20 ">
      <div className="flex justify-between">
        <div className="relative w-9/10 h-[400px]">
          <Image src="/noavatar.png" alt="" objectFit="cover"
          width={400}
          height={400}
          
          ></Image>
        </div>
        <span className=" text-sm rotate-[270deg]">01.01.2024</span>
      </div>
      <div>
        <h1>Title</h1>
        <p>Desc</p>
        <Link href="/">Read more</Link>
      </div>
    </div>
  );
}

export default PostCard;
