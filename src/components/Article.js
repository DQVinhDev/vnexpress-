// src/components/Article.js
// src/components/Article.js
import React from "react";

function Article({ imgSrc, title, content, titleSize }) {
  return (
    <article>
      <div className=" shadow-sm   pb-3  w-[400px]  ">
        <div className="article ">
          <h3 className="font-[Merriweather] text-left font-semibold text-[15px] pb-4 hover:text-blue-500 hover:cursor-pointer">
            {title}
          </h3>
          <div className="container justify-between flex h-[87px]">
            <img
              className="w-[145px]  relative flex"
             
              src={imgSrc}
            />
            <p className="flex text-left ml-5 text-[13px] color-[#4F4F4F]">
          
              {content}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Article;
