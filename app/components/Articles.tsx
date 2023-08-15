import Image from "next/image";
import React from "react";

const ArticlesCard = ({ imgSrc }: { imgSrc: string }) => {
  const date = "Sep 26 , 2021";
  const articlesHeading =
    "GPT-3 and Open Ai is the future .  let us explore how it is ? ";
  return (
    <div className="relative my-4">
      <Image src={imgSrc} alt="blog" width={1280} height={1280} />
      <div className="p-4 bg-articleCard md:h-full flex flex-col gap-y-4 items-baseline ">
        <p>{date}</p>
        <h4 className=" text-2xl">{articlesHeading}</h4>
        <button>View Article</button>
      </div>
    </div>
  );
};

function Articles() {
  return (
    <div className="col-span-8 py-secPadding">
      <h2 className="gradient-text font-bold text-5xl py-16">
        A lot is happening , <br /> We are blogging about it .{" "}
      </h2>
      <div className="md:grid  overflow-hidden md:grid-cols-3  relative gap-x-8 ">
        <ArticlesCard imgSrc="/blog01.png" />

        <div className="">
          <ArticlesCard imgSrc="/blog02.png" />
          <ArticlesCard imgSrc="/blog03.png" />
        </div>
        <div className="">
          <ArticlesCard imgSrc="/blog04.png" />
          <ArticlesCard imgSrc="/blog05.png" />
        </div>
      </div>
    </div>
  );
}

export default Articles;
