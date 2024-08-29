import  { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FadeUp} from '../../utils/Animation';
import { motion} from "framer-motion";

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
     className="py-8 bg-background rounded-[4rem] mx-auto w-[80rem] my-10" ref={ref}>
      <div className="flex justify-around">
        <div className="w-1/4 text-center">
          <div className="p-4 rounded-lg">
            <div className="text-[4rem] font-bold text-[#9729f2]">
              <p><span>{brands}+</span></p>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-secondary">Brands</h3>
          </div>
        </div>

        <div className="w-1/4 text-center">
          <div className="p-4 rounded-lg ">
            <div className="text-[4rem] font-bold text-[#f9762a]">
              <p><span>{products}+</span></p>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-secondary">Products</h3>
          </div>
        </div>

        <div className="w-1/4 text-center">
          <div className="p-4 rounded-lg ">
            <div className="text-[4rem] font-bold text-[#db007c]">
              <p><span>{useCases}+</span></p>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-secondary">Happy-Customers</h3>
          </div>
        </div>

        <div className="w-1/4 text-center">
          <div className="p-4 rounded-lg ">
            <div className="text-[4rem] font-bold text-[#199e41]">
              <p><span>{energySavings}%</span></p>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-secondary">Energy Savings</h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedNumberSection;
