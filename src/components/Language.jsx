// import React from 'react'

// const language =[
//     {name:'English',level:'Native',proficiency:60},
//     {name:'Hindi',level:'Native',proficiency:100},
//     {name:'Bhojpuri',level:'Native',proficiency:70},
// ];
// const Language = () => {
//   return (
//     <section id='languages' data-aos='dase-up' data-aos-delay='250'
//     className='w-full py-16 px-4 sm:px-8 bg-white' >
//      <div className='max-w-6xl mx-auto relative'>
//         <div className='text-center mb-12'>
//             <h2 className='text-3xl font-bold text-gray-800 mb-2'>
//                 language<span className='text-red-600'>Proficiency</span>
//             </h2>
//             <p className='text-gray-600 max-w-lg mx-auto'>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, a hic nulla maiores
//                  eum corporis fuga ab cum facilis exercitationem reprehenderit eius veniam molestiae similique sit itaque,
//                   provident iusto incidunt!
//             </p>
//         </div>
//         <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
//             {language.map((lang,idx)=>(
//                 <div key={idx} className='bg-gray-50 p-6 rounded-xl shadow-md transition-shadow'>
//                     <div className='flex justify-between items-center mb-2'>
//                         <h3 className='text-xl font-semibold text-gray-800'>{lang.name}</h3>
//                         <span className='text-sm font-medium text-blue-600'>{lang.level}</span>
//                     </div>
//                     <div className='w-full bg-gray-200 rounded-full h-2.5'>
//                         <div className='bg-red-400 h-2.5 rounded-full'
//                         style={{width:`${lang.proficiency}%`}}>
//                         </div>
//                      </div>
//                        <div className='flex justify-end mt-1'>
//                         <span className='text-xs text-gray-500'>{lang.proficiency}%</span>
//                         </div>
//                     </div>
//                   ))}
//         </div>
//      </div>
//     </section>
//   )
// }

// export default Language






import React from 'react';

const language = [
  { name: 'English', level: 'Native', proficiency: 70 },
  { name: 'Hindi', level: 'Native', proficiency: 95 },
  { name: 'Bhojpuri', level: 'Native', proficiency: 70 },
];

const Language = () => {
  return (
    <section
      id="languages"
      data-aos="fade-up"
      data-aos-delay="250"
      className="w-full py-16 px-4 sm:px-8 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Language <span className="text-red-600 dark:text-red-400">Proficiency</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
          I possess strong communication skills in both English and Hindi, enabling me to collaborate effectively in diverse teams.
           My ability to understand and convey technical concepts clearly helps in efficient teamwork and project execution.
            I continuously work on improving my language skills to adapt in both professional and academic environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {language.map((lang, idx) => (
            <div
              key={idx}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md border border-transparent dark:border-gray-700 transition-shadow"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{lang.name}</h3>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{lang.level}</span>
              </div>

              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-red-400 dark:bg-red-500 h-2.5 rounded-full transition-all duration-300"
                  style={{ width: `${lang.proficiency}%` }}
                />
              </div>

              <div className="flex justify-end mt-1">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {lang.proficiency}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Language;
