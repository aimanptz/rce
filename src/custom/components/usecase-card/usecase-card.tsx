import React from "react";
import { CE } from "src/ce";
import { BREAKPOINT_NAMES } from "src/ce/core/constants";
import { getBpValue } from "src/ce/core/utils";

const imgSrcByProps =
  "https://image.cnbcfm.com/api/v1/image/107196235-1676617290460-_GRAND-PRIZE_WINNER_-_Karthik_Subramaniam.jpg?ffmt=webp";
const imgSrcByDefault =
  "https://www.popsci.com/uploads/2022/12/01/SpaceX-rocket-over-mangroves-e1670022792625.jpg?auto=webp";
const imgSrcByConfig =
  "https://www.frommers.com/system/media_items/attachments/000/866/196/s980/p264_cp.jpg";
const imgSrcBySrcSet =
  "https://nypost.com/wp-content/uploads/sites/2/2022/12/national-geographic-pictures-of-the-year-24.jpg?quality=90&strip=all";

const imageSrcSet = BREAKPOINT_NAMES.reduce((res, name) => {
  return {
    ...res,
    [name]: `https://dummyimage.com/${getBpValue(name)}`,
  };
}, {});

export const UsecaseCard = () => {
  return (
    <CE.Block
      className="usecase-card"
      config={{ backgroundImage: imageSrcSet }}
    >
      <h1>Hello</h1>
    </CE.Block>
  );
};