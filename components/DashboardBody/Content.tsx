import React from 'react'

function Content() {
  return (
    <div className="lg:pl-[19.5rem] overflow-y-auto">
        <main className='max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none'>

            <header className='mb-10 md:flex md:items-start'>

                <div className='flex-auto max-w-4xl'>
                    <p className='mb-4 text-sm leading-6 font-medium text-sky-500'>Installation</p>

                    <h1 className='text-3xl sm:text-4xl font font-black text-slate-900 tracking-[-0.018em]'>Get started with Tailwind CSS</h1>

                    <div className='font-thin tracking-[0.007em]'>

                      <p className='mt-4 text-lg text-slate-700'>Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.</p>
                      <p className='mt-4 text-lg text-slate-700'>It's fast, flexible, and reliable — with zero-runtime.</p>
                    </div>
                    
                </div>

            </header>

        </main>
    </div>
  )
}

export default Content