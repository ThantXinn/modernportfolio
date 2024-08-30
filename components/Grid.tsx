/** @format */

import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section>
      <BentoGrid className='w-full py-20'>
        {gridItems.map(
          ({
            title,
            description,
            className,
            img,
            imgClassName,
            titleClassName,
            spareImg,
            id,
          }) => (
            <BentoGridItem
              key={id}
              title={title}
              description={description}
              id={id}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          ),
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;
