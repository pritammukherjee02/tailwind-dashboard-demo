import React from 'react'

function VersionSelector() {
  return (
    <div className='relative'>
        <button className='text-xs leading-5 font-semibold bg-slate-400/10 rounded-full py-1 px-3 flex items-center space-x-2 hover:bg-slate-400/20' type='button' aria-haspopup='true' aria-expanded='false'>
            <span className=' text-gray-500'>v3.0.24</span>
            
            <svg width='6' height='3' className='ml-2 overflow-visible' aria-hidden='true'>
                <path d='M0 0L3 3L6 0' fill='none' stroke='currentColor' stroke-width='1.5' stroke-linecap='round'></path>
            </svg>
        </button>
    </div>
  )
}

export default VersionSelector