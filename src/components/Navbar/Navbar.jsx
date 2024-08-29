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

import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdownHoverOpen, setDropdownHoverOpen] = useState(false);

  return (
    <nav className="flex items-center  justify-between p-4 bg-[#0e1837] rounded-b-3xl text-primary sticky top-0 left-0 w-full z-10">
      <div>
        <Link to="/home">
        <img className="h-10 ml-[5rem] hover:scale-125 transition-transform duration-500 cursor-pointer" src="logo.png" alt="Company Logo" />
        </Link>
      </div>
      <div>
        <ul className="flex flex-row gap-6 mr-[3rem]">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about-us">About Us</Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setDropdownHoverOpen(true)}
            onMouseLeave={() => setDropdownHoverOpen(false)}
          >
            <button className="focus:outline-none">
              Automation
            </button>
            {dropdownHoverOpen && (
              <ul className="absolute w-[14rem] -left-16 mt- bg-[#0e1837] text-primary shadow-lg rounded-2xl p-2 justify-center text-center">
                <li className="hover:bg-gray-500 p-2 rounded-2xl">
                  <Link to="/lighting">Home Lighting</Link>
                </li>
                <li className="hover:bg-gray-500 p-2 rounded-2xl">
                  <Link to="/home-security">Home Security</Link>
                </li>
                <li className="hover:bg-gray-500 p-2 rounded-2xl">
                  <Link to="/interactive-home">Interactive Home</Link>
                </li>
                <li className="hover:bg-gray-500 p-2 rounded-2xl">
                  <Link to="/multimedia">Multimedia</Link>
                </li>
                <li className="hover:bg-gray-500 p-2 rounded-2xl">
                  <Link to="/protection">Protection</Link>
                </li>
                <li className="hover:bg-gray-500 p-2 rounded-2xl">
                  <Link to="/climate">Climate</Link>
                </li>
                <li className="hover:bg-gray-500 p-2 rounded-2xl">
                  <Link to="/surveillance">Surveillance</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/services">Service</Link>
          </li>
          <li>
            <Link to="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </div>
      <button className="flex text-sm mr-24 border w-32 h-[2.7rem] text-center items-center rounded-3xl justify-center border-[#f5ce02] hover:border-background hover:bg-[#f5ce02] hover:transition-transform duration-700 hover:text-background">
        GET A QUOTE
      </button>
    </nav>
  );
};

export default Navbar;
