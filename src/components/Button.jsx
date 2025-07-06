import React from "react";
const Button = ({ content, href }) => {
     return (
          <div className="w-1/2 mx-auto">
               <button
                    onClick={(window.location.href = href)}
                    className="bg-green-700 hover:bg-green-800 rounded-xl p-5 mt-2 text-lg sm:text-3xl md:text-2xl lg:text-2xl mb-1 text-white font-bold w-full animate-bounce"
               >
                    <h1>{content}</h1>
               </button>
          </div>
     );
};

export default Button;
