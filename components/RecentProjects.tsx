/** @format */

import { projects } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
import { CardBody, CardContainer, CardItem } from "./ui/3DCard";

const RecentProjects = () => {
  return (
    <section
      id='projects'
      className='py-20'>
      <h1 className='heading'>
        A small selection of{" "}
        <span className='text-purple'>my recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center gap-x-20 gap-y-12 max-sm:gap-y-10 mt-10'>
        {projects.map(
          ({ id, title, des, img, iconLists, link, githublink }) => (
            <div
              key={id}
              className='lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center lg:w-[520px] w-[80vw]'>
              <CardContainer className='inter-var relative'>
                <CardBody className='bg-black-200 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
                  <CardItem
                    translateZ='50'
                    className='text-xl font-bold text-neutral-600 dark:text-white'>
                    {title}
                  </CardItem>
                  <CardItem
                    as='p'
                    translateZ='60'
                    className='text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300'>
                    {des}
                  </CardItem>
                  <CardItem
                    translateZ='100'
                    className='w-full mt-4'>
                    <Image
                      src={img}
                      height='1000'
                      width='1000'
                      className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
                      alt='thumbnail'
                    />
                  </CardItem>
                  <div className='flex items-center justify-between mt-7 mb-3'>
                    <div className='flex items-center'>
                      {iconLists.map((icon, index) => (
                        <div
                          key={icon}
                          style={{
                            transform: `translateX(${-5 * index + 2}px)`,
                          }}
                          className='border border-white/[0.2] flex justify-center items-center rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8'>
                          <Image
                            src={icon}
                            alt='icon'
                            width={34}
                            height={34}
                            className='p-2 h-20 w-20'
                          />
                        </div>
                      ))}
                    </div>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={link}
                      target='__blank'
                      className='max-sm:px-1 px-2 py-2 rounded-xl text-xs font-normal dark:text-white'>
                      <div className='flex justify-center items-center w-24 max-sm:w-16'>
                        <p className='rounded-xl text-xs font-bold max-sm:font-light'>
                          Go to Site
                        </p>
                        <LiaExternalLinkAltSolid
                          className='ms-3 size-4 max-sm:hidden'
                          color='#CBACF9'
                        />
                      </div>
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={githublink}
                      target='__blank'
                      className='max-sm:px-1 px-2 py-2 rounded-xl text-xs font-bold'>
                      <div className='flex justify-center items-center w-24 max-sm:w-16'>
                        <p className='rounded-xl text-xs font-bold max-sm:font-light'>
                          View Code
                        </p>
                        <LiaExternalLinkAltSolid
                          className='ms-3 size-4 max-sm:hidden'
                          color='#CBACF9'
                        />
                      </div>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          ),
        )}
      </div>
    </section>
  );
};

export default RecentProjects;
