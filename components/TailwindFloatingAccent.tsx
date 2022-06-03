import React from 'react'

function TailwindFloatingAccent() {
  return (
    <div className='absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none'>
        <div className='w-[108rem] flex-none flex justify-end'>
            <picture>
                <img className='w-[71.75rem] flex-none max-w-none' src='https://tailwindcss.com/_next/static/media/docs@tinypng.61f4d3334a6d245fc2297517c87ae044.png' />
            </picture>
        </div>
    </div>
  )
}

export default TailwindFloatingAccent