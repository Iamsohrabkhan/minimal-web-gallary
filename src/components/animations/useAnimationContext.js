"use client";
import { useMotionValue } from "framer-motion";
import React, { createContext, useContext, useState } from "react";

// Step 2: Create a context with a default value
const MyContext = createContext();

// Step 3: Create a provider component
export const ContextProvider = ({ children }) => {
  const backgroundColor = useMotionValue("#b8cedc");
  const color = useMotionValue("#184363");
  // const backgroundColorSpring=useSpring(backgroundColor)
  // const colorSpring=useSpring(color)
  const navBackgroundColor = useMotionValue("#fff");
  const navColor = useMotionValue("#000");
  const [contactActive, setContactActive] = useState(false);
  const [marqueStart, setMarqueStart] = useState(false);

  const value = {
    backgroundColor,
    marqueStart,
    setMarqueStart,
    color,
    navBackgroundColor,
    navColor,
    contactActive,
    setContactActive,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

// Step 4: Create a custom hook to access the context value
export const useAppAnimation = () => {
  return useContext(MyContext);
};
