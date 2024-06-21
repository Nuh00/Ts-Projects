import React from "react";
import Image from "next/image";

function About() {
  return (
    <main className="grid md:grid-cols-2 grid-cols-1 px-6">
      {/* Content */}
      <div className="flex flex-col gap-6 md:text-start text-center">
        <h2 className="text-xl font-bold text-text-blue">About Agency</h2>
        <h1 className="lg:text-5xl md:text-3xl font-bold text-header-gray leading-[55px]">
          We create digital ideas <br /> that are bigger, bolder,
          <br /> braver and better.
        </h1>
        <p className="text-m">
          We are a creative agency that specializes in creating digital
          experiences <br />
          that are bigger, bolder, braver and better. We are a team of
          designers, <br />
          developers, marketers and strategists who are passionate about
          creating <br />
          digital products that are innovative, engaging and effective.
        </p>
        <div className="flex justify-between md:w-[70%]">
          <div className="flex flex-col text-start p-4">
            <h1 className="text-text-blue text-2xl font-bold text-nowrap">
              10 K+
            </h1>
            <p className="text-header-gray text-xs">Year of experience</p>
          </div>
          <div className="flex flex-col text-start p-4">
            <h1 className="text-text-blue text-2xl font-bold text-nowrap">
              234 K+
            </h1>
            <p className="text-header-gray text-xs">People reached</p>
          </div>
          <div className="flex flex-col text-start p-4">
            <h1 className="text-text-blue text-2xl font-bold text-nowrap">
              5 K+{" "}
            </h1>
            <p className="text-header-gray text-xs">Service and plugins</p>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="flex md:justify-end justify-center">
        <Image src="/about.png" alt="" width={500} height={500} />
      </div>
    </main>
  );
}

export default About;
