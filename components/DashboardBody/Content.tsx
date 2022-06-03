import React from 'react'

function Content() {
  return (
    <div className="lg:pl-80 overflow-y-auto">
        <main className='max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none'>

            <header className='mb-10 md:flex md:items-start'>

                <div className='flex-auto max-w-4xl'>
                    <p className='mb-4 text-sm leading-6 font-semibold text-sky-500'>Installation</p>

                    <h1 className='text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight'>Get started with Tailwind CSS</h1>

                    <p className='mt-4 text-lg font-light text-slate-700'>Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.</p>
                    <p className='mt-4 text-lg font-light text-slate-700'>It's fast, flexible, and reliable — with zero-runtime.</p>
                </div>

            </header>

        </main>
    </div>
  )
}

export default Content