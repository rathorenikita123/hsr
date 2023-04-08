import React from "react";

const Hero = ({ ...props }) => {
  return (
    <div
      className="hero min-h-[88vh] animate__fadeIn+ mt-8"
      style={{ backgroundImage: `url(${props.bgimage})` }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-green">
            Nature's Palette
          </h1>
          <p className="mb-5 text-xl text-grey">{props.message}</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
