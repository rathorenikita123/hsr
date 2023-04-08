/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer p-12 bg-gradient-to-r from-yellow via-blue to-sky ">
      <div>
        <img src="/images/logo.png" alt="logo" className="h-20 w-24" />
        <p className=" text-lg font-bold text-green">
          Nature's Palette
          <br />
          Bringing nature to your doorstep
        </p>
      </div>
      <div>
        <span className="footer-title text-brown">Services</span>
        <a className="link link-hover text-base">Branding</a>
        <a className="link link-hover text-base">Design</a>
        <a className="link link-hover text-base">Marketing</a>
        <a className="link link-hover text-base">Advertisement</a>
      </div>
      <div>
        <span className="footer-title text-brown">Company</span>
        <a className="link link-hover text-base">About us</a>
        <a className="link link-hover text-base">Contact</a>
        <a className="link link-hover text-base">Jobs</a>
        <a className="link link-hover text-base">Press kit</a>
      </div>
      <div>
        <span className="footer-title text-brown">Legal</span>
        <a className="link link-hover text-base">Terms of use</a>
        <a className="link link-hover text-base">Privacy policy</a>
        <a className="link link-hover text-base">Cookie policy</a>
      </div>
      <div>
        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          onClick={scrollToTop}
          class="fixed bottom-5 right-5 inline-block rounded-full bg-[#DC3535] p-2 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke-width="2.5"
            stroke="currentColor"
            class="h-4 w-4 text-white"
          >
            <path
              fill-rule="evenodd"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
              clip-rule="evenodd"
              style={{ stroke: "white" }}
            />
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
