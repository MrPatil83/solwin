// import React from 'react'
import { motion} from "framer-motion";
import { FadeUp,FadeLeft,FadeRight} from '../../../utils/Animation';
import BigImage from "../../../../assets/HomeLighting/MainImage/BigImage.jpg";
import operatlight from "../../../../assets/HomeLighting/MainImage/operatlight.jpg";
import SmartACcontroller from "../../../../assets/HomeLighting/SmartACcontroller.jpg";
// gifs
import S360SOLUTION from "../../../../assets/HomeLighting/Gifs/S360SOLUTION.gif";
import RETROFIT from "../../../../assets/HomeLighting/Gifs/RETROFIT.gif";
import Scalable from "../../../../assets/HomeLighting/Gifs/Scalable.gif";
import InnovationResearch from "../../../../assets/HomeLighting/Gifs/InnovationResearch.gif";
import SecureEncrypted from "../../../../assets/HomeLighting/Gifs/SecureEncrypted.gif";
import Support from "../../../../assets/HomeLighting/Gifs/Support.gif";
// svg
// import S360solutions from "../../../../assets/HomeLighting/svg/S360solutions.svg"

const HomeLighting = () => {
  return (
    <section className=" mb-[45rem] overflow-hidden -mt-7">
        <div className=" mx-auto -my-8 w-screen">
            <img className=" h-[40rem] md:h-[45.4rem] w-screen" src={BigImage} alt="CarosulImage"/>
        </div>
        <div className=" mx-auto pt-10">
            <h2 className=" text-3xl text-primary flex justify-center md:pl-14 md:py-4 poppins-regular lg:text-3xl xl:text-5xl">Smart Home Control</h2>
            <div className=" grid grid-cols-1 md:grid-cols-2 mx-auto p-3">
                <motion.img
                 variants={FadeUp(0.3)}
                 initial="hidden"
                 whileInView={"visible"}
                 whileHover={{ scale: 1.07 }}
                 className=" rounded-[2rem] mx-auto w-full md:h-[22rem] lg:h-[20rem] lg:w-[28rem] xl:w-[36rem] xl:h-[25rem]" src={operatlight} alt=""></motion.img>
                <motion.p
                 variants={FadeLeft(0.3)}
                 initial="hidden"
                 whileInView={"visible"}
                 className="  w-[22rem] pt-4 mx-auto poppins-extralight text-[0.750rem] md:text-[0.800rem] md:pt-10 md:ml-4 md:w-[22rem] lg:text-sm lg:pt-14 lg:w-[31.6rem] lg:-ml-[0.4rem] xl:text-lg xl:w-[40rem]">"Control your smart home lights effortlessly from anywhere using a mobile device. Whether you're relaxing in the next room or traveling across the globe, you can operate your home lights remotely with ease. Enjoy the convenience of smart lighting that adapts to your lifestyle with seamless mobile integration. Turn lights on or off, dim them, or set schedules, all from your smartphone or tablet. Enhance your home's security and ambiance by managing lights even when you're away. Never worry about forgetting to turn off the lights again. With mobile control, you can ensure your home is always lit just the way you want it. Experience the future of home automation with smart lighting you can control from anywhere. Stay connected to your home no matter where you are. Smart home lighting puts the power of control in your hands, wherever you may be."</motion.p>
            </div>
            {/* second part */}
            <div className=" grid grid-cols-1 md:grid-cols-2 mx-auto p-3">
            <motion.p
             variants={FadeRight(0.3)}
             initial="hidden"
             whileInView={"visible"}
             className=" w-[22rem] pt-2 pb-4 mx-auto poppins-extralight text-[0.750rem] md:text-[0.800rem] md:pt-14 md:ml-2 md:w-[22rem] lg:text-sm lg:pt-14 lg:w-[30rem] xl:pt-24 xl:text-lg xl:w-[45rem] xl:pl-20">"Easily control your AC using your phone from anywhere in your home. No need to stand in front of the unit—adjust the temperature, fan speed, and modes right from your seat. Whether you're relaxing on the couch or lying in bed, your mobile device gives you full control of your home’s cooling. Manage your AC remotely, ensuring comfort no matter where you are. Enhance convenience and efficiency with mobile AC controls. Keep your home cool and comfortable with just a few taps on your phone. Experience the future of smart home cooling."</motion.p>
              <motion.img
             variants={FadeUp(0.3)}
             initial="hidden"
             whileInView={"visible"}
             whileHover={{ scale: 1.07 }}
             className=" rounded-[2rem] mx-auto w-full md:h-[22rem] lg:h-[20rem] lg:w-[28rem] xl:w-[36rem] xl:h-[25rem] xl:ml-8" src={SmartACcontroller} alt=""></motion.img>
            </div>
            {/* third part */}
    <div className="pt-10 bg-gray-200 pb-8">
    <div className="">
      <h1 className=" poppins-regular mx-auto flex justify-center text-3xl text-primary md:text-3xl xl:text-4xl">Why Solwin Automation?</h1>
      <div className=" raleway text-[0.800rem] flex justify-center p-6 mx-auto py-4 md:text-sm md:w-[35rem] md:px-0 xl:text-xl xl:w-[50%]">
        Welcome to Hogar Controls, your gateway to a seamlessly connected home. We offer cutting-edge smart home automation solutions that empower you to control and manage every aspect of your living space with ease and convenience. Whether you’re looking to enhance security, optimize energy efficiency, or create an ambiance that suits your mood, Hogar Controls has you covered.
      </div>
    </div>
    <div className="grid mx-auto ml-10 px-4 gap-2 grid-cols-2 md:grid-cols-3 md:px-16 md:ml-20 lg:px-28 lg:pr-6 xl:mx-[16rem] xl:pl-[10rem]">
      <div>
        <img className="gif" src={S360SOLUTION} alt="360° Solution GIF" />
        {/* <img src={S360solutions} alt="360° Solution" /> */}
        <p className=" text-sm ml-2 md:text-sm">360° Solution</p>
      </div>
      <div>
        <img className="gif" src={RETROFIT} alt="Retrofit GIF" />
        {/* <img src="assets/img/retrofit.svg" alt="Retrofit" /> */}
        <p className=" text-sm ml-6 md:text-sm md:pl-1">Retrofit</p>
      </div>
      <div>
        <img className="gif" src={Scalable} alt="Scalable GIF" />
        {/* <img src="assets/img/Scalable.svg" alt="Scalable" /> */}
        <p className=" text-sm ml-6 md:text-sm  md:pl-1">Scalable</p>
      </div>
      <div>
        <img className="gif" src={InnovationResearch} alt="Innovation & Research GIF" />
        {/* <img src="assets/img/InnovationResearch.svg" alt="Innovation & Research" /> */}
        <p className=" text-sm px-[0.9rem] md:text-sm md:px-10 md:-ml-8 lg:text-base lg:px-[10rem] lg:-ml-[9.3rem]">Innovation & Research</p>
      </div>
      <div>
        <img className="gif" src={SecureEncrypted} alt="Secure & Encrypted GIF" />
        {/* <img src="assets/img/SecureEncrypted.svg" alt="Secure & Encrypted" /> */}
        <p className=" text-sm px-6 md:text-sm md:px-14 md:-ml-9 lg:text-base lg:px-[10rem] lg:-ml-[9rem]">Secure & Encrypted</p>
      </div>
      <div>
        <img className="gif" src={Support} alt="Support GIF" />
        {/* <img src="assets/img/Support.svg" alt="Support" /> */}
        <p className=" text-sm ml-7 md:text-sm md:ml-6">Support</p>
      </div>
    </div>
    {/* <div className="partners">
      <ul className="parnerlist">
        <li>Works with</li>
        <li><img src="assets/img/icons/zwave.svg" alt="Z-Wave" /></li>
        <li><img src="assets/img/icons/Zigbee.png" alt="Zigbee" /></li>
        <li><img src="assets/img/icons/Group 187.svg" alt="Partner Logo" /></li>
        <li><img src="assets/img/icons/Group 188.svg" alt="Partner Logo" style={{ maxWidth: '80px' }} /></li>
        <li><img src="assets/img/icons/Ok Google.png" alt="Ok Google" /></li>
        <li><img src="assets/img/icons/Alexa.png" alt="Alexa" /></li>
      </ul>
    </div> */}
  </div>
        </div>
    </section>
  )
}

export default HomeLighting;
