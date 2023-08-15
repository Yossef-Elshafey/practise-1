"use client";

import Image from "next/image";

function Workmates() {
  const src = [
    "/google.png",
    "/atlassian.png",
    "/dropbox.png",
    "/slack.png",
    "/shopify.png",
  ];
  return (
    <section className=" col-span-8 mx-auto flex items-center flex-wrap gap-y-4 gap-x-8 py-secPadding">
      {src.map((e) => {
        return <Image key={e} src={e} alt={e} width={75} height={75} />;
      })}
    </section>
  );
}

export default Workmates;
