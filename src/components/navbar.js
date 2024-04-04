"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Cross, Hamburger } from "@/components/icon";
import { useAppAnimation } from "./animations/useAnimationContext";
import Contact from "./contact";
export const Navbar = () => {
  const [active, setActive] = useState(false);
  const { navBackgroundColor, navColor,contactActive, setContactActive } = useAppAnimation();



  return (
    <>
      <motion.header >
        <nav className=" container fixed z-50 top-0 left-6  mx-auto px-6 py-3 flex justify-between items-center">
          <div className="logo -ml-6">
            <Image
              src="/logo.svg"
              alt="logo"
              width={120}
              height={120}
              className="object-cover object-center"
            />
          </div>
          <div>
            <div className="relative px-3">
              <div className="cursor-pointer z-50 relative">
                {
                  <motion.div
                    className="icon cursor-pointer bg-primary-blue text-secondary-blue p-3 rounded-full z-50"
                    onClick={() => {
                      setActive(!active);
                    }}
                  >
                    {active ? (
                      <Cross className="cursor-pointer" />
                    ) : (
                      <Hamburger className="cursor-pointer" />
                    )}
                  </motion.div>
                }
              </div>
              {active && (
                <motion.ul
                  className=" absolute rounded-md bg-white text-black right-4  flex justify-center items-center p-10 flex-col gap-1 z-50 !cursor-pointer "
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
                  style={{
                    color: navColor,
                    backgroundColor: navBackgroundColor,
                  }}
                >
                  <motion.li
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.3, delay: 0.1 },
                    }}
                    className="cursor-pointer relative z-50"
                  >
                    About Us
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.3, delay: 0.2 },
                    }}
                    className="cursor-pointer relative z-50"
                  >
                    Pricing
                  </motion.li>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.3, delay: 0.3 },
                    }}
                    className="mt-2 text-secondary-blue py-2 px-4 rounded-md bg-primary-blue cursor-pointer"
                    onClick={() => {
                      setContactActive(!contactActive);
                      setActive(false);
                    }}
                  >
                    Contact
                  </motion.button>
                </motion.ul>
              )}
            </div>
          </div>
        </nav>
      </motion.header>
    </>
  );
};


