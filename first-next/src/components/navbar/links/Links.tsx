import React from "react";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];



function Links() {
  return (
    <div>
      {links.map((link) => (
        <a key={link.path} href={link.path} className="text-white">
          {link.title}
        </a>
      ))}
    </div>
  );
}

export default Links;
