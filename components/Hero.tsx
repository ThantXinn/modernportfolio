/** @format */
"use client";

import { motion } from "framer-motion";
import { BsAppIndicator } from "react-icons/bs";
import { LampContainer } from "./ui/Lamp";
import ShimmerButton from "./ui/ShimmerButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div
      id='about'
      className='w-full relative top-0 left-0 flex items-center justify-center z-10'>
      <div className='w-full flex flex-col items-center justify-center'>
        <LampContainer>
          <motion.div
            initial={{ opacity: 0.3, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className='mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center tracking-tight text-transparent'>
            <div className='flex justify-center relative my-20 z-10'>
              <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center gap-y-2'>
                <p className='uppercase tracking-widest text-xs text-center text-white-100 max-w-80'>
                  Dynamic Web Development Made Easy with Next.js
                </p>

                {/**
                 *  Link: https://ui.aceternity.com/components/text-generate-effect
                 *
                 *  change md:text-6xl, add more responsive code
                 */}
                <p className='text-center text-2xl md:text-3xl lg:text-4xl text-white-100'>
                  Next.js developer building fast, <br />
                  <span className='text-purple'>dynamic web apps.</span>
                </p>
                <TextGenerateEffect
                  className='text-center md:tracking-wider mt-2 mb-4 text-sm md:text-lg lg:text-2xl text-white-100'
                  words="Hi! I'm Thant Xinn, a Next.js Developer based in Japan."
                />
              </div>
            </div>
            <a href='#projects'>
              <ShimmerButton
                title='Show my projects'
                icon={<BsAppIndicator />}
                position='right'
              />
            </a>
          </motion.div>
        </LampContainer>
      </div>
    </div>
  );
};

export default Hero;
