import Image from "next/image";
import React from "react";

function Info() {
  return (
    <>
      <div className="col-span-8  xl:col-span-4 mx-auto relative py-secPadding ">
        <Image
          src="/possibility.png"
          alt="pos"
          width={400}
          height={400}
          priority={false}
        />
      </div>
      <div className="col-span-8 xl:col-span-4  py-secPadding flex flex-col items-start justify-center gap-y-6">
        <button className="text-primary capitalize">
          request early access to get started
        </button>
        <h3 className="gradient-text font-bold text-2xl">
          The possibilities are beyond <br /> your imagination
        </h3>
        <p className="text-primary">
          I'd heard what happened to that princess who was at your house - yes,
          the one who got caught in the forest when the archers shot the
          fireball at the trees.
        </p>
        <button className="text-amber-600 capitalize">
          request early access to get started
        </button>
      </div>

      <div className="col-span-8 px-8 py-12 bg-gradient-to-r from-purple-600 to-amber-500 mt-16 rounded-xl  ">
        <div className="flex justify-between items-center ">
          <div>
            <button className="text-amber-600 capitalize">
              request early access to get started
            </button>
            <p className="font-bold text-black text-2xl">
              Register today & start exploring the endless possiblities
            </p>
          </div>
          <button className="rounded-3xl text-white bg-black px-6 py-4">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default Info;
