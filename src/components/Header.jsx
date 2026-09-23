// // import React, { useState } from "react";
// // import { Menu, X } from "lucide-react";
// // import { Link } from "react-router-dom";
// // import logo from "../assets/swayam-shida-logo.png";

// // const Header = () => {
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   return (
// //     <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-[#D4A72C]/30 shadow-sm">

// //       {/* Top Gold Line */}
// //       <div className="h-[3px] bg-[#D4A72C]" />

// //       <div className="max-w-7xl mx-auto px-5 lg:px-8">

// //         <div className="h-[96px] flex items-center justify-between">

// //           {/* LOGO */}
// //           <Link to="/" className="flex items-center gap-3">

// //             <img
// //               src={logo}
// //               alt="SWYAM SIDDHA SAHITYIK SANSTHAN JAIPUR RAJASTHAN"
// //               className="w-[82px] h-[82px] object-contain"
// //             />

// //             <div className="hidden sm:block leading-tight">
// //               <h1 className="text-[#123E73] text-lg lg:text-xl font-bold">
// //                 SWYAM SIDDHA
// //               </h1>

// //               <p className="text-[#123E73] text-xs lg:text-sm font-medium">
// //                 SAHITYIK SANSTHAN
// //               </p>

// //               <span className="text-[#C99722] text-[9px] tracking-[3px]">
// //                 JAIPUR RAJASTHAN
// //               </span>
// //             </div>

// //           </Link>


// //           {/* DESKTOP NAVIGATION */}
// //           <nav className="hidden lg:flex items-center gap-8">

// //             <Link
// //               to="/"
// //               className="text-[#123E73] font-medium hover:text-[#C99722] transition-colors"
// //             >
// //               Home
// //             </Link>

// //             <Link
// //               to="/about"
// //               className="text-[#123E73] font-medium hover:text-[#C99722] transition-colors"
// //             >
// //               About Us
// //             </Link>


// //             <Link
// //               to="/events"
// //               className="text-[#123E73] font-medium hover:text-[#C99722] transition-colors"
// //             >
// //               Events
// //             </Link>


// //             <Link
// //               to="/interviews"
// //               className="text-[#123E73] font-medium hover:text-[#C99722] transition-colors"
// //             >
// //               Interviews
// //             </Link>

// //             <Link
// //               to="/gallery"
// //               className="text-[#123E73] font-medium hover:text-[#C99722] transition-colors"
// //             >
// //               Gallery
// //             </Link>

// //             <Link
// //               to="/contact"
// //               className="text-[#123E73] font-medium hover:text-[#C99722] transition-colors"
// //             >
// //               Contact Us
// //             </Link>

// //           </nav>


// //           {/* CTA */}
// //           <div className="hidden lg:block">

// //             <Link
// //               to="/events"
// //               className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#123E73] text-white font-semibold text-sm shadow-md hover:bg-[#0D315B] hover:shadow-lg transition-all duration-300"
// //             >
// //               View Events
// //             </Link>

// //           </div>


// //           {/* MOBILE MENU BUTTON */}
// //           <button
// //             onClick={() => setMenuOpen(!menuOpen)}
// //             className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full bg-[#123E73] text-white"
// //           >
// //             {menuOpen ? (
// //               <X size={23} />
// //             ) : (
// //               <Menu size={23} />
// //             )}
// //           </button>

// //         </div>


// //         {/* MOBILE MENU */}
// //         {menuOpen && (

// //           <div className="lg:hidden border-t border-[#D4A72C]/20 py-5">

// //             <nav className="flex flex-col gap-1">

// //               <Link
// //                 to="/"
// //                 onClick={() => setMenuOpen(false)}
// //                 className="px-4 py-3 rounded-lg text-[#123E73] font-medium hover:bg-[#F8F3E5]"
// //               >
// //                 Home
// //               </Link>

// //               <Link
// //                 to="/about"
// //                 onClick={() => setMenuOpen(false)}
// //                 className="px-4 py-3 rounded-lg text-[#123E73] font-medium hover:bg-[#F8F3E5]"
// //               >
// //                 About Us
// //               </Link>


// //               <Link
// //                 to="/events"
// //                 onClick={() => setMenuOpen(false)}
// //                 className="px-4 py-3 rounded-lg text-[#123E73] font-medium hover:bg-[#F8F3E5]"
// //               >
// //                 Events
// //               </Link>


// //               <Link
// //                 to="/interviews"
// //                 onClick={() => setMenuOpen(false)}
// //                 className="px-4 py-3 rounded-lg text-[#123E73] font-medium hover:bg-[#F8F3E5]"
// //               >
// //                 Interviews
// //               </Link>

// //               <Link
// //                 to="/gallery"
// //                 onClick={() => setMenuOpen(false)}
// //                 className="px-4 py-3 rounded-lg text-[#123E73] font-medium hover:bg-[#F8F3E5]"
// //               >
// //                 Gallery
// //               </Link>

// //               <Link
// //                 to="/contact"
// //                 onClick={() => setMenuOpen(false)}
// //                 className="px-4 py-3 rounded-lg text-[#123E73] font-medium hover:bg-[#F8F3E5]"
// //               >
// //                 Contact Us
// //               </Link>


// //               <Link
// //                 to="/events"
// //                 onClick={() => setMenuOpen(false)}
// //                 className="mt-3 mx-4 text-center px-5 py-3 rounded-full bg-[#123E73] text-white font-semibold"
// //               >
// //                 View Events
// //               </Link>

// //             </nav>

// //           </div>

// //         )}

// //       </div>

// //     </header>
// //   );
// // };

// // export default Header;

// import React, { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";
// import logo from "../assets/swayam-shida-logo.png";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-[#D4A72C]/30 shadow-sm">

//       {/* Top Gold Line */}
//       <div className="h-[3px] bg-[#D4A72C]" />

//       <div className="max-w-7xl mx-auto px-5 lg:px-8">

//         <div className="h-[96px] flex items-center justify-between">

//           {/* LOGO */}
//           <Link to="/" className="flex items-center gap-3">

//             <img
//               src={logo}
//               alt="स्वयं सिद्ध साहित्यिक संस्थान जयपुर राजस्थान"
//               className="w-[82px] h-[82px] object-contain"
//             />

//             <div className="hidden sm:block leading-tight">
//               <h1 className="text-[#123E73] text-lg lg:text-xl font-bold">
//                 स्वयं सिद्ध
//               </h1>

//               <p className="text-[#123E73] text-xs lg:text-sm font-medium">
//                 साहित्यिक संस्थान
//               </p>

//               <span className="text-[#C99722] text-[9px] tracking-[3px]">
//                 जयपुर राजस्थान
//               </span>
//             </div>

//           </Link>


//           {/* DESKTOP NAVIGATION */}
//           <nav className="hidden lg:flex items-center gap-8">

//             <Link
//               to="/"
//               className="text-[#123E73] font-medium hover:text-[#C99722] transition-colors"
//             >
//               होम
//             </Link>

//             <Link
//               to="/about"
//               className="text-[#123E73] font-medium hover:text-[#C99722] transition-colors"
//             >
//               हमारे बारे में
//             </Link>

//             <Link
//               to="/events"
//               className="text-[#123E73] font-medium hover:text-[#C99722] transition-colors"
//             >
//               कार्यक्रम
//             </Link>

//             <Link
//               to="/interviews"
//               className="text-[#123E73] font-medium hover:text-[#C99722] transition-colors"
//             >
//               साक्षात्कार
//             </Link>

//             <Link
//               to="/gallery"
//               className="text-[#123E73] font-medium hover:text-[#C99722] transition-colors"
//             >
//               गैलरी
//             </Link>

//             <Link
//               to="/contact"
//               className="text-[#123E73] font-medium hover:text-[#C99722] transition-colors"
//             >
//               संपर्क करें
//             </Link>

//           </nav>


//           {/* CTA */}
//           <div className="hidden lg:block">

//             <Link
//               to="/events"
//               className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#123E73] text-white font-semibold text-sm shadow-md hover:bg-[#0D315B] hover:shadow-lg transition-all duration-300"
//             >
//               कार्यक्रम देखें
//             </Link>

//           </div>


//           {/* MOBILE MENU BUTTON */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full bg-[#123E73] text-white"
//           >
//             {menuOpen ? (
//               <X size={23} />
//             ) : (
//               <Menu size={23} />
//             )}
//           </button>

//         </div>


//         {/* MOBILE MENU */}
//         {menuOpen && (

//           <div className="lg:hidden border-t border-[#D4A72C]/20 py-5">

//             <nav className="flex flex-col gap-1">

//               <Link
//                 to="/"
//                 onClick={() => setMenuOpen(false)}
//                 className="px-4 py-3 rounded-lg text-[#123E73] font-medium hover:bg-[#F8F3E5]"
//               >
//                 होम
//               </Link>

//               <Link
//                 to="/about"
//                 onClick={() => setMenuOpen(false)}
//                 className="px-4 py-3 rounded-lg text-[#123E73] font-medium hover:bg-[#F8F3E5]"
//               >
//                 हमारे बारे में
//               </Link>

//               <Link
//                 to="/events"
//                 onClick={() => setMenuOpen(false)}
//                 className="px-4 py-3 rounded-lg text-[#123E73] font-medium hover:bg-[#F8F3E5]"
//               >
//                 कार्यक्रम
//               </Link>

//               <Link
//                 to="/interviews"
//                 onClick={() => setMenuOpen(false)}
//                 className="px-4 py-3 rounded-lg text-[#123E73] font-medium hover:bg-[#F8F3E5]"
//               >
//                 साक्षात्कार
//               </Link>

//               <Link
//                 to="/gallery"
//                 onClick={() => setMenuOpen(false)}
//                 className="px-4 py-3 rounded-lg text-[#123E73] font-medium hover:bg-[#F8F3E5]"
//               >
//                 गैलरी
//               </Link>

//               <Link
//                 to="/contact"
//                 onClick={() => setMenuOpen(false)}
//                 className="px-4 py-3 rounded-lg text-[#123E73] font-medium hover:bg-[#F8F3E5]"
//               >
//                 संपर्क करें
//               </Link>


//               <Link
//                 to="/events"
//                 onClick={() => setMenuOpen(false)}
//                 className="mt-3 mx-4 text-center px-5 py-3 rounded-full bg-[#123E73] text-white font-semibold"
//               >
//                 कार्यक्रम देखें
//               </Link>

//             </nav>

//           </div>

//         )}

//       </div>

//     </header>
//   );
// };

// export default Header;
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/swayam-shida-logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-[#D4A72C]/30 shadow-sm">

      {/* Top Gold Line */}
      <div className="h-[3px] bg-[#D4A72C]" />

      <div className="max-w-7xl mx-auto px-5 lg:px-8">

        <div className="h-[100px] flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">

            <img
              src={logo}
              alt="स्वयं सिद्ध साहित्यिक संस्थान जयपुर राजस्थान"
              className="w-[98px] h-[98px] object-contain"
            />

            <div className="hidden sm:block leading-tight">
              <h1 className="text-[#123E73] text-xl lg:text-2xl font-bold">
                स्वयं सिद्ध
              </h1>

              <p className="text-[#123E73] text-sm lg:text-base font-medium">
                साहित्यिक संस्थान
              </p>

              <span className="text-[#C99722] text-[10px] tracking-[3px]">
                JAIPUR, RAJASTHAN
              </span>
            </div>

          </Link>


          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-8">

            <Link
              to="/"
              className="text-[#123E73] text-[16px] font-medium hover:text-[#C99722] transition-colors"
            >
              होम
            </Link>

            <Link
              to="/about"
              className="text-[#123E73] text-[16px] font-medium hover:text-[#C99722] transition-colors"
            >
              हमारे बारे में
            </Link>

            <Link
              to="/events"
              className="text-[#123E73] text-[16px] font-medium hover:text-[#C99722] transition-colors"
            >
              कार्यक्रम
            </Link>

            <Link
              to="/interviews"
              className="text-[#123E73] text-[16px] font-medium hover:text-[#C99722] transition-colors"
            >
              साक्षात्कार
            </Link>

            <Link
              to="/gallery"
              className="text-[#123E73] text-[16px] font-medium hover:text-[#C99722] transition-colors"
            >
              गैलरी
            </Link>

            <Link
              to="/contact"
              className="text-[#123E73] text-[16px] font-medium hover:text-[#C99722] transition-colors"
            >
              संपर्क करें
            </Link>

          </nav>


          {/* CTA */}
          <div className="hidden lg:block">

            <Link
              to="/events"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#123E73] text-white font-semibold text-[15px] shadow-md hover:bg-[#0D315B] hover:shadow-lg transition-all duration-300"
            >
              कार्यक्रम देखें
            </Link>

          </div>


          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full bg-[#123E73] text-white"
          >
            {menuOpen ? (
              <X size={23} />
            ) : (
              <Menu size={23} />
            )}
          </button>

        </div>


        {/* MOBILE MENU */}
        {menuOpen && (

          <div className="lg:hidden border-t border-[#D4A72C]/20 py-5">

            <nav className="flex flex-col gap-1">

              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-[#123E73] text-[16px] font-medium hover:bg-[#F8F3E5]"
              >
                होम
              </Link>

              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-[#123E73] text-[16px] font-medium hover:bg-[#F8F3E5]"
              >
                हमारे बारे में
              </Link>

              <Link
                to="/events"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-[#123E73] text-[16px] font-medium hover:bg-[#F8F3E5]"
              >
                कार्यक्रम
              </Link>

              <Link
                to="/interviews"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-[#123E73] text-[16px] font-medium hover:bg-[#F8F3E5]"
              >
                साक्षात्कार
              </Link>

              <Link
                to="/gallery"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-[#123E73] text-[16px] font-medium hover:bg-[#F8F3E5]"
              >
                गैलरी
              </Link>

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-[#123E73] text-[16px] font-medium hover:bg-[#F8F3E5]"
              >
                संपर्क करें
              </Link>


              <Link
                to="/events"
                onClick={() => setMenuOpen(false)}
                className="mt-3 mx-4 text-center px-5 py-3.5 rounded-full bg-[#123E73] text-white text-[16px] font-semibold"
              >
                कार्यक्रम देखें
              </Link>

            </nav>

          </div>

        )}

      </div>

    </header>
  );
};

export default Header;