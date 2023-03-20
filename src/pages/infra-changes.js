import React from "react";

import HeadComponent from "@/components/HeadComponent";
import NavbarComponent from "@/components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";

const InfraChanges = () => {
  return (
    <>
      <HeadComponent />
      <NavbarComponent />
      <div className="w-screen h-screen flex justify-center items-center">
        <p>Infra Changes Page</p>
      </div>
      <FooterComponent />
    </>
  );
};

export default InfraChanges;
