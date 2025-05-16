// import { Section } from 'lucide-react'
// import React from 'react'
// import java from '../assets/java1.png'
// import C from '../assets/C.png'
// import CPP from '../assets/CPP.png'
// import spring from '../assets/spring.png'
// //import aws from '../assets/aws.png'
// import css from '../assets/css.png'
// import tailwindcss from '../assets/tailwindcss.png'
// import html from '../assets/html.png'
// import Script from '../assets/Script.png'
// import react from '../assets/react.png'
// import mysql from '../assets/mysql.png'
// import oracle from '../assets/oracle.png'
// //import docker from '../assets/docker.png'
// //import kubernetes from '../assets/kubernetes.png'
// //import microservices from '../assets/microservices.png'
// //import api1 from '../assets/api1.png'
// //import rest from '../assets/rest.png'

// const skills = [
//     { img: java, name: 'Java', desc: 'lorem ipsum dolor sit' },
//     { img: C, name: 'C', desc: 'lorem ipsum dolor sit' },
//     { img: CPP, name: 'C++', desc: 'lorem ipsum dolor sit' },
//     { img: spring, name: 'Spring Boot', desc: 'lorem ipsum dolor sit' },
//     //{ img: aws, name: 'AWS', desc: 'lorem ipsum dolor sit' },
//     { img: html, name: 'HTML', desc: 'lorem ipsum dolor sit' },
//     { img: css, name: 'CSS', desc: 'lorem ipsum dolor sit' },
//     { img: tailwindcss, name: 'TailwindCSS', desc: 'lorem ipsum dolor sit' },
//     { img: Script, name: 'React', desc: 'lorem ipsum dolor sit' },
//     { img: react, name: 'JavaScript', desc: 'lorem ipsum dolor sit' },
//     { img: mysql, name: 'MYSQL Database', desc: 'lorem ipsum dolor sit' },
//     { img: oracle, name: 'ORACLE Database', desc: 'lorem ipsum dolor sit' },
//    // { img: docker, name: 'Docker', desc: 'lorem ipsum dolor sit' },
//     //{ img: kubernetes, name: 'Kubernetes', desc: 'lorem ipsum dolor sit' },
//     //{ img: microservices, name: 'Microservices', desc: 'lorem ipsum dolor sit' },
//     //{ img: api1, name: 'API', desc: 'lorem ipsum dolor sit' },
//     //{ img: rest, name: 'C', rest: 'lorem ipsum dolor sit' }
// ]

// const Skills = () => {
//   return (
//     <section id='skills' data-aos='fade-up' data-aos-delay='250' className='w-full py-16 bg-gradient-to-b from-gray-200/10 to-white relative'>
//         <div className='absolute inset-0 bg-white/30 backdrop-blue-sm z-0'></div>
//         <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
//             <div className='text-center mb-16 group'>
//                 <h2 className='text-4xl font-bold text-red-600 inline-block relative pb-2'>
//                     MY SKILLS
//                     <span className='absolute bottom-0 left-0 h-1 bg-red-400 rounded-full w-0 group-hover:w-full transition-all duration-500 ease-in-out'></span>
//                 </h2>
//                 <p className='mt-4 text-lg text-gray-700 max-w-2xl mx-auto'>
//                     Technologies I've mastered through experience
//                 </p>
//             </div>
//             <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
//              {skills.map((skill, index) => (
//                 <div key={index} className='flex flex-col items-center p-5 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg hover:shadow-xl border border-white/20 transition-all duration-300 group relative overflow-hidden hover:bg-white/90 hover:border-red-200 hover:scale-[1.03]'>
//                     <div className='absolute indent-0 bg-gradient-to-br from-red-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
//                     <div className='mb-4 p-3 bg-white/80 rounded-xl shadow-sm group-hover:rotate-6 group-hover:bg-red-50 transition-all duration-300'>
//                         <img src={skill.img} alt={`${skill.name} Icon`} className='w-14 h-14 object-contain grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300'/>
//                     </div>
//                     <h3 className='text-lg font-semibold text-gray-800 mb-2 group-hover:text-red-500 transition-colors duration-200'>{skill.name}</h3>
//                     <p className='text-sm text-gray-600 text-center group-hover:text-gray-800 group-hover:scale-[1.03] transition-all duration-200 px-2'>
//                         {skill.desc}
//                     </p>
//                     <div className='absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-300/30 transition-all duration-500 pointer-events-none'></div>
//                 </div>
//              ))}
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Skills







import { Section } from 'lucide-react'
import React from 'react'
import java from '../assets/java1.png'
import C from '../assets/C.png'
import CPP from '../assets/CPP.png'
import spring from '../assets/spring.png'
import aws from '../assets/aws.png'
import css from '../assets/css.png'
import tailwindcss from '../assets/tailwindcss.png'
import html from '../assets/html.png'
import Script from '../assets/Script.png'
import react from '../assets/react.png'
import mysql from '../assets/mysql.png'
import oracle from '../assets/oracle.png'
import { h3 } from 'framer-motion/client'
import docker from '../assets/docker.png'
//import kubernetes from '../assets/kubernetes.png'
//import microservices from '../assets/microservices.png'
//import api1 from '../assets/api1.png'
//import rest from '../assets/rest.png'

const skills = [
    { img: java, name: 'java' , desc:'Java is a widely-used programming language for coding web applications' },
    { img: C, name: 'C', desc: 'The C programming language is a procedural and general-purpose language that provides low-level access to system memory' },
    { img: CPP, name: 'C++', desc: 'C++ is a powerful programming language, often used to create high-performance applications and software, especially in game development and systems programming' },
    { img: spring, name: 'Spring Boot', desc: 'Spring Boot is a framework that makes it easier to create and run Java applications, particularly web applications and microservices.' },
    { img: aws, name: 'AWS', desc: 'a AWS cloud computing platform that provides businesses and individuals with on-demand access to a wide range of services, including computing power, storage, databases, and more.' },
    { img: html, name: 'HTML', desc: 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.' },
    { img: css, name: 'CSS', desc: 'Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML' },
    { img: tailwindcss, name: 'TailwindCSS', desc: 'Tailwind CSS is an open-source framework used to style your website in HTML without external CSS' },
    { img: Script, name: 'React', desc: 'React is a JavaScript-based UI development library.' },
    { img: react, name: 'JavaScript', desc: 'JavaScript is a programming language that makes websites interactive and dynamic.' },
    { img: mysql, name: 'MYSQL Database', desc: 'MySQL is an open source relational database management system (RDBMS) that used to store and manage data.' },
    { img: oracle, name: 'ORACLE Database', desc: 'An Oracle Database is a collection of data organized by type with relationships being maintained between the different types.' },
    { img: docker, name: 'Docker', desc: 'Docker is an open-source platform that enables developers to build, deploy, run, update and manage containers.' },
    //{ img: kubernetes, name: 'Kubernetes', desc: 'Kubernetes, often called K8s, is a system that manages and orchestrates your applications, especially those running in containers.' },
    //{ img: microservices, name: 'Microservices', desc: 'Microservices allow a large application to be separated into smaller independent parts, with each part having its own realm of responsibility.' },
    //{ img: api1, name: 'API', desc: 'API (Application Programming Interface) is a set of rules and tools that allows different software applications to communicate and exchange data.' },
    //{ img: rest, name: 'C', rest: 'lorem ipsum dolor sit' }
]

const Skills = () => {
  return (
    <section id='skills' data-aos='fade-up' data-aos-delay='250' className='w-full py-16 bg-gradient-to-b from-gray-200/10 to-white relative dark:from-gray-800 dark:to-gray-900'>
        <div className='absolute inset-0 bg-white/30 backdrop-blue-sm dark:bg-gray-800/50 z-0'></div>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
            <div className='text-center mb-16 group'>
                <h2 className='text-4xl font-bold text-red-600 inline-block relative pb-2 dark:text-red-400'>
                    MY SKILLS
                    <span className='absolute bottom-0 left-0 h-1 bg-red-400 rounded-full w-0 group-hover:w-full transition-all duration-500 ease-in-out'></span>
                </h2>
                <p className='mt-4 text-lg text-gray-700 max-w-2xl mx-auto dark:text-gray-300'>
                    Technologies I've learned through experience
                </p>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6'>
             {skills.map((skill, index) => (
                <div key={index} className='flex flex-col items-center p-5 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg hover:shadow-xl border border-white/20 dark:bg-gray-800/80 dark:border-gray-700/50 transition-all duration-300 group relative overflow-hidden hover:bg-white/90 hover:border-red-200 hover:scale-[1.03]'>
                    <div className='absolute indent-0 bg-gradient-to-br from-red-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
                    <div className='mb-4 p-3 bg-white/80 rounded-xl shadow-sm group-hover:rotate-6 group-hover:bg-red-50 dark:bg-gray-700/80 transition-all duration-300'>
                        <img src={skill.img} alt={`${skill.name} Icon`} className='w-14 h-14 object-contain grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300'/>
                    </div>
                    <h3 className='text-lg font-semibold text-gray-800 mb-2 group-hover:text-red-500 dark:text-gray-200 group-hover:text-red-500 transition-colors duration-200'>{skill.name}</h3>
                    <p className='text-sm text-gray-600 text-center group-hover:text-gray-800 group-hover:scale-[1.03] dark:text-gray-400 group-hover:text-gray-300 transition-all duration-200 px-2'>
                        {skill.desc}
                    </p>
                    <div className='absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-300/30 transition-all duration-500 pointer-events-none'></div>
                </div>
             ))}
            </div>
        </div>
    </section>
  )
}

export default Skills;
