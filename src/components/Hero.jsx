// import React from 'react'
// import facebook from '../assets/facebook.jpeg'
// import github from '../assets/github.png'
// import instagram from '../assets/instagram.png'
// import linkedin from '../assets/linkedin.png'
// import whatsapp from '../assets/whatsapp.png'
// import twitter from '../assets/twitter.png'
// import saurabh1 from '../assets/saurabh1.png'

// const Hero = () => {
//   return (
//     <div className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex-col">
      
//       {/* Background gradient circle */}
//       <div className="absolute mid-h-[420px] md:w-[340px] h-[660px] w-[580px] right-56 
//         bg-gradient-to-r from-red-600 via-blue-600 to-green-400 rounded-full transform rotate-12 
//         top-8 shadow-[0_0_100px_rgba(255,165,0,0.7)] z-0"
//         aria-hidden="true">
//       </div>

//       {/* Hero Section */}
//       <section 
//         data-aos="fade-up"
//         data-aos-delay="250"
//         className="text-gray-500 body-font relative z-10">
//         <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

//           {/* Left side - Text and social links */}
//           <div className="relative lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col 
//             md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

//             {/* Social media icons */}
//             <div
//               data-aos="fade-up"
//               data-aos-delay="400"
//               className="flex space-x-4 md-2" aria-label="Social media links">
//               <a href="#" aria-label="facebook">
//                 <img src={facebook} alt="facebook" className="w-12 h-12 hover:scale-110 transition-transform" />
//               </a>
//               <a href="#" aria-label="github">
//                 <img src={github} alt="github" className="w-14 h-14 hover:scale-110 transition-transform" />
//               </a>
//               <a href="#" aria-label="linkedin">
//                 <img src={linkedin} alt="linkedin" className="w-14 h-14 hover:scale-110 transition-transform" />
//               </a>
//               <a href="#" aria-label="instagram">
//                 <img src={instagram} alt="instagram" className="w-14 h-14 hover:scale-110 transition-transform" />
//               </a>
//               <a href="#" aria-label="whatsapp">
//                 <img src={whatsapp} alt="whatsapp" className="w-14 h-14 hover:scale-110 transition-transform" />
//               </a>
//               <a href="#" aria-label="twitter">
//                 <img src={twitter} alt="twitter" className="w-14 h-14 hover:scale-110 transition-transform" />
//               </a>
//             </div>

//             {/* Main heading */}
//             <h1 className="title-font sm:text-6xl text-4xl mb-4 font-bold text-gray-900">
//               Hi! I'm <span className="text-red-600">Saurabh Mehta</span>
//             </h1>

//             {/* Sub heading */}
//             <h2 className="sm:text-3xl mb-4 font-bold text-blue-950">
//               Java Developer Student
//             </h2>

//             {/* Short description */}
//             <p className="mb-8 leading-relaxed text-black max-w-lg">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Error culpa,
//               est nihil tempore voluptates quibusdam nostrum soluta praesentium impedit
//               esse eligendi repudiandae nisi quaerat delectus tempora corrupti,
//               dolorum inventore dolore!
//             </p>

//             {/* Download CV button */}
//             <div className="flex justify-center">
//               <a 
//                 href="/saurabh_cv.pdf" 
//                 download="saurabh_cv.pdf"
//                 className="inline-flex text-white bg-red-500 border-0 py-2 px-6
//                 focus:outline-none hover:bg-red-700 rounded-full text-lg
//                 hover:shadow-[0_0_20px_rgba(255,100,0,0.5)] transition-all"
//               >
//                 Download CV
//               </a>
//             </div>

//           </div>

//           {/* Right side - Profile image */}
//           <div 
//             data-aos="fade-left"
//             data-aos-delay="500"
//             className="relative z-20 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//             <img 
//               src={saurabh1} 
//               alt="profile" 
//               className="object-cover object-center rounded-full w-80 h-80
//               border-4 border-white shadow-xl"
//               width={320}
//               height={320}
//               loading="eager"
//             />
//           </div>

//         </div>
//       </section>

//     </div>
//   )
// }

// export default Hero













import React from 'react';
import facebook from '../assets/facebook.jpeg';
import github from '../assets/github.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import whatsapp from '../assets/whatsapp.png';
import twitter from '../assets/twitter.png';
import saurabh1 from '../assets/saurabh1.png';

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex-col dark:bg-gray-900 dark:text-gray-100">
      <div
        className="absolute mid-h-[420px] md:w-[340px] h-[660px] w-[580px] right-56 
        bg-gradient-to-r from-red-600 via-blue-600 to-green-400 rounded-full transform rotate-12 
        top-8 shadow-[0_0_100px_rgba(255,165,0,0.7)] z-0 dark:bg-gradient-to-r dark:from-red-400 dark:via-blue-400 dark:to-green-300 dark:shadow-[0_0_100px_rgba(255,165,0,0.5)]"
        aria-hidden="true"
      ></div>
      <section
        data-aos="fade-up"
        data-aos-delay="250"
        className="body-font relative z-10"
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="relative lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col 
            md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex space-x-4 md-2" aria-label="Social media links">
              <a href="https://www.linkedin.com/in/saurabh-mehta-06321b263?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BVsiWjeieQ%2FiudvFgijAUcw%3D%3D" aria-label="linkedin">
                <img src={linkedin} alt="linkedin" className="w-14 h-14 hover:scale-110 transition-transform" />
              </a>
              <a href="https://twitter.com/SaurabhKum65740" aria-label="twitter">
                <img src={twitter} alt="twitter" className="w-14 h-14 hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.instagram.com/saurabh_mehta8084" aria-label="instagram">
                <img src={instagram} alt="instagram" className="w-14 h-14 hover:scale-110 transition-transform" />
              </a>
              <a href="https://wa.me/qr/JFBAGWUWFXTQD1" aria-label="whatsapp">
                <img src={whatsapp} alt="whatsapp" className="w-14 h-14 hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100058209082802" aria-label="facebook">
                <img src={facebook} alt="facebook" className="w-12 h-12  rounded-3xl hover:scale-110 transition-transform" />
              </a>
              <a href="https://github.com/saurabh-mehta0177" aria-label="github">
                <img src={github} alt="github" className="w-14 h-14 hover:scale-110 transition-transform" />
              </a>
            </div>
            <h1 className="title-font sm:text-6xl text-4xl mb-4 font-bold text-gray-900 dark:text-white">
              Hi! I'm <span className="text-red-600 dark:text-red-400">Saurabh Mehta</span>
            </h1>
            <h2 className="sm:text-3xl mb-4 font-bold text-blue-950 dark:text-blue-300">
              Java Developer Student
            </h2>

            <p className="mb-8 leading-relaxed text-black dark:text-gray-300 max-w-lg">
            I am a Computer Science Engineering student with a strong passion in full-stack development.
             My coding journey began two years ago during my B.Tech program, and since then, I have been dedicated to building impactful, user-centric projects. 
             I thrive in collaborative, diverse team environments and excel at adapting to new challenges. I enjoy solving real-world problems by writing clean, 
             efficient code and designing thoughtful, intuitive interfaces.

Driven by a commitment to continuous learning and creative problem-solving, I constantly seek opportunities to enhance my technical skill set.
 My long-term goal is to grow into a proficient and innovative software engineer who contributes meaningfully to the tech industry through collaboration, innovation, and dedication.
            </p>

            <div className="flex justify-center">
              <a
                href="/saurabh.port.pdf"
                download="saurabh.port.pdf"
                className="inline-flex text-white bg-red-500 border-0 py-2 px-6
                focus:outline-none hover:bg-red-700 rounded-full text-lg
                hover:shadow-[0_0_20px_rgba(255,100,0,0.5)] transition-all
                dark:bg-red-600 dark:hover:bg-red-500"
              >
                Download CV
              </a>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="500"
            className="relative z-20 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              src={saurabh1}
              alt="profile"
              className="object-cover object-center rounded-full w-80 h-80
              border-4 border-white shadow-xl dark:border-gray-700"
              width={320}
              height={320}
              loading="eager"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
