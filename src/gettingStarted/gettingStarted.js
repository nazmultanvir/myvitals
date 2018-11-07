import { Image } from "react-native";

import React from "react";
import Onboarding from "react-native-onboarding-swiper";
const gettingStarted = () => (
  <Onboarding
    pages={[
      {
        backgroundColor: "#fff",
        image: <Image source={require("../image/circle.png")} />,
        title: "Onboarding",
        subtitle: "Done with React Native Onboarding Swiper",
      },
      {
        backgroundColor: "#fe6e58",
        image: <Image source={require("../image/square.png")} />,
        title: "The Title",
        subtitle: "This is the subtitle that sumplements the title.",
      },
      {
        backgroundColor: "#999",
        image: <Image source={require("../image/triangle.png")} />,
        title: "Triangle",
        subtitle: "Beautiful, isn't it?",
      },
    ]}
  />
);

export default gettingStarted;
