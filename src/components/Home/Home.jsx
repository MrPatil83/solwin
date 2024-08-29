import  { useEffect, useState } from 'react';
import { motion} from "framer-motion";
import {Link} from "react-router-dom"
import { FadeLeft,FadeRight} from '../../utils/Animation';
import HomeAutomation from "../../../assets/homeCarosul/HomeAutomation.png";
import HomeAutomation2 from "../../../assets/homeCarosul/HomeAutomation2.png";
import HomeAutomation3 from "../../../assets/homeCarosul/HomeAutomation3.png";
import lightingautomation from "../../../assets/homeImages/lightingautomation.png";
import smartlighting  from "../../../assets/homeImages/homeBoxImages/smartlighting.jpg";
import IntelligentHomeSecurity from "../../../assets/homeImages/homeBoxImages/IntelligentHomeSecurity.jpg";
import InteractiveHome from "../../../assets/homeImages/homeBoxImages/InteractiveHome.jpg";
import multimedia from "../../../assets/homeImages/homeBoxImages/multimedia.jpg";
import EnergyEfficiency from "../../../assets/homeImages/homeBoxImages/EnergyEfficiency.jpg";
import Protection from "../../../assets/homeImages/homeBoxImages/Protection.jpg";
import ClimateControl from "../../../assets/homeImages/homeBoxImages/ClimateControl.jpg";
import SurveillanceSystem from "../../../assets/homeImages/homeBoxImages/SurveillanceSystem.jpg"
import AnimatedNumberSection from '../AnimatedNumberSection/AnimatedNumberSection';


const carouselData = [
  {
    id: 1,
    image: HomeAutomation,
    label: "Smart Lighting Solution",
    description: "Revolutionize your space with intelligent lighting that adapts to your schedule, mood, and preferences for maximum comfort and efficiency"
  },
  {
    id: 2,
    image: HomeAutomation2,
    label: "Advanced Climate Control Systems",
    description: "Optimize your home's temperature with automated adjustments based on real-time conditions and occupancy, ensuring consistent comfort and energy savings"
  },
  {
    id: 3,
    image: HomeAutomation3,
    label: "Mobile Home Management",
    description: "Seamlessly control and monitor your home from anywhere in the world using your mobile device, ensuring full access to all systems and automation regardless of your location."
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselData.length);
    }, 5000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval); // Cleanup on unmount
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % carouselData.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide(
      (currentSlide - 1 + carouselData.length) % carouselData.length
    );
  };

  return (
    <>
    <section className=' overflow-hidden -mt-7'>
    <div
      id="carouselExampleCaptions"
      className="relative overflow-hidden"
      data-twe-carousel-init
      data-twe-ride="carousel"
    >


      {/* Carousel items */}
      <div
        className="flex transition-transform duration-[600ms] ease-in-out h-[45rem] w-screen md:h-[29rem] md:w-screen lg:h-[40rem] lg:w-screen xl:h-[45rem] xl:w-screen"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {carouselData.map((item) => (
          <div key={item.id} className="min-w-full relative overflow-hidden">
            <img src={item.image} className="block w-screen h-[21rem] md:h-[33rem] lg:h-[42rem] xl:h-[45rem]" alt={item.label} />
            <div className="absolute inset-x-[15%] bottom-5 py-5 text-center text-white block">
              <h5 id={`label-${item.id}`} className=" -mt-[30rem] mx-auto text-base text-primary poppins-regular md:text-2xl md:mt-[10rem] lg:text-3xl">
                {item.label}
              </h5>
              <p id={`description-${item.id}`} className=" mx-auto text-secondary text-sm md:-mb-3 md:text-lg lg:text-xl">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel controls - prev item */}
      <button
        className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={goToPrevSlide}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Previous
        </span>
      </button>

      {/* Carousel controls - next item */}
      <button
        className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
        type="button"
        onClick={goToNextSlide}
      >
        <span className="inline-block h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Next
        </span>
      </button>
    </div>
    {/* second part of home */}
    <div className=' grid grid-cols-1 -mt-[23rem] justify-center p-10 md:mt-10 overflow-hidden md:grid-cols-2'>
        <motion.img
       initial={{ opacity: 0, x: -200 }}
       whileInView={{ opacity: 1, x: 0 }}
       transition={{ duration: 1.4, delay: 0.6 }}
         className='flex h-[16rem] w-auto object-fill mx-auto md:h-[20rem] md:w-[26rem] lg:h-[22rem] lg:w-[30rem] xl:h-[30rem] xl:w-[45rem] rounded-3xl' src={lightingautomation} alt=''/>
        <motion.p 
        variants={FadeLeft(0.6)}
        initial="hidden"
        whileInView={"visible"}
        // whileHover={{ scale: 1.1 }}
        className=' flex items-center text-sm mx-auto min-w-20 poppins-regular -ml-4 pt-4 text-center text-background md:poppins-regular overflow-hidden  md:w-[23rem] md:ml-1 md:text-[0.700rem] lg:mt-4 lg:text-sm lg:mx-auto lg:w-full  xl:text-base xl:ml-4 xl:w-[40rem]'>Transform your living environment with cutting-edge smart home automation solutions. Our Smart Lighting Solutions offer customizable, energy-efficient lighting that adapts to your schedule and mood, enhancing both comfort and ambiance. With our Advanced Climate Control Systems, you can maintain optimal temperature and energy efficiency through automated adjustments based on real-time conditions. Experience unparalleled convenience with Global Mobile Home Management, allowing you to remotely monitor and control your home from anywhere in the world using your mobile device. Embrace the future of home automation and enjoy a smarter, more connected lifestyle.
        </motion.p>
    </div>
    {/* third part of home */}
    {/* <div className='grid grid-cols-3 items-center mt-10 mx-auto'>
        <div>
        <img className='h-[12rem] w-[18rem] py-2' src={smartlighting} alt=''/></div>
        <motion.div
        variants={FadeUp(0.3)}
        initial="hidden"
        whileInView={"visible"}
        whileHover={{ scale: 1.1 }} 
        ><img className='h-[12rem] w-[18rem] py-2' src={IntelligentHomeSecurity} alt=''/></motion.div>
        <motion.div 
        variants={FadeLeft(0.3)}
        initial="hidden"
        whileInView={"visible"}
        whileHover={{ scale: 1.1 }}
        ><img className='h-[12rem] w-[18rem] py-2' src={InteractiveHome} alt=''/></motion.div>
        <motion.div
         variants={FadeRight(0.3)}
         initial="hidden"
         whileInView={"visible"}
         whileHover={{ scale: 1.1 }}
        ><img className='h-[12rem] w-[18rem] py-2' src={multimedia} alt=''/></motion.div>
        <motion.div
        variants={FadeUp(0.4)}
        initial="hidden"
        whileInView={"visible"}
        whileHover={{ scale: 1.1 }} 
        ><img className='h-[12rem] w-[18rem] py-2' src={EnergyEfficiency} alt=''/></motion.div>
        <motion.div
        variants={FadeLeft(0.3)}
        initial="hidden"
        whileInView={"visible"}
        whileHover={{ scale: 1.1 }}
        ><img className='h-[12rem] w-[18rem] py-2' src={Protection} alt=''/></motion.div>
        <motion.div
          variants={FadeRight(0.3)}
          initial="hidden"
          whileInView={"visible"}
          whileHover={{ scale: 1.1 }}
        ><img className='h-[12rem] w-[18rem] py-2' src={ClimateControl} alt=''/></motion.div>
        <motion.div
        variants={FadeUp(0.5)}
        initial="hidden"
        whileInView={"visible"}
        whileHover={{ scale: 1.1 }} 
        ><img className='h-[12rem] w-[18rem] py-2' src={SurveillanceSystem} alt=''/></motion.div>
    </div> */}
    <motion.div
    variants={FadeRight(0.5)}
    initial="hidden"
    whileInView={"visible"}
    // whileHover={{ scale: 1.1 }}
     className='grid grid-cols-3 p-24  gap-4 overflow-hidden'>
        <Link to="/smartlighting">
        <img className=' cursor-pointer w-[31rem] rounded-2xl hover:scale-105' src={smartlighting} alt=''/>
        </Link>
        <Link to="/homesequrity">
        <img className=' cursor-pointer rounded-2xl hover:scale-105' src={IntelligentHomeSecurity} alt=''/>
        </Link>
        <Link to="/interactivehome">
        <img className=' cursor-pointer rounded-2xl hover:scale-105' src={InteractiveHome} alt=''/>
        </Link>
        <Link to="/Multimedia">
        <img className=' cursor-pointer h-[17.4rem] w-[29rem] rounded-2xl hover:scale-105' src={multimedia} alt=''/>
        </Link>
        <Link to="/energyefficincy">
        <img className=' cursor-pointer rounded-2xl h-[17.4rem] w-[29rem]  hover:scale-105' src={EnergyEfficiency} alt=''/>
        </Link>
        <Link to="/protection">
        <img className='h-[17.4rem] w-[29rem]  cursor-pointer rounded-2xl hover:scale-105' src={Protection} alt=''/>
        </Link>
        <Link to="/climate">
        <img className=' h-[17.4rem] w-[29rem] cursor-pointer rounded-2xl hover:scale-105' src={ClimateControl} alt=''/>
        </Link>
        <Link to="/surveillancesystem">
        <img className='h-[17.4rem] w-[29rem]  cursor-pointer rounded-2xl hover:scale-105' src={SurveillanceSystem} alt=''/>
        </Link>
    </motion.div>
    {/* fourt part of home */}
    <motion.div
    variants={FadeLeft(0.3)}
    initial="hidden"
    whileInView={"visible"}
    // whileHover={{ scale: 1.1 }}
     className=' overflow-hidden'>
    <h3 className=' flex justify-center text-5xl poppins-regular text-primary'>Smart Home Concepts</h3>
    <div className=''>
        <p className=' px-24 poppins-extralight text-base  mt-4 text-[#0b132c]'>Enhanced home automation involves connecting all the functional elements of your home to a network, typically the Internet, and making them work seamlessly for you. This integration allows you to control, monitor, and track everything from lighting and air conditioning to television and door locks, all from your smartphone, computer, or tablet, no matter where you are in the world. To help you get started, we’ve broken down the home automation experience into individual concepts for a more personalized and comprehensive approach.</p>
        <p className=' px-24 poppins-extralight mt-4 text-base text-[#0b132c]'>Enhanced home automation is about building your smart home lifestyle piece by piece. Think of concepts ⭐️ as the building blocks that come together to create a seamless and personalized experience ?<br/> Each concept plays a crucial role in making your home smarter, from controlling lighting and temperature to managing security and entertainment systems, all accessible from your smartphone, computer, or tablet, wherever you are in the world.</p>
    </div>
    <br/>
    <div className='mx-24 '>
        <p className='text-[#0b132c]  poppins-regular '><strong className='text-[#0e1837]'>Smart Lighting : </strong>Transform your living spaces instantly with our smart lighting solutions, the ultimate mood setters. Whether you're looking to turn your living room into a lively discotheque or create a romantic ambiance in your bedroom, it's as simple as tapping a button on your smartphone. Plus, these lights aren't just for setting the scene-they're smart enough to fit into your daily routine. Create personalized schedules so your lights automatically welcome the evening and switch off when it's bedtime. You can even simulate an 'occupied home' look while you're away, all controlled remotely from anywhere in the world. Embrace the future of living with just a touch.</p>
    </div>
    <div className='mx-24 py-4'>
        <p className='text-[#0b132c]'><strong className='text-[#0e1837]'>Intelligent Security : </strong>Protect your home from intruders with our intelligent security solutions. Once configured, door/window and motion sensors notify you when someone tries to break in your home, when you’re away. As an expansion to the range, we also have wireless doorbells and intelligent locks that provide an additional level of security and mental peace.</p>
    </div>
    <div className='mx-24'>
        <p className='text-[#0b132c]'><strong className='text-[#0e1837]'>Interactive Home : </strong>You can now control everything in your home through your smartphone or voice, no more reaching for switchboards or juggling remotes. With motion sensing and tap recognition (think knock-knock in Underwood style), your home responds to your every move.</p>
    </div>
    <div className='mx-24 py-4'>
        <p className='text-[#0b132c]'><strong className='text-[#0e1837]'>Multimedia : </strong>
        Smart multimedia control lets you wirelessly manage your TV, Xbox, or music player right from your smartphone. Enjoy advanced features like multi-room playback, specialized scenes, and seamless wireless streaming with our smart home solutions.</p>
    </div>
    <div className='mx-24'>
        <p className='text-[#0b132c]'><strong className='text-[#0e1837]'>Energy Efficiency : </strong>TUse the power of technology to save money. Our intelligent sensors automatically turn off your air-conditioner, lights and fans when you’re not home. If that’s not enough, we also give you insights into how much energy you’re consuming and how you can save by creating personalized schedules.</p>
    </div>
    <div className='mx-24 py-4'>
        <p className='text-[#0b132c]'><strong className='text-[#0e1837]'>Protection : </strong>Receive immediate alerts on your smartphone when your home faces fire, flood, or any disaster. Our system can be configured to take swift corrective action—triggering alarms, turning on lights to capture attention, or automatically unlocking doors for a quick and safe evacuation.</p>
    </div>
    <div className='mx-24'>
        <p className='text-[#0b132c]'><strong className='text-[#0e1837]'>Climate Control : </strong>Home automation elevates comfort by letting you monitor ambient temperatures throughout your home and sending commands to your central cooling system for optimal climate control. It also intelligently conserves energy by turning off the AC or cooling system when windows or doors are left open for an extended period.</p>
    </div>
    <div className='mx-24 py-4'>
        <p className='text-[#0b132c]'><strong className='text-[#0e1837]'>Surveillance : </strong>Stay connected to your home, even when you're away at the office or on vacation. Our intelligent CCTV cameras offer 24/7 monitoring, making it easy to keep an eye on what matters. These surveillance cameras can be installed as standalone wireless units or configured as part of a comprehensive NVR system to secure your entire property.</p>
    </div>
    </motion.div>
    {/* fifth part of home */}
    <AnimatedNumberSection/>
    </section>
    </>
  );
};

export default Home;
