/** @format */
"use client";
import animationData from "@/data/confetti.json";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { GlobeDemo } from "./GlobeDemo";
import ShimmerButton from "./ShimmerButton";
import { SparklesCore } from "./Sparkles";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className,
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  title,
  description,
  className,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  title?: string;
  description?: string;
  className?: string;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  id: number;
}) => {
  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "thantzin626@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className,
      )}
      style={{
        background: "rgb(3,4,27)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}>
      <div className={`${id === 6 && "flex justify-center "} h-full`}>
        <div className='w-full h-full absolute'>
          {img && (
            <Image
              src={img}
              alt='img'
              width={100}
              height={100}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}>
          {spareImg && (
            <Image
              src={spareImg}
              alt='spareImg'
              width={100}
              height={100}
              className={"object-cover object-center w-full h-full"}
            />
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transation duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10",
          )}>
          <div className='font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10'>
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-30`}>
            {title}
          </div>
          {id === 2 && <GlobeDemo />}
          {id === 3 && (
            <div className='flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2'>
              <div className='flex flex-col gap-3 lg:gap-8'>
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className='lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]'>
                    {item}
                  </span>
                ))}
                <span className='lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]'></span>
              </div>
              <div className='flex flex-col gap-3 lg:gap-8'>
                <span className='lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]'></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className='lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]'>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className='mt-5 relative flex items-center justify-center'>
              <div className='absolute inset-0'>
                <SparklesCore
                  id='tsparticlesfullpage'
                  background='transparent'
                  minSize={0.6}
                  maxSize={1.4}
                  particleDensity={100}
                  className='w-full h-full'
                  particleColor='#FFFFFF'
                />
              </div>
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={defaultOptions}
                  height={200}
                  width={400}
                />
              </div>
              <ShimmerButton
                title={copied ? "Email is Copied!" : "Copy my email"}
                icon={<IoCopyOutline />}
                position='left'
                handleClick={handleCopy}
                otherClasses='!bg-[#161A31]'
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
