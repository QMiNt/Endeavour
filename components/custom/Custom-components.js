import React from "react";
import Card from "../banner/card";
// core components
import Banner2 from "../banner/Banner2";

// sections for this page
import BannerComponent from "./sections/bannercomponent";
import BannerComponent2 from "./sections/bannercomponent2";
import BannerComponent3 from "./sections/bannercomponent3";
import FormBannerComponent from "./sections/formbannercomponent";
import FeatureComponent from "./sections/featurecomponent";
import ContactComponent from "./sections/contactcomponent";
import CallToAction from "../../components/call-to-action/CallToAction";

const CustomComponents = () => {
  return (
    <div>
      <Banner2 />
      <BannerComponent />
      <BannerComponent2 />
      <BannerComponent3 />
      <FormBannerComponent />
      {/* <Card/> */}
      <FeatureComponent />
      <ContactComponent />
      <CallToAction />
    </div>
  );
};

export default CustomComponents;
