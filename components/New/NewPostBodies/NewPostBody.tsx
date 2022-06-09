import React from 'react'

//Components
import PostTypeSelectOption from './PostTypeSelectOption'

const options = [
    {
        title: 'Interview Experience',
        description: 'Share with others what you faced in that interview',
        svg: (<svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50 w-7 h-7 text-sky-600" data-v-475d246d=""><path d="M17.398 6.848a1.167 1.167 0 001.587-.431A1.166 1.166 0 0121.167 7 1.167 1.167 0 0120 8.167a1.167 1.167 0 100 2.333 3.5 3.5 0 10-3.033-5.25 1.168 1.168 0 00.431 1.598zm5.017 8.319a1.166 1.166 0 00-1.307 1.003A8.166 8.166 0 0113 23.333H6.478l.759-.758a1.167 1.167 0 000-1.645A8.167 8.167 0 0113 7a1.167 1.167 0 000-2.333 10.5 10.5 0 00-8.167 17.045l-1.995 1.96a1.167 1.167 0 00-.245 1.271 1.167 1.167 0 001.074.724H13a10.5 10.5 0 0010.418-9.182 1.167 1.167 0 00-1.003-1.318zm-1.972-3.419a1.167 1.167 0 00-.676-.081l-.21.07-.21.105-.175.151a1.168 1.168 0 00-.245.374.98.98 0 00-.094.466c-.003.156.025.31.082.455.06.14.148.267.257.374A1.167 1.167 0 0020 14a1.167 1.167 0 001.167-1.167.98.98 0 00-.094-.443 1.249 1.249 0 00-.63-.63v-.012z" fill="currentColor" data-v-475d246d=""></path></svg>),
        href: '/new/interviewexperience',
    },
]

function NewPostBody() {
  return (
    <div className='max-w-[712px] px-3 lg:px-0 flex flex-col justify-center mx-auto'>
        <div className='flex justify-between py-4'>
            <h1 className='font-semibold text-xl tracking-[-0.3px]'>Create a new post</h1>

            <span className='text-sm px-3 cursor-pointer py-2 font-medium opacity-60'>Cancel</span>
        </div>

        <div className='p-6 bg-gray-50 rounded-lg'>
            <div className='flex flex-col'>
                <h3 className='text-subheading mb-6'>What would you like to post?</h3>

                <div className='grid grid-flow-row gap-3'>

                    {options.map(option => <PostTypeSelectOption title={option.title} description={option.description} svg={option.svg} href={option.href} />)}

                </div>
            </div>
        </div>
    </div>
  )
}

export default NewPostBody