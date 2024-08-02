import React from "react";
import SliderCard from "./SliderCard";
import {Data} from "@/app/page";

type Props = {
  data: Data[];
};

function Slides({data}: Props) {
  console.log('data', data)
  return (
    <div className=" flex w-full gap-6">
      {data.map((data) => {
        return <SliderCard key={data.img} data={data}/>;
      })}
    </div>
  );
}

export default Slides;
