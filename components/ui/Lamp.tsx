/** @format */

"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <>
      {/* for large/medium devices */}
      <div
        className={cn(
          "max-sm:hidden relative w-full flex pt-16 h-full flex-col items-center justify-center overflow-hidden bg-black-400 rounded-md z-0",
          className,
        )}>
        <div className='mt-48 lg:mt-56 relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0'>
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className='absolute inset-auto right-1/2 h-56 overflow-visible w-full bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]'>
            <div className='absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]' />
            <div className='absolute w-40  h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]' />
          </motion.div>
          <motion.div
            initial={{ opacity: 0.5, width: "15rem" }}
            whileInView={{ opacity: 1, width: "30rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            className='absolute inset-auto left-1/2 h-56 w-full bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]'>
            <div className='absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]' />
            <div className='absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]' />
          </motion.div>
          <div className='absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl'></div>
          <div className='absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md'></div>
          <div className='absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl'></div>
          <motion.div
            initial={{ width: "8rem" }}
            whileInView={{ width: "16rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className='absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl'></motion.div>
          <motion.div
            initial={{ width: "15rem" }}
            whileInView={{ width: "30rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className='absolute inset-auto z-50 h-0.5 w-full -translate-y-[7rem] bg-cyan-400 '></motion.div>

          <div className='absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 '></div>
        </div>
        <div className='top-[15.75rem] lg:top-56 relative z-50 flex -translate-y-80 flex-col items-center px-5'>
          {children}
        </div>
      </div>
      {/* for mobile devices */}
      <div
        className={cn(
          "hidden relative max-sm:flex min-h-[40vh] flex-col items-center justify-center overflow-hidden bg-black-400 w-full rounded-md z-0",
          className,
        )}>
        <div className='mt-[11rem] relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 '>
          <motion.div
            initial={{ opacity: 0.5, width: "7rem" }}
            whileInView={{ opacity: 1, width: "15rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            id='right_divgradient'
            className='absolute inset-auto right-1/2 h-56 overflow-visible w-1/2 bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]'>
            <div className='absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]' />
            <div className='absolute w-40  h-[100%] left-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]' />
          </motion.div>
          <motion.div
            initial={{ opacity: 0.5, width: "7rem" }}
            whileInView={{ opacity: 1, width: "15rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            }}
            id='left_divgradient'
            className='absolute inset-auto left-1/2 h-56 w-1/2 bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]'>
            <div className='absolute  w-40 h-[100%] right-0 bg-slate-950  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]' />
            <div className='absolute  w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]' />
          </motion.div>
          <div className='absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl'></div>
          <div className='absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md'></div>
          <div className='absolute inset-auto z-50 h-36 w-[14rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl'></div>
          <motion.div
            initial={{ width: "4rem" }}
            whileInView={{ width: "8rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className='absolute inset-auto z-30 h-36 w-32 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl'></motion.div>
          <motion.div
            initial={{ width: "7rem" }}
            whileInView={{ width: "15rem" }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className='absolute inset-auto z-50 h-0.5 w-full -translate-y-[7rem] bg-cyan-400 '></motion.div>

          <div className='absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 '></div>
        </div>
        <div className='top-[12rem] relative z-50 flex -translate-y-80 flex-col items-center px-5'>
          {children}
        </div>
      </div>
    </>
  );
};
