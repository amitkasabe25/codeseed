import React from "react";

const BlogMenu = () => {
  return (
    <>
      <ul className="list-none p-0 m-0 space-y-2">
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-white bg-blue-500 rounded-md transition duration-300 hover:bg-blue-600"
          >
            Chapter 1: Introduction to Python
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-white bg-blue-500 rounded-md transition duration-300 hover:bg-blue-600"
          >
            Chapter 2: Variables and Data Types
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block px-4 py-2 text-white bg-blue-500 rounded-md transition duration-300 hover:bg-blue-600"
          >
            Chapter 3: Operators and Expressions
          </a>
        </li>
      </ul>
    </>
  );
};

export default BlogMenu;
