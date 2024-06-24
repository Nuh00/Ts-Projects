import React from "react";
import Image from "next/image";
import Link from "next/link";

{/* We want ot pass in 
1. date
2. title
3. description
4. image
5. link

 */}

 type PostCardProps = {
    date?: string;
    title?: string;
    description?: string;
    image: string;
    link: string;
  
 }

function PostCard({ date, title, description, image, link}: PostCardProps) {
  return (
    <div className="flex flex-col gap-4 mb-20 w-[400px] ">
      <div className="flex">
        <div className="relative w-[90%] h-[400px]">
          <Image
            src={image}
            alt=""
            layout="fill"
            objectFit="cover"
            
          ></Image>
        </div>
        <div className=" flex items-center text-sm">
          <span className=" rotate-[270deg]">{date} </span>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className=" text-header-gray">{description}</p>
        <Link href={link} className="text-white text-l  underline">Read more</Link>
      </div>
    </div>
  );
}

export default PostCard;
