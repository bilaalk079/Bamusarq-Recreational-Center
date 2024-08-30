import React from "react";
import Link from "next/link";
const Button = ({content,href}) => {
  return (
    <div className="w-1/2 mx-auto">
      <button className="bg-green-700 hover:bg-green-800 rounded-xl p-5 mt-2 text-lg sm:text-3xl md:text-2xl lg:text-2xl mb-1 text-white font-bold w-full animate-bounce">
        <Link href={href}>{content}</Link>
      </button>
    </div>
  );
};

export default Button;
