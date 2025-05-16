// import React, { useState } from 'react'
// import { Menu, X } from 'lucide-react'

// const navLinks = [
//   { href: '#skills', label: 'Skills' },
//   { href: '#education', label: 'Education' },
//   { href: '#experience', label: 'Experience' },
//   { href: '#languages', label: 'Languages' },
//   { href: '#projects', label: 'Projects' },
//   { href: '#contact', label: 'Contact' },
// ]

// const Navar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   return (
//     <header className='sticky top-0 w-full bg-gray-200/85 backdrop-blur supports-[backdrop-filter]:bg-gray-200/25 px-4 lg:px-0'>
//       <div className='max-w-7xl mx-auto flex h-14 items-center justify-center relative'>
//         <div className='flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:space-x-36'>
//           <a href='#' className='flex items-center space-x-2'>
//             <p className='text-red-600 text-3xl font-bold'>Portfolio</p>
//           </a>
//           <nav className='hidden md:flex items-center space-x-6 text-lg font-medium'>
//             {navLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 className='transition-colors hover:text-foreground/80 text-foreground/60'
//               >
//                 {link.label}
//               </a>
//             ))}
//           </nav>
//           <button
//             className='absolute right-4 inline-flex items-center justify-center rounded-md md:hidden'
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             <span className='sr-only'>Toggle main menu</span>
//             {mobileMenuOpen ? (
//               <X className='h-6 w-6' aria-hidden='true' />
//             ) : (
//               <Menu className='h-6 w-6' aria-hidden='true' />
//             )}
//           </button>
//         </div>
//       </div>
//       {mobileMenuOpen && (
//         <div className='md:hidden'>
//           <div className='space-y-1 px-2 py-3 pt-2 text-center'>
//             {navLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 className='block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-slate-50 hover:text-gray-900'
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 {link.label}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </header>
//   )
// }

// export default Navar





import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navLinks = [
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#languages', label: 'Languages' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Navar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <header className="sticky top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur supports-[backdrop-filter]:bg-opacity-60 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <a href="#" className="text-2xl font-bold text-red-600 dark:text-red-400">
            Portfolio
          </a>

          
          <nav className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-200 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

  
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-4 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-700 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-400"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navar;



