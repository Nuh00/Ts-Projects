import { getUser } from "../../../lib/data";
import React from "react";

// FETCHING WITH A API FUNCTION
// const getData = async (userNum: number) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userNum}`, {cache: "no-cache"}
//   );
//   // If you know that your fetched data will not constantly change, you can keep it as force-cache.
//   // And if you know that your fetched data will constantly change, you can set cache to "no-cache".
//   if (!res.ok) {
//     throw new Error("Something went wrong");
//     console.log(res)
//   }
//   return res.json();
// };

type userProps = {
  userNum: number;
};

async function PostUser({ userNum }: userProps) {
  const user = await getUser(userNum);
  return (
    <div>
      <>
        <p className=" text-gray-400">Author</p>
        <p>{user && user.name}</p>
      </>
    </div>
  );
}

export default PostUser;
