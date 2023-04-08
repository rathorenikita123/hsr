/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "animate.css";

const Navbar = () => {
  return (
    <div
      className="navbar bg-base-100 px-8 bg-gradient-to-r from-yellow via-blue to-sky"
      data-theme="emerald"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <img src="/images/menu.png" alt="menu" className="h-8 w-8 " />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-mustard animate__tada"
          >
            <li>
              <a className="text-lg" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="text-lg" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="text-lg" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <img src="/images/logo.png" alt="logo" className="h-20 w-24" />
      </div>
      <div className="navbar-end">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
