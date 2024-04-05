"use client";
import { motion } from "framer-motion";
import { Input, Label, LabelInputContainer, Textarea } from "./form";
import { Cross1Icon } from "@radix-ui/react-icons";
import { AnimatePresence } from "framer-motion";
import { useAppAnimation } from "./animations/useAnimationContext";

const Contact = () => {
  const {contactActive, setContactActive } = useAppAnimation();

  return (
    <AnimatePresence>
      {contactActive && (
        <>
          <div
            className="fixed inset-0  h-svh w-full overflow-hidden z-40 bg-black/50 backdrop-blur"
            onClick={()=>{setContactActive(false)}}
          />
          <motion.div
            className=" fixed z-50 top-0  w-full md:w-fit overflow-hidden left-1/2 p-6 rounded-md shadow-xl "
            style={{ x: "-50%", y: "-50%" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div
              className="bg-red-100 ml-auto relative z-50 cursor-pointer mb-2 w-fit p-2 rounded-full scale-100 hover:scale-110 transfrom transition-all duration-200 "
              onClick={() => {
                setContactActive(false);
              }}
            >
              <Cross1Icon className=" text-red-800 " />
            </div>
            <ContactElement />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Contact;

export const ContactElement = () => {
  const { backgroundColor, color } =
    useAppAnimation();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <motion.div
      className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input "
      style={{ color, backgroundColor }}
    >
      <h2 className="font-bold text-xl">Let&apos;s Connect</h2>
      <p className="text-sm lg:text-lg max-w-sm mt-2 ">
        Drop us a line, and let&apos;s turn your vision into reality.
      </p>

      <form className="my-4" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Message</Label>
          <Textarea id="message" placeholder="Tell us about your Project." />
        </LabelInputContainer>
        <button
          className=" relative group/btn  w-full text-secondary-blue bg-primary-blue active:scale-95 hover:scale-105 transform duration-200 ease-in-out rounded-md h-10 font-medium"
          type="submit"
        >
          Send Us Message&rarr;
        </button>
        <div className="mt-2 text-sm text-primary-blue">
          Not a fan of forms? No sweat! Email us at{" "}
          <a className="underline" href="mailto:7ohrabkhan@gmail.com">
            Minimal Web Gallary
          </a>
        </div>
      </form>
    </motion.div>
  );
};
