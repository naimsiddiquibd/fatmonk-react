import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import useLocation hook
import { FaWhatsapp, FaRegCopy } from "react-icons/fa";
import {
  CheckCircleIcon,
  XMarkIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import { IoIosCall } from "react-icons/io";
import "./Navbar.css";

const Navbar = ({ type }) => {
  const [varientBlack, setVarientBlack] = useState(false);
  const [copied, setCopied] = useState(false);
  const location = useLocation(); // Get current location

  const closeSidebar = () => {
    document.getElementById("my-drawer-3").checked = false;
  };

  useEffect(() => {
    if (type === "black") setVarientBlack(true);
    if (type === "false") setVarientBlack(false);
    if (!type) setVarientBlack(false);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText("+8801722-723891");
    setCopied(true);
    setTimeout(() => setCopied(false), 10000); // Reset copied state after 3 seconds
  };

  // Function to determine if a menu item is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="absolute z-[999999] drawer drawer-top lg:pt-6">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="lg:w-[1180px] w-full navbar mx-auto px-2 lg:px-0">
          <div className="navbar-start">
            <Link to="/">
              <img
                className="w-32 lg:w-[150px]"
                src={varientBlack ? "/fatmonk_logo_black.svg" : "/logo.svg"}
                alt="Fatmonk Studio"
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul
              className="menu menu-horizontal px-0 text-[8px] sm:text-[10px]  lg:text-[14px] 2xl:text-[18px] font-poppins gap-0"
              style={varientBlack ? { color: "black" } : { color: "white" }}
            >
              <li>
                <Link to="/" className={isActive("/") ? "text-monkred" : ""}>
                  Home
                </Link>
              </li>
              <li>
                <details>
                  <summary>Services</summary>
                  <ul
                    className="p-2"
                    style={{ color: "white", backgroundColor: "#1D232A" }}
                  >
                    <li>
                      <Link
                        to="/development"
                        className={
                          isActive("/development") ? "text-monkred" : ""
                        }
                      >
                        Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/uiuxdesign"
                        className={
                          isActive("/uiuxdesign") ? "text-monkred" : ""
                        }
                      >
                        Ui/Ux Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/branddesign"
                        className={
                          isActive("/branddesign") ? "text-monkred" : ""
                        }
                      >
                        Brand Design
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/software_development"
                        className={
                          isActive("/software_development")
                            ? "text-monkred"
                            : ""
                        }
                      >
                        Software Development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/events"
                        className={isActive("/events") ? "text-monkred" : ""}
                      >
                        Events
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link
                  to="/products"
                  className={isActive("/products") ? "text-monkred" : ""}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/plans"
                  className={isActive("/plans") ? "text-monkred" : ""}
                >
                  Plans
                </Link>
              </li>
              <li>
                <Link
                  to="/works"
                  className={isActive("/works") ? "text-monkred" : ""}
                >
                  Works
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  className={isActive("/career") ? "text-monkred" : ""}
                >
                  Career
                </Link>
              </li>
              <li>
                <Link
                  to="/hosting"
                  className={isActive("/hosting") ? "text-monkred" : ""}
                >
                  Hosting
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={isActive("/contact") ? "text-monkred" : ""}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="bg-gradient-to-r to-[#FF003D] from-[#4444C4] font-poppins font-semibold px-4 py-2 lg:px-7 lg:py-3  rounded-full text-xs text-monkwhite sm:text-[10px] md:text-[10px] lg:text-[12px]  hover:bg-monkdeepred cursor-pointer"
              >
                Make a Call
              </div>
              <div
                tabIndex={0}
                className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-monkwhite text-primary-content"
              >
                <div className="card-body">
                  <h3 className="text-sm font-semibold font-poppins text-monkblack">
                    👋 Hey there! Need assistance? Feel free to reach out by
                    clicking one of the buttons below.
                  </h3>
                  <div className="bg-[#F1F9F2] px-4 py-2 rounded-full flex items-center gap-2">
                    <div>
                      <IoIosCall className="text-[#56BA62] text-lg" />
                    </div>
                    <a
                      href="tel:+8801722723891"
                      className="font-semibold text-[#56BA62] text-[14px] cursor-pointer"
                    >
                      +8801722723891
                    </a>
                    {!copied ? (
                      <div
                        onClick={handleCopy}
                        className="flex items-center gap-1 cursor-pointer"
                      >
                        <FaRegCopy className="text-[#7C7C7C]" />
                      </div>
                    ) : (
                      <CheckCircleIcon className="text-[#56BA62]  w-[17px]" />
                    )}
                  </div>
                  <Link
                    to="https://wa.me/+8801722723891"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="bg-[#F1F9F2] px-4 py-2 rounded-full flex items-center justify-center">
                      <div className="flex items-center gap-2">
                        <FaWhatsapp className="text-[#56BA62] text-lg" />
                        <p className="font-semibold text-[#56BA62]">WhatsApp</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost text-monkwhite"
            >
              <Bars2Icon className="h-6 w-6 text-blue-500" />
            </label>
          </div>
        </div>
      </div>
      <div className="drawer-side w-full">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-full min-h-full bg-[#000] gap-y-2 text-[24px] text-monkwhite">
          <div className="flex justify-between">
            <Link to="/">
              <img
                className="w-32 lg:w-[150px] mb-8"
                src="/logo.png"
                alt="Fatmonk Studio"
              />
            </Link>
            <XMarkIcon
              onClick={closeSidebar}
              className="h-6 w-6 mt-3 text-blue-500"
            />
          </div>
          <li>
            <Link to="/" className={isActive("/") ? "text-monkred" : ""}>
              Home
            </Link>
          </li>
          <li>
            <details>
              <summary>Services</summary>
              <ul className="p-2 text-monkwhite text-[18px]">
                <li>
                  <Link
                    to="/development"
                    className={isActive("/development") ? "text-monkred" : ""}
                  >
                    Development
                  </Link>
                </li>
                <li>
                  <Link
                    to="/uiuxdesign"
                    className={isActive("/uiuxdesign") ? "text-monkred" : ""}
                  >
                    Ui/Ux Design
                  </Link>
                </li>
                <li>
                  <Link
                    to="/branddesign"
                    className={isActive("/branddesign") ? "text-monkred" : ""}
                  >
                    Brand Design
                  </Link>
                </li>

                <li>
                  <Link
                    to="/software_development"
                    className={
                      isActive("/software_development") ? "text-monkred" : ""
                    }
                  >
                    Software Development
                  </Link>
                </li>

                <li>
                  <Link
                    to="/events"
                    className={isActive("/events") ? "text-monkred" : ""}
                  >
                    Events
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link
              to="/plans"
              className={isActive("/plans") ? "text-monkred" : ""}
            >
              Plans
            </Link>
          </li>

          <li>
            <Link
              to="/products"
              className={isActive("/products") ? "text-monkred" : ""}
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              to="/plans"
              className={isActive("/plans") ? "text-monkred" : ""}
            >
              Plans
            </Link>
          </li>

          <li>
            <Link
              to="/works"
              className={isActive("/works") ? "text-monkred" : ""}
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              to="/career"
              className={isActive("/career") ? "text-monkred" : ""}
            >
              Career
            </Link>
          </li>
          <li>
            <Link
              to="/hosting"
              className={isActive("/career") ? "text-monkred" : ""}
            >
              Hosting
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={isActive("/hosting") ? "text-monkred" : ""}
            >
              Contact
            </Link>
          </li>
          <li className="absolute bottom-0">
            <div className="absolute text-[16px]">Follow Us</div>
            <div className="flex items-center gap-4">
              <Link to="https://www.facebook.com/fatmonkhere">
                <img
                  className="w-5 cursor-pointer hover:scale-150 transition-transform"
                  src="/facebook.png"
                  alt=""
                />
              </Link>
              <Link to="https://www.linkedin.com/company/fatmonk/mycompany/verification/">
                <img
                  className="w-5 my-7 cursor-pointer hover:scale-150 transition-transform"
                  src="/linkedin.png"
                  alt=""
                />
              </Link>
              <Link to="https://www.instagram.com/fatmonkstudio/">
                <img
                  className="w-5 cursor-pointer hover:scale-150 transition-transform"
                  src="/instagram.png"
                  alt=""
                />
              </Link>
              <Link to="https://www.twitter.com/fatmonkstudio/">
                <img
                  className="w-5 cursor-pointer hover:scale-150 transition-transform"
                  src="/x.png"
                  alt=""
                />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
