"use client";
import { useAppAnimation } from "@/components/animations/useAnimationContext";
import { useInView } from "framer-motion";
import { useMotionValueEvent } from "framer-motion";
import { useScroll } from "framer-motion";
import { stagger } from "framer-motion";
import { useAnimate } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Features = () => {
  return (
    <section>
      <Sm />
      <Md />
    </section>
  );
};

export default Features;

const Sm = () => {
  const scope = useRef();

  const { backgroundColor, color, navColor, navBackgroundColor } =
    useAppAnimation();
  const { scrollYProgress } = useScroll({
    target: scope,
    offset: ["start center", "end end"],
  });
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.1) {
      backgroundColor.set("#b8cedc");
      color.set("#184363");
      navBackgroundColor.set("#fff");
      navColor.set("#000");
    } else {
      backgroundColor.set("#fff");
      color.set("#000");
      navBackgroundColor.set("#f9a474");
      navColor.set("#582614");
    }
  });
  return (
    <div ref={scope} className=" md:hidden text-3xl relative z-10 space-y-12 py-12">
      <h2 className="sticky top-12 text-center text-balance leading-tight text-4xl">
        Explore endless <br /> possiblities
      </h2>

      <div className=" space-y-3  px-6 ">
        <div className="box sticky top-40 box-1 w-[full] aspect-[1/1.5] shadow-sm rounded-2xl p-6 bg-secondary-purple text-primary-purple space-y-6 px-6">
          <h4>Sleek and Intuitive Designs</h4>
          <p className="text-sm">
            Experience user-centric designs tailored to your brand, ensuring
            seamless navigation for your visitors.
          </p>
          <div className="flex justify-center items-center">
            <div className="relative w-32 h-44 -rotate-12 z-10 translate-x-1/4 ">
              <Image
                src="/givingli/happybirthdaycard.webp"
                fill
                alt=""
                className="object-cover object-center"
              />
            </div>
            <div className="relative w-32 h-44 ">
              <Image
                src="/givingli/yellow-icon-cerebrating.webp"
                fill
                alt=""
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
        <div
          className="box sticky  box-2 w-full aspect-[1/1.5] shadow-sm  bg-secondary-pink text-primary-pink
             top-[11.5rem] p-6 rounded-2xl space-y-6 "
        >
          <div className="flex  flex-col ">
            <div className="">
              <h4>Dynamic Animation Integration</h4>
              <p className="text-sm mt-6">
                Infuse life into your website with animations that engage and
                delight, leaving a lasting impression on your audience.
              </p>
            </div>
          </div>
          <div className="absolute bottom-4  translate-y-1/4">
            <div className="relative  w-64 h-72  ">
              <Image
                src="/givingli/sheduling.svg"
                fill
                alt=""
                className="object- object-scale-down rounded-xl "
              />
            </div>
          </div>
        </div>
        <div
          className="box sticky top-[13.2rem] box-3 w-full aspect-[1/1.5] rounded-2xl shadow-sm bg-secondary-green text-primary-green
              p-6 space-y-6
            "
        >
          <div className="flex justify-center items-center"></div>
          <div>
            <h4>Mobile Responsive Excellence</h4>
            <p className="text-sm line-clamp-3">
              Ensure your website looks stunning and functions flawlessly across
              all devices, reaching your audience wherever they are.
            </p>
          </div>
          <div className="relative w-64 h-28 ">
            <Image
              src="/givingli/cash.svg"
              fill
              alt=""
              className="object-center object-scale-down rounded-xl "
            />
          </div>
        </div>
        <div
          className="box sticky top-60 box-4  w-full aspect-[1/1.5] rounded-2xl shadow-sm  bg-secondary-yellow text-primary-yellow overflow-hidden
              p-6
            "
        >
          <div>
            <h4>Customizable to Your Vision</h4>
            <p className="text-sm">
              Tailor every aspect of your website to reflect your unique brand
              identity and meet your specific needs.
            </p>
            <div className="absolute mt-3 left-1/2 -translate-x-1/2 size-52">
              <div className="relative w-full h-full">
                <Image
                  src="/givingli/inbox.webp"
                  alt=""
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="box sticky top-64 box-5 w-full aspect-[1/1.5] rounded-2xl shadow-sm  bg-secondary-orange text-primary-orange
             p-6 space-y-6
            "
        >
          <div className="flex flex-col gap-6  w-full ">
            <div className="space-y-3">
              <h4>Speed and Performance Optimization</h4>
              <p className="text-sm">
                Maximize your website&apos;s speed and performance, providing
                visitors with a smooth and responsive browsing experience.
              </p>
            </div>
            <div className="relative w-60 aspect-[2/1]">
              <Image
                fill
                src="/givingli/gift2.webp"
                alt=""
                className="object-cover object-center rounded-2xl"
              />
            </div>
          </div>
        </div>
        <div
          className="box sticky top-68 box-6 w-full aspect-[1/1.5] rounded-2xl shadow-sm bg-secondary-blue p-6 space-y-6 overflow-hidden text-primary-blue
             "
        >
          <div className="space-y-3">
            <h4>Expert Support Every Step of the Way</h4>
            <p className="text-sm">
              Receive dedicated support from our team of experts, ensuring your
              journey to an exceptional website is smooth and hassle-free.
            </p>
          </div>
          <div className="absolute  bottom-0 right-0  size-52">
            <div className="relative w-full h-full">
              <Image
                src="/givingli/mob-screenshot.webp"
                alt=""
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Md = () => {
  const [scope, animate] = useAnimate();

  const { backgroundColor, color, navColor, navBackgroundColor } =
    useAppAnimation();
  const { scrollYProgress } = useScroll({
    target: scope,
    offset: ["start center", "end end"],
  });

  const inView = useInView(scope, {
    margin: "200px 0px 0px 400px",
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.1) {
      backgroundColor.set("#b8cedc");
      color.set("#184363");
      navBackgroundColor.set("#fff");
      navColor.set("#000");
    } else {
      backgroundColor.set("#fff");
      color.set("#000");
      navBackgroundColor.set("#f9a474");
      navColor.set("#582614");
    }
  });
  useEffect(() => {
    if (inView) {
      animate(
        ".box",
        { opacity: [0, 1] },
        {
          duration: 0.6,
          delay: stagger(0.175),
        }
      );
    }
  }, [inView]);

  return (
    <div>
      <div className="container mx-auto max-w-4xl py-12 space-y-12 px-6 hidden md:block">
        <h2 className="text-center text-balance leading-none text-4xl">
          Explore endless <br /> possiblities
        </h2>
        <div className="grid grid-cols-3 gap-3" ref={scope}>
          <div
            className="box box-1 opacity-0 bg-secondary-purple text-primary-purple row-span-2 p-6 rounded-2xl
          space-y-10
          "
          >
            <h4>
              Sleek and Intuitive <br /> Designs
            </h4>
            <div className="flex ">
              <div className="relative w-32 h-44 -rotate-12 z-10 translate-x-1/4 ">
                <Image
                  src="/givingli/happybirthdaycard.webp"
                  fill
                  alt=""
                  className="object-cover "
                />
              </div>
              <div className="relative w-32 h-44 ">
                <Image
                  src="/givingli/yellow-icon-cerebrating.webp"
                  fill
                  alt=""
                  className="object-cover "
                />
              </div>
            </div>

            <p className="text-sm">
              Experience user-centric designs tailored to your brand, ensuring
              seamless navigation for your visitors.
            </p>
          </div>
          <div className="box box-2 opacity-0 bg-secondary-pink text-primary-pink col-span-2 p-6  rounded-2xl">
            <div className="flex justify-between items-center ">
              <div className="">
                <h4>Dynamic Animation Integration</h4>
                <p className="text-sm">
                  Infuse life into your website with animations that <br />{" "}
                  engage and delight, leaving a lasting impression on your
                  audience.
                </p>
              </div>
              <div className="relative  w-40 h-44 ">
                <Image
                  src="/givingli/sheduling.svg"
                  fill
                  alt=""
                  className="object- object-scale-down rounded-xl "
                />
              </div>
            </div>
          </div>
          <div
            className="box box-3 opacity-0 bg-secondary-green text-primary-green p-6 rounded-2xl
          flex flex-col justify-between "
          >
            <div className="">
              <div className="relative w-52 h-28 ">
                <Image
                  src="/givingli/cash.svg"
                  fill
                  alt=""
                  className="object-center object-scale-down rounded-xl "
                />
              </div>
            </div>
            <div>
              <h4>Mobile Responsive Excellence</h4>
              <p className="text-sm line-clamp-3">
                Ensure your website looks stunning and functions flawlessly
                across all devices, reaching your audience wherever they are.
              </p>
            </div>
          </div>
          <div className="box box-4 bg-secondary-yellow text-primary-yellow opacity-0 p-6 rounded-2xl  overflow-hidden relative">
            <div>
              <h4>Customizable to Your Vision</h4>
              <p className="text-sm">
                Tailor every aspect of your website to reflect your unique brand
                identity and meet your specific needs.
              </p>
              <div className="absolute mt-3 left-1/2 -translate-x-1/2 size-44">
                <div className="relative w-full h-full">
                  <Image
                    src="/givingli/inbox.webp"
                    alt=""
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="box box-5 opacity-0 bg-secondary-orange text-primary-orange place-items-center relative col-span-2 p-6 rounded-2xl">
            <div className="flex justify-around items-center w-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 px-6">
              <div className="">
                <h4>Speed and Performance Optimization</h4>
                <p className="text-sm">
                  Maximize your website&apos;s speed <br /> and performance,
                  providing visitors with a smooth and responsive browsing
                  experience.
                </p>
              </div>

              <div className="relative w-52 aspect-[2/1]">
                <Image
                  fill
                  src="/givingli/gift2.webp"
                  alt=""
                  className="object-cover object-center rounded-2xl"
                />
              </div>
            </div>
          </div>
          <div className="box box-6 opacity-0 h-52 bg-secondary-blue text-primary-blue p-6 rounded-2xl relative overflow-hidden">
            <div>
              <h4>Expert Support Every Step of the Way</h4>
              <p className="text-sm line-clamp-3">
                Receive dedicated support from our team of experts, <br />{" "}
                ensuring your journey to an exceptional website is smooth and
                hassle-free.
              </p>
            </div>

            <div className="absolute mt-3 right-0  size-44">
              <div className="absolute w-full h-full">
                <Image
                  src="/givingli/mob-screenshot.webp"
                  alt=""
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
