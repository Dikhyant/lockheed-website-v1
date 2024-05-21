import BuiltComponent from "./BuiltComponent";
import React from "react";

type TBuiltComponentProps = React.ComponentProps<typeof BuiltComponent>;

export const builtSectionData: TBuiltComponentProps[] = [
  {
    coverImageUrl: "/images/woman-with-flash-light.jpg",
    text: "Built to succeed.",
    subText:
      "Our team is the key to our success, and its diversity is its strength. We value the unique perspectives and experiences that each one of our employees bring to the table.",
  },
  {
    coverImageUrl: "/images/man-performing-welding.jpg",
    text: "Built to transform.",
    subText:
      "Together, we work tirelessly to develop cutting-edge solutions that anticipate the needs of a rapidly changing world. Put simply: <i>We&nbsp;ensure those who serve always stay ahead of ready.</i>",
  },
  {
    coverImageUrl: "/images/man-in-server.jpg",
    text: "Built to grow.",
    subText:
      "We are dedicated to equipping every employee with the resources and opportunities needed to foster professional growth, helping you to build a dynamic career.",
  },
];
