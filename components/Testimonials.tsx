/** @format */

import { companies, testimonials } from "@/data";
import Image from "next/image";
import { InfiniteMovingCards } from "./ui/InfiniteMovinigCard";

const Testimonials = () => {
  return (
    <section className='py-20'>
      <h1 className='heading'>
        Real Feedback from Our{" "}
        <span className='text-purple'>Valued Clients</span>
      </h1>
      <div className='flex flex-col items-center mt-6'>
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
        />
      </div>
      <div className='flex flex-wrap items-center justify-center gap-4 mt-5 md:gap-16 max-lg:mt-10'>
        {companies.map(({ id, name, img, nameImg }) => (
          <div
            key={id}
            className='flex md:max-w-60 max-w-32 gap-2'>
            <Image
              src={img}
              alt={name}
              width={24}
              height={24}
              className='md:w-12 w-5'
            />
            <Image
              src={nameImg}
              alt={name}
              width={24}
              height={24}
              className='md:w-24 w-20'
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
