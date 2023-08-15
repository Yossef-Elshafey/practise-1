import React from "react";

function Features() {
  const features: string[] = [
    "improving end distrusts instantly",
    "become the tended active",
    "message or am nothing",
    "really boy law county",
  ];
  return (
    <section className="col-span-8 flex items-start flex-wrap xl:flex-nowrap  gap-x-8 gap-y-8 py-secPadding">
      <div className="gradient-text capitalize relative">
        <p className="font-bold text-2xl">
          the future is now and you just need to realize it . step into future
          today & make it happen .
        </p>
        <button className="text-amber-600 mt-8 ">
          Request Early acceess to get started
        </button>
      </div>
      <div className=" flex flex-col gap-y-8">
        {features.map((e, i) => {
          return (
            <div key={i} className="font-bold text-2xl">
              <p className="relative top-dash capitalize">{e}</p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-y-8 text-primary">
        <p>
          Boy desirous families prepared gay reserved add ecstatic say. Replied
          joy age visitor nothing cottage. Mrs door paid led loud sure easy
        </p>
        <p>
          May indulgence difficulty ham can put especially. Bringing remember
          for supplied her why was confined. Middleton principle did she
          procuring extensive believing add. Weather
        </p>
        <p>
          adapted prepare oh is calling. These wrong of he which there smile to
          my front. He fruit oh enjoy it of whose table. Cultivated occasional
          old her unpleasing unpleasant. At as do be
        </p>
        <p>
          Windows talking painted pasture yet its express parties use. Sure last
          upon he same as knew next. Of believed or diverted no rejoiced.
        </p>
      </div>
    </section>
  );
}

export default Features;
