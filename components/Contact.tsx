/** @format */

import { socialMedia } from "@/data";
import Image from "next/image";
import { IoIosSend } from "react-icons/io";
import ShimmerButton from "./ui/ShimmerButton";
import { SparklesCore } from "./ui/Sparkles";

const Contact = () => {
  return (
    <footer
      id='contact'
      className='pt-10 pb-10'>
      <div className='flex flex-col items-center justify-center overflow-hidden'>
        <h1 className='heading lg:max-w-[45vw] leading-10'>
          Ready to collaborate<span className='text-purple'>?</span> Reach out
          today, and let&apos;s turn{" "}
          <span className='text-purple'>your ideas</span> into reality.
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
          Let&apos;s connect! I&apos;m just a message away from helping you
          achieve your goals.
        </p>
        <div className='w-[40rem] h-40 relative'>
          {/* Gradients */}
          <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm' />
          <div className='absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4' />
          <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm' />
          <div className='absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4' />

          {/* Core component */}
          <SparklesCore
            background='transparent'
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className='w-full h-full'
            particleColor='#FFFFFF'
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className='absolute inset-0 w-full h-full bg-black-400 [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)] pb-10'></div>
        </div>

        <a
          href='mailto:thantzin626@gmail.com'
          className='z-50 p-1 cursor-pointer'>
          <ShimmerButton
            title="Let's get in touch"
            icon={<IoIosSend />}
            position='right'
          />
        </a>
      </div>
      <div className='flex mt-16 md:mb-14 md:flex-row flex-col justify-between gap-y-2 items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>
          Copyring © 2024 Thant Xinn
        </p>
        <div className='flex items-center md:gap-3 gap-6'>
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-100 rounded-lg border border-black-300'>
              <Image
                src={profile.img}
                alt={"profile"}
                width={20}
                height={20}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
