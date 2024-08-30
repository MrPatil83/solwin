// import  { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [dropdownHoverOpen, setDropdownHoverOpen] = useState(false);

//   return (
//     <nav className="flex items-center justify-between p-4 bg-gray-800 text-primary">
//       <div>
//         <img className="h-10 flex ml-[5rem]" src="logo.png" alt="Company Logo" />
//       </div>
//       <div>
//         <ul className="flex flex-row gap-6 mr-[3rem]">
//         <li>
//             <Link to="/home">Home</Link>
//           </li>
//           <li>
//             <Link to="/home">About Us</Link>
//           </li>
//           <li
//             className="relative"
//             onMouseEnter={() => setDropdownHoverOpen(true)}
//             onMouseLeave={() => setDropdownHoverOpen(false)}
//           >
//             <button
//               className="focus:outline-none"
//             >
//               Automation
//             </button>
//             {dropdownHoverOpen && (
//               <ul className="absolute w-[10rem] -left-9 mt- bg-gray-800 text-primary shadow-lg rounded-2xl p-2 justify-center text-center">
//                 <li className="hover:bg-gray-200 p-2 rounded-2xl">
//                   <Link to="/lighting">Lighting</Link>
//                 </li>
//                 <li className="hover:bg-gray-200 p-2 rounded-2xl">
//                   <Link to="/home-security">Home Security</Link>
//                 </li>
//                 <li className="hover:bg-gray-200 p-2 rounded-2xl">
//                   <Link to="/interactive-home">Interactive Home</Link>
//                 </li>
//                 <li className="hover:bg-gray-200 p-2 rounded-2xl">
//                   <Link to="/multimedia">Multimedia</Link>
//                 </li>
//                 <li className="hover:bg-gray-200 p-2 rounded-2xl">
//                   <Link to="/protection">Protection</Link>
//                 </li>
//                 <li className="hover:bg-gray-200 p-2 rounded-2xl">
//                   <Link to="/climate">Climate</Link>
//                 </li>
//                 <li className="hover:bg-gray-200 p-2 rounded-2xl">
//                   <Link to="/surveillance">Surveillance</Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li>
//             <Link to="/services">Service</Link>
//           </li>
//           <li>
//             <Link to="/contact-us">Contact Us</Link>
//           </li>
//         </ul>
//       </div>
//       <button className=" flex text-sm mr-24 border w-32 h-[2.7rem] text-center items-center rounded-3xl justify-center border-[#f5ce02] hover:border-background hover:bg-[#f5ce02] hover:transition-transform duration-700 hover:text-background">
//         GET A QUOTE
//       </button>
//     </nav>
//   );
// };

// export default Navbar;

// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [dropdownHoverOpen, setDropdownHoverOpen] = useState(false);

//   return (
//     <nav className="flex items-center  justify-between p-4 bg-[#0e1837] rounded-b-3xl text-primary sticky top-0 left-0 w-full z-10">
//       <div>
//         <Link to="/">
//           <img
//             className="h-10 ml-[5rem] hover:scale-125 transition-transform duration-500 cursor-pointer"
//             src="logo.png"
//             alt="Company Logo"
//           />
//         </Link>
//       </div>
//       <div>
//         <ul className="flex flex-row gap-6 mr-[3rem]">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about-us">About Us</Link>
//           </li>
//           <li
//             className="relative"
//             onMouseEnter={() => setDropdownHoverOpen(true)}
//             onMouseLeave={() => setDropdownHoverOpen(false)}
//           >
//             <button className="focus:outline-none">Automation</button>
//             {dropdownHoverOpen && (
//               <ul className="absolute w-[14rem] -left-16 mt- bg-[#0e1837] text-primary shadow-lg rounded-2xl p-2 justify-center text-center">
//                 <li className="hover:bg-gray-500 p-2 rounded-2xl">
//                   <Link to="/lighting">Home Lighting</Link>
//                 </li>
//                 <li className="hover:bg-gray-500 p-2 rounded-2xl">
//                   <Link to="/home-security">Home Security</Link>
//                 </li>
//                 <li className="hover:bg-gray-500 p-2 rounded-2xl">
//                   <Link to="/interactive-home">Interactive Home</Link>
//                 </li>
//                 <li className="hover:bg-gray-500 p-2 rounded-2xl">
//                   <Link to="/multimedia">Multimedia</Link>
//                 </li>
//                 <li className="hover:bg-gray-500 p-2 rounded-2xl">
//                   <Link to="/protection">Protection</Link>
//                 </li>
//                 <li className="hover:bg-gray-500 p-2 rounded-2xl">
//                   <Link to="/climate">Climate</Link>
//                 </li>
//                 <li className="hover:bg-gray-500 p-2 rounded-2xl">
//                   <Link to="/surveillance">Surveillance</Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li>
//             <Link to="/services">Service</Link>
//           </li>
//           <li>
//             <Link to="/contact-us">Contact Us</Link>
//           </li>
//         </ul>
//       </div>
//       <button className="flex text-sm mr-24 border w-32 h-[2.7rem] text-center items-center rounded-3xl justify-center lg:h-[2rem] border-[#f5ce02] hover:border-background hover:bg-[#f5ce02] hover:transition-transform duration-700 hover:text-background">
//         GET A QUOTE
//       </button>
//     </nav>
//   );
// };

// export default Navbar;

// import PropTypes from "prop-types";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// // import logo from "../../../assets/Logo/logo.png";

// const Navbar = ({ logo, navbarBg }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isAutomationOpen, setIsAutomationOpen] = useState(false);
//   const [isService, setIsService] = useState(false);
//   const [isCharges, setIsCharges] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleAutomationClick = () => {
//     setIsAutomationOpen(!isAutomationOpen);
   
//   };
//   const handleServiceClick = () => {
//     setIsService(!isService);
//   };
//   const handleChargesClick = () => {
//     setIsCharges(!isCharges);
//   };

//   const handleLinkClick = () => {
//     setIsOpen(false);
//     setIsAutomationOpen(false);
//     setIsService(false);
//     setIsCharges(false);
//   };

//   return (
//     <nav
//       className={`sticky top-0 left-0 h-auto w-auto poppins-regular z-20 transition duration-300 ${navbarBg} rounded-b-[2rem] `}
//       style={{ backgroundColor: "#0e1837" }}
//     >
//       <div className="container mx-auto px-4 flex justify-between items-center lg:px-[5rem]">
//         <div className="text-white font-bold text-lg -my-[3rem]">
//           <Link to="/">
//             <img className="h-[12rem] w-[14rem] mx-auto p-4 hover:scale-125 transition-transform duration-700" src={`../../../assets/Logo/logo.png`} alt="logo" />
//           </Link>
//         </div>
//         <div className="hidden lg:flex items-center space-x-10 ">
//           <Link to="/" className="text-primary hover:text-secondary">
//             Home
//           </Link>
//           <Link to="/about" className="text-primary hover:text-secondary">
//             About Us
//           </Link>
//           <div
//             className="relative group"
//             onMouseEnter={() => setIsAutomationOpen(true)}
//             onMouseLeave={() => setIsAutomationOpen(false)}
//           >
//             <button className="text-primary hover:text-secondary">
//               Automation
//             </button>
//             {isAutomationOpen && (
//               <div className="absolute w-[14rem] -left-16 mt- bg-[#0e1837] bg-opacity-55 text-primary shadow-lg rounded-2xl p-2 justify-center text-center">
//                 <ul>
//                   <li className="hover:bg-gray-700 text-primary p-2 rounded-2xl">
//                     <Link to="/smartlighting">Home Lighting</Link>
//                   </li>
//                   <li className="hover:bg-gray-700 p-2 rounded-2xl">
//                     <Link to="/homesecurity">Home Security</Link>
//                   </li>
//                   <li className="hover:bg-gray-700 p-2 rounded-2xl">
//                     <Link to="/interactivehome">Interactive Home</Link>
//                   </li>
//                   <li className="hover:bg-gray-700 p-2 rounded-2xl">
//                     <Link to="/multimedia">Multimedia</Link>
//                   </li>
//                   <li className="hover:bg-gray-700 p-2 rounded-2xl">
//                     <Link to="/protection">Protection</Link>
//                   </li>
//                   <li className="hover:bg-gray-700 p-2 rounded-2xl">
//                     <Link to="/climate">Climate</Link>
//                   </li>
//                   <li className="hover:bg-gray-700 p-2 rounded-2xl">
//                     <Link to="/surveillance">Surveillance</Link>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//           <div
//             className="relative group"
//             onMouseEnter={() => setIsService(true)}
//             onMouseLeave={() => setIsService(false)}
//           >
//             <button className="text-primary hover:text-secondary">
//               Services
//             </button>
//             {isService && (
//               <div className="absolute w-[14rem] -left-16 mt- bg-[#0e1837] bg-opacity-55 text-primary shadow-lg rounded-2xl p-2 justify-center text-center">
//                 <ul>
//                   <li className="hover:bg-gray-700 text-primary p-2 rounded-2xl">
//                     <Link to="/lighting">Industrial Automation</Link>
//                   </li>
//                   <li className="hover:bg-gray-700 p-2 rounded-2xl">
//                     <Link to="/home-security">IT Solutions</Link>
//                   </li>
//                   <li className="hover:bg-gray-700 p-2 rounded-2xl">
//                     <Link to="/interactive-home">Electrical Work</Link>
//                   </li>
//                   <li className="hover:bg-gray-700 p-2 rounded-2xl">
//                     <Link to="/multimedia">Electrical Starter Panals</Link>
//                   </li>
//                   <li className="hover:bg-gray-700 p-2 rounded-2xl">
//                     <Link to="/protection">Ventilation Systems with PLC</Link>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//           <div
//             className="relative group"
//             onMouseEnter={() => setIsCharges(true)}
//             onMouseLeave={() => setIsCharges(false)}
//           >
//             <button className="text-primary hover:text-secondary">
//               Maintainance Charges
//             </button>
//             {isCharges && (
//               <div className="absolute w-[14rem] -left-7 mt- bg-[#0e1837] bg-opacity-55 text-primary shadow-lg rounded-2xl p-2 justify-center text-center">
//                 <ul>
//                 <li className="hover:bg-gray-700 text-primary p-2 rounded-2xl">
//                     <Link to="/smartlighting">Electrical Maintainance AMC's</Link>
//                   </li>
//                   <li className="hover:bg-gray-700 p-2 rounded-2xl">
//                     <Link to="/homesecurity">Automation Panel AMC's</Link>
//                   </li>
//                   <li className="hover:bg-gray-700 p-2 rounded-2xl">
//                     <Link to="/interactivehome">Weighing Scales AMC's</Link>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="flex items-center">
//           <button className="border border-[#f5ce02] text-sm bg-[#0e1837] hidden lg:block text-[#f5ce02] w-[8rem] h-[3rem] rounded-[1.5rem] cursor-pointer hover:border-background hover:bg-[#f5ce02] hover:transition-transform duration-700 hover:text-background">
//             Get a Quote
//           </button>

//           <div className="lg:hidden">
//             <button
//               onClick={toggleNavbar}
//               className="text-white focus:outline-none ml-4"
//             >
//               {isOpen ? (
//                 <svg
//                   className="w-10 h-10"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   ></path>
//                 </svg>
//               ) : (
//                 <svg
//                   className="w-10 h-10"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16m-7 6h7"
//                   ></path>
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="lg:hidden bg-gray-900 bg-opacity-50 backdrop-blur h-[100%] px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           <Link
//             to="/"
//             onClick={handleLinkClick}
//             className="block px-4 py-4 text-primary hover:text-[#f5ce02]"
//           >
//             Home
//           </Link>
//           <Link
//             to="/about"
//             onClick={handleLinkClick}
//             className="block px-4 py-4 text-primary hover:text-[#f5ce02]"
//           >
//             About Us
//           </Link>
//           <div className="relative">
//             <button
//               onClick={handleAutomationClick}
//               className="block px-4 py-4 text-primary w-full text-left"
//             >
//               Automation
//             </button>
//             {isAutomationOpen && (
//               <div className="pl-4  text-primary">
//                 <ul>
//                   <li className="hover:bg-gray-500 p-2 rounded-2xl">
//                     <Link to="/smartlighting">Home Lighting</Link>
//                   </li>
//                   <li className="hover:bg-gray-500 p-2 rounded-2xl">
//                     <Link to="/homesecurity">Home Security</Link>
//                   </li>
//                   <li className="hover:bg-gray-500 p-2 rounded-2xl">
//                     <Link to="/interactivehome">Interactive Home</Link>
//                   </li>
//                   <li className="hover:bg-gray-500 p-2 rounded-2xl">
//                     <Link to="/multimedia">Multimedia</Link>
//                   </li>
//                   <li className="hover:bg-gray-500 p-2 rounded-2xl">
//                     <Link to="/protection">Protection</Link>
//                   </li>
//                   <li className="hover:bg-gray-500 p-2 rounded-2xl">
//                     <Link to="/climate">Climate</Link>
//                   </li>
//                   <li className="hover:bg-gray-500 p-2 rounded-2xl">
//                     <Link to="/surveillance">Surveillance</Link>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//           <div className="relative">
//             <button
//               onClick={handleServiceClick}
//               className="block px-4 py-4 text-primary w-full text-left"
//             >
//               Services
//             </button>
//             {isService && (
//               <div className="pl-4  text-primary">
//                 <ul>
//                   <li className="hover:bg-gray-500 text-primary p-2 rounded-2xl">
//                     <Link to="/smartlighting">IT Solutions</Link>
//                   </li>
//                   <li className="hover:bg-gray-500 p-2 rounded-2xl">
//                     <Link to="/homesecurity">Electrical Work</Link>
//                   </li>
//                   <li className="hover:bg-gray-500 p-2 rounded-2xl">
//                     <Link to="/interactivehome">Weighing Scales</Link>
//                   </li>
//                   <li className="hover:bg-gray-500 p-2 rounded-2xl">
//                     <Link to="/multimedia">Industrial Automation</Link>
//                   </li>
//                   <li className="hover:bg-gray-500 p-2 rounded-2xl">
//                     <Link to="/protection">Electrical Starter Panals</Link>
//                   </li>
//                   <li className="hover:bg-gray-500 p-2 rounded-2xl">
//                     <Link to="/protection">Ventilation Systems with PLC</Link>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//           <div className="relative">
//             <button
//               onClick={handleChargesClick}
//               className="block px-4 py-4 text-primary w-full text-left"
//             >
//               Maintanance Charges
//             </button>
//             {isCharges && (
//               <div className="pl-4  text-primary">
//                 <ul>
//                   <li className="hover:bg-gray-500 text-primary p-2 rounded-2xl">
//                     <Link to="/smartlighting">Electrical Maintainance AMC's</Link>
//                   </li>
//                   <li className="hover:bg-gray-500 p-2 rounded-2xl">
//                     <Link to="/homesecurity">Automation Panel AMC's</Link>
//                   </li>
//                   <li className="hover:bg-gray-500 p-2 rounded-2xl">
//                     <Link to="/interactive-home">Weighing Scales AMC's</Link>
//                   </li>
//                 </ul>
//               </div>
//             )}
//           </div>
//           <button className="ml-4 border border-[#f5ce02] text-sm bg-[#0e1837] text-primary hover:border-background hover:bg-[#f5ce02] hover:transition-transform duration-700 hover:text-background w-[8rem] h-[3rem] rounded-[1.5rem] cursor-pointer">
//             Get a Quote
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// Navbar.propTypes = {
//   logo: PropTypes.string.isRequired,
//   navbarBg: PropTypes.string.isRequired,
// };

// export default Navbar;


import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/Logo/logo.png"; // Correctly import the logo

const Navbar = ({ navbarBg }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAutomationOpen, setIsAutomationOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isChargesOpen, setIsChargesOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleAutomationClick = () => {
    setIsAutomationOpen(!isAutomationOpen);
  };
  const handleServiceClick = () => {
    setIsServiceOpen(!isServiceOpen);
  };
  const handleChargesClick = () => {
    setIsChargesOpen(!isChargesOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    setIsAutomationOpen(false);
    setIsServiceOpen(false);
    setIsChargesOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 left-0 h-auto w-auto poppins-regular z-20 transition duration-300 ${navbarBg} rounded-b-[2rem]`}
      style={{ backgroundColor: "#0e1837" }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center lg:px-[5rem]">
        <div className="text-white font-bold text-lg -my-[3rem]">
          <Link to="/">
            <img
              className="h-[12rem] w-[16rem] mx-auto p-2 -ml-9 hover:scale-125 transition-transform duration-700 cursor-pointer"
              src={logo} // Use the imported logo
              alt="logo"
            />
          </Link>
        </div>
        <div className="hidden lg:flex items-center space-x-10">
          <Link to="/" className="text-primary hover:text-secondary">
            Home
          </Link>
          <Link to="/about" className="text-primary hover:text-secondary">
            About Us
          </Link>
          <div
            className="relative group"
            onMouseEnter={() => setIsAutomationOpen(true)}
            onMouseLeave={() => setIsAutomationOpen(false)}
          >
            <button className="text-primary hover:text-secondary">
              Automation
            </button>
            {isAutomationOpen && (
              <div className="absolute w-[14rem] -left-16 mt- bg-[#0e1837] bg-opacity-55 text-primary shadow-lg rounded-2xl p-2 justify-center text-center">
                <ul>
                  <li className="hover:bg-gray-700 text-primary p-2 rounded-2xl">
                    <Link to="/smartlighting">Home Lighting</Link>
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded-2xl">
                    <Link to="/homesecurity">Home Security</Link>
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded-2xl">
                    <Link to="/interactivehome">Interactive Home</Link>
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded-2xl">
                    <Link to="/multimedia">Multimedia</Link>
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded-2xl">
                    <Link to="/protection">Protection</Link>
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded-2xl">
                    <Link to="/climate">Climate</Link>
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded-2xl">
                    <Link to="/surveillance">Surveillance</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div
            className="relative group"
            onMouseEnter={() => setIsServiceOpen(true)}
            onMouseLeave={() => setIsServiceOpen(false)}
          >
            <button className="text-primary hover:text-secondary">
              Services
            </button>
            {isServiceOpen && (
              <div className="absolute w-[14rem] -left-16 mt- bg-[#0e1837] bg-opacity-55 text-primary shadow-lg rounded-2xl p-2 justify-center text-center">
                <ul>
                  <li className="hover:bg-gray-700 text-primary p-2 rounded-2xl">
                    <Link to="/lighting">Industrial Automation</Link>
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded-2xl">
                    <Link to="/home-security">IT Solutions</Link>
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded-2xl">
                    <Link to="/interactive-home">Electrical Work</Link>
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded-2xl">
                    <Link to="/multimedia">Electrical Starter Panels</Link>
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded-2xl">
                    <Link to="/protection">Ventilation Systems with PLC</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div
            className="relative group"
            onMouseEnter={() => setIsChargesOpen(true)}
            onMouseLeave={() => setIsChargesOpen(false)}
          >
            <button className="text-primary hover:text-secondary">
              Maintenance Charges
            </button>
            {isChargesOpen && (
              <div className="absolute w-[14rem] -left-7 mt- bg-[#0e1837] bg-opacity-55 text-primary shadow-lg rounded-2xl p-2 justify-center text-center">
                <ul>
                  <li className="hover:bg-gray-700 text-primary p-2 rounded-2xl">
                    <Link to="/smartlighting">Electrical Maintenance AMC's</Link>
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded-2xl">
                    <Link to="/homesecurity">Automation Panel AMC's</Link>
                  </li>
                  <li className="hover:bg-gray-700 p-2 rounded-2xl">
                    <Link to="/interactive-home">Weighing Scales AMC's</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center">
          <button className="border border-[#f5ce02] text-sm bg-[#0e1837] hidden lg:block text-[#f5ce02] w-[8rem] h-[3rem] rounded-[1.5rem] cursor-pointer hover:border-background hover:bg-[#f5ce02] hover:transition-transform duration-700 hover:text-background">
            Get a Quote
          </button>

          <div className="lg:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white focus:outline-none ml-4"
            >
              {isOpen ? (
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-gray-900 bg-opacity-50 backdrop-blur px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            onClick={handleLinkClick}
            className="block px-4 py-4 text-primary hover:text-[#f5ce02]"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={handleLinkClick}
            className="block px-4 py-4 text-primary hover:text-[#f5ce02]"
          >
            About Us
          </Link>
          <div className="relative">
            <button
              onClick={handleAutomationClick}
              className="block px-4 py-4 text-primary w-full text-left"
            >
              Automation
            </button>
            {isAutomationOpen && (
              <div className="pl-4 text-primary">
                <ul>
                  <li className="hover:bg-gray-500 p-2 rounded-2xl">
                    <Link to="/smartlighting" onClick={handleLinkClick}>
                      Home Lighting
                    </Link>
                  </li>
                  <li className="hover:bg-gray-500 p-2 rounded-2xl">
                    <Link to="/homesecurity" onClick={handleLinkClick}>
                      Home Security
                    </Link>
                  </li>
                  <li className="hover:bg-gray-500 p-2 rounded-2xl">
                    <Link to="/interactivehome" onClick={handleLinkClick}>
                      Interactive Home
                    </Link>
                  </li>
                  <li className="hover:bg-gray-500 p-2 rounded-2xl">
                    <Link to="/multimedia" onClick={handleLinkClick}>
                      Multimedia
                    </Link>
                  </li>
                  <li className="hover:bg-gray-500 p-2 rounded-2xl">
                    <Link to="/protection" onClick={handleLinkClick}>
                      Protection
                    </Link>
                  </li>
                  <li className="hover:bg-gray-500 p-2 rounded-2xl">
                    <Link to="/climate" onClick={handleLinkClick}>
                      Climate
                    </Link>
                  </li>
                  <li className="hover:bg-gray-500 p-2 rounded-2xl">
                    <Link to="/surveillance" onClick={handleLinkClick}>
                      Surveillance
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={handleServiceClick}
              className="block px-4 py-4 text-primary w-full text-left"
            >
              Services
            </button>
            {isServiceOpen && (
              <div className="pl-4 text-primary">
                <ul>
                  <li className="hover:bg-gray-500 p-2 rounded-2xl">
                    <Link to="/lighting" onClick={handleLinkClick}>
                      Industrial Automation
                    </Link>
                  </li>
                  <li className="hover:bg-gray-500 p-2 rounded-2xl">
                    <Link to="/home-security" onClick={handleLinkClick}>
                      IT Solutions
                    </Link>
                  </li>
                  <li className="hover:bg-gray-500 p-2 rounded-2xl">
                    <Link to="/interactive-home" onClick={handleLinkClick}>
                      Electrical Work
                    </Link>
                  </li>
                  <li className="hover:bg-gray-500 p-2 rounded-2xl">
                    <Link to="/multimedia" onClick={handleLinkClick}>
                      Electrical Starter Panels
                    </Link>
                  </li>
                  <li className="hover:bg-gray-500 p-2 rounded-2xl">
                    <Link to="/protection" onClick={handleLinkClick}>
                      Ventilation Systems with PLC
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={handleChargesClick}
              className="block px-4 py-4 text-primary w-full text-left"
            >
              Maintenance Charges
            </button>
            {isChargesOpen && (
              <div className="pl-4 text-primary">
                <ul>
                  <li className="hover:bg-gray-500 p-2 rounded-2xl">
                    <Link to="/smartlighting" onClick={handleLinkClick}>
                      Electrical Maintenance AMC's
                    </Link>
                  </li>
                  <li className="hover:bg-gray-500 p-2 rounded-2xl">
                    <Link to="/homesecurity" onClick={handleLinkClick}>
                      Automation Panel AMC's
                    </Link>
                  </li>
                  <li className="hover:bg-gray-500 p-2 rounded-2xl">
                    <Link to="/interactive-home" onClick={handleLinkClick}>
                      Weighing Scales AMC's
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  navbarBg: PropTypes.string.isRequired,
};

export default Navbar;
