import React from "react";
import Breadcramp from "../utils/Breadcramp";

const Banner = () => {
  return (
    <section className="pt-8 pb-12">
      <div className="container">
        <div className="bg-[url(/shop-bg.png)] bg-no-repeat bg-center p-20 rounded-3xl">
          <Breadcramp />
        </div>
      </div>
    </section>
  );
};

export default Banner;