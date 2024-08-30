/** @format */

import Contact from "@/components/Contact";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import MyApproach from "@/components/MyApproach";
import MyExperience from "@/components/MyExperience";
import RecentProjects from "@/components/RecentProjects";
import Testimonials from "@/components/Testimonials";
import { BackgroundBeams } from "@/components/ui/BgBeam";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className='relative flex justify-center items-center flex-col overflow-clip mx-auto bg-black-400'>
      <div className='max-w-7xl w-full'>
        <BackgroundBeams />
        <FloatingNav navItems={navItems} />
        <Hero />
        <div className='max-w-7xl w-full sm:px-20 px-10 mx-auto'>
          <Grid />
          <RecentProjects />
          <Testimonials />
          <MyExperience />
          <MyApproach />
          <Contact />
        </div>
      </div>
    </main>
  );
}
