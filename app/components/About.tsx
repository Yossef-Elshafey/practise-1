import React from "react";

function About() {
  const mainAboutTopics = {
    chatsbots:
      "We so opinion friends me message as delight . Whole front do of plate heard oh ought.",
    knowledgebase:
      "At jointure ladyship an insisted of humanity he . Friendly bachelor entrance to on by.",
    education:
      "At jointure ladyship an insisted of humanity he . Friendly bachelor entrance to on by.",
  };
  return (
    <section className="col-span-8  py-secPadding">
      <div className="bg-[#0b2c53] relative py-16 px-12 overflow-hidden">
        <div className="bg-transparent shadow-md shadow-black w-[500px] h-[500px] absolute -top-[340px] -left-[340px] rounded-full"></div>
        <div className="blur-circle -left-20 -top-20 z-0 opacity-20 "></div>
        <div className="blur-circle -bottom-10 -right-10 z-0 "></div>
        <div className=" row pb-secPadding ">
          <h2 className="font-bold text-3xl top-dash ">What is GTP-3</h2>
          <p className="text-primary">
            We so opinion friends me message as delight. Whole front do of place
            heard oh ought . His <br />
            defective nor convinced residence own. Connection has put impossible
            own apartments <br /> boisterous. At jointure ladyship an insisted
            of humanity he . Friendly bachelor entrance to on by.
          </p>
        </div>
        <div className="row py-secPadding ">
          <h3 className="gradient-text text-4xl">
            The possibilities are beyond <br /> your imagination
          </h3>
          <button className="text-amber-500 hover:underline">
            Explore The Library
          </button>
        </div>
        <div className="row pt-secPadding ">
          {Object.entries(mainAboutTopics).map(([heading, topic]) => {
            return (
              <div>
                <h2 className="top-dash font-bold text-2xl relative capitalize">
                  {heading}
                </h2>
                <p className="pt-secPadding">{topic}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;
