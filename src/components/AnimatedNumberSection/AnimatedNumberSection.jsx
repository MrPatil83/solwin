import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FadeUp } from "../../utils/Animation";
import { motion } from "framer-motion";

const AnimatedNumberSection = () => {
  const [brands, setBrands] = useState(0);
  const [products, setProducts] = useState(0);
  const [useCases, setUseCases] = useState(0);
  const [energySavings, setEnergySavings] = useState(0);

  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  const startAnimation = (setter, target, speed) => {
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setter(Math.min(count, target));
      if (count >= target) clearInterval(interval);
    }, speed);
  };

  useEffect(() => {
    if (inView) {
      startAnimation(setBrands, 15, 100);
      startAnimation(setProducts, 50, 50);
      startAnimation(setUseCases, 150, 5);
      startAnimation(setEnergySavings, 80, 25);
    }
  }, [inView]);

  return (
    <motion.div
      variants={FadeUp(0.3)}
      initial="hidden"
      whileInView={"visible"}
      // whileHover={{ scale: 1.1 }}
      className="py-8 w-[20rem] mb-48 bg-background rounded-[4rem] grid  mx-auto md:h-[10rem] md:w-[37rem] md:mb-[20rem] lg:h-[12rem] lg:w-[51rem] lg:mb-[40rem] xl:my-14 xl:w-[80rem] xl:h-[14rem] xl:mt-10"
      ref={ref}
    >
      <div className=" justify-center text-center items-center grid grid-col-1 pl-14 md:grid-cols-4 md:ml-10 md:px-2 lg:px-1 xl:ml-24">
        <div className="w-1/4 text-center">
          <div className="p-4 rounded-lg">
            <div className=" text-[3rem]  poppins-regular text-[#9729f2] md:text-[2rem] lg:text-[3rem] xl:text-[4rem]">
              <p>
                <span>{brands}+</span>
              </p>
            </div>
            <h3 className="mt-2 text-lg poppins-regular text-secondary md:text-sm md:mb-4 lg:text-base xl:text-lg xl:pl-4">
              Brands
            </h3>
          </div>
        </div>

        <div className="w-1/4 text-center">
          <div className="p-4 rounded-lg ">
            <div className=" text-[3rem] poppins-regular text-[#f9762a] md:text-[2rem] lg:text-[3rem] xl:text-[4rem]">
              <p>
                <span>{products}+</span>
              </p>
            </div>
            <h3 className="mt-2 text-lg poppins-regular text-secondary md:text-sm md:mb-4 lg:text-base xl:text-lg xl:pl-4">
              Products
            </h3>
          </div>
        </div>

        <div className="w-1/4 text-center">
          <div className="p-4 rounded-lg ">
            <div className=" text-[3rem] poppins-regular text-[#db007c] md:text-[2rem] lg:text-[3rem] xl:text-[4rem]">
              <p>
                <span>{useCases}+</span>
              </p>
            </div>
            <h3 className=" text-lg mt-2 poppins-regular text-secondary md:text-sm md:mb-4 lg:text-base xl:text-lg xl:w-[10rem]">
              Happy-Customers
            </h3>
          </div>
        </div>

        <div className="w-1/4 text-center">
          <div className="p-4 rounded-lg ">
            <div className=" text-[3rem] poppins-regular text-[#199e41] md:text-[2rem] lg:text-[3rem] xl:text-[4rem]">
              <p>
                <span>{energySavings}%</span>
              </p>
            </div>
            <h3 className="mt-2 text-lg poppins-regular text-secondary md:text-sm md:mb-4 lg:text-base xl:text-lg xl:w-[10rem]">
              Energy Savings
            </h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedNumberSection;
