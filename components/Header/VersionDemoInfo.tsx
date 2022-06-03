import React from 'react'

function VersionDemoInfo() {
  return (
    <a className='ml-3 text-xs leading-5  text-sky-600 bg-sky-400/10 rounded-full py-1 px-3 hidden xl:flex items-center hover:bg-sky-400/20' href='/'>
        <strong className='font-semibold'>Tailwind CSS v3.0</strong>

        <svg width='2' height='2' fill='currentColor' aria-hidden='true' className='ml-2 text-sky-600 font-medium'><circle cx='1' cy='1' r='1'></circle></svg>

        <span className='ml-2'>Just-in-Time all the time, colored shadows, scroll snap and more</span>

        <svg width='3' height='6' className='ml-3 overflow-visible text-sky-300 dark:text-sky-400' aria-hidden='true'><path d='M0 0L3 3L0 6' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'></path></svg>
    </a>
  )
}

export default VersionDemoInfo