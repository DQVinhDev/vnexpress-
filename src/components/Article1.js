// src/components/Article.js
// src/components/Article.js
import React from "react";

function Article1({ imgSrc, title, titleSize }) {
  return (
    <article className="container flex ">
      <div className=" text-left">
        <h2 className={`font-bold mb-2 ${titleSize}`}>{title}</h2>
        <div className="container flex justify-content ">
          {imgSrc && (
            <div className="mr-4">
              <img
                src={imgSrc}
                alt={title}
                className="w-70 h-40 object-cover rounded-lg "
              />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default Article1;
