"use client";

import Image from "next/image";

function Landing() {
  return (
    <>
      <div className="col-span-8 xl:col-span-5 py-secPadding ">
        <div className="blur-circle left-0 top-0 opacity-25"></div>
        <div className="">
          <h2 className="text-6xl leading-normal gradient-text font-bold">
            Let's Build Something <br /> amazing with GPT-3 <br /> OpenAi
          </h2>
          <p className="text-primary mt-4 text-xl">
            Yet bed for travelling assistance indulgence unpleasing. <br /> Not
            thoughts all exercise blessing.indulgence way <br /> everything joy
            alteration boisterous the attachment.
            <br /> Party we years to order allow asked of.
          </p>
          <div className="relative mt-4">
            <input
              id="email-inp"
              type="text"
              className="py-3 w-full rounded-md text-black px-2 outline-none"
              placeholder="Your Email Address"
            />
            <button className="bg-orange px-6 py-3 rounded-md  absolute right-0">
              Get Started
            </button>
            <div className="mt-4 flex items-center gap-x-4  ">
              <Image src="/people.png" alt="people" width={150} height={150} />
              <p>1,600 people required access a visit in last 24 hours</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 relative">
        <Image
          src="/ai.png"
          alt="landing"
          priority={true}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </>
  );
}

export default Landing;
