import React from "react";

type ListOfLinksProps = {
  list: string[];
  listHeading: string;
};

const ListOfLinks = ({ list, listHeading }: ListOfLinksProps) => {
  return (
    <ul className="text-white">
      <h5 className="font-bold text-2xl mb-8">{listHeading}</h5>
      {list.map((e) => {
        return <li className="capitalize cursor-pointer my-2">{e}</li>;
      })}
    </ul>
  );
};

function Footer() {
  const links = ["overons", "social Media", "Counters", "Contact"];
  const company = ["Terms & Conditions", "Privacy Policy", "Contact"];
  const touch = [
    "Crechterwoord K12 182 DK Alknjkcb",
    "085-132567",
    "info@payme.net",
  ];

  return (
    <footer className="bg-[#061b33] pt-36 ">
      <div className="container mx-auto">
        <h3 className="gradient-text font-bold text-3xl text-center ">
          Do you want to step into the <br /> future before others
        </h3>
        <button className="block mx-auto border p-4 text-white mt-8">
          Request Early Access
        </button>
        <div className="flex xl:flex-nowrap flex-wrap gap-x-[25%] py-16 ">
          <div className="inline-flex flex-col justify-center  text-white ">
            <h3 className="font-bold text-3xl ">GPT-3</h3>
            <p>Joe All Rights Reserved </p>
          </div>
          <div className="flex-1 flex justify-between">
            <ListOfLinks list={links} listHeading={"Links"} />
            <ListOfLinks list={company} listHeading="Company" />
            <ListOfLinks list={touch} listHeading="Get in Touch" />
          </div>
        </div>
      </div>
      <p className="text-white text-center py-4 border-t">
        &copy; 2021 GPT-3 All Rights Not Reserved
      </p>
    </footer>
  );
}

export default Footer;
