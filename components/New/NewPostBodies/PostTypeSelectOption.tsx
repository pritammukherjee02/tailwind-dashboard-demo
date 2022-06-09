import React from 'react'

interface Props {
    title: String,
    description: string,
    svg: any,
    href: string
}

function PostTypeSelectOption({ title, description, svg, href }: Props) {
    return (
        <a href={href}>
            <div className='border-[2px] hover:border-[#E7C7EF] cursor-pointer rounded-lg transition-colors'>
                <div className='p-4 flex items-center'>
                    {/* SVG Icon */}
                    <div className='w-12 h-12 bg-sky-400/20 rounded-full flex justify-center items-center mr-4'>
                        {svg}
                    </div>

                    {/* Title and Desc */}
                    <div className='flex flex-col'>
                        <div className='max-w-none'>
                            <p className='text-subheading !text-sm mb-1'>{title}</p>

                            <p className='text-xs opacity-60 leading-4'>{description}</p>
                        </div>
                    </div>

                    {/* Arrow SVG */}
                    <div className='inline-flex flex-1 justify-end'>
                        <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-475d246d="" className=""><path d="M10.36 7.527L6.587 3.76a.667.667 0 10-.947.94l3.3 3.333-3.3 3.3a.667.667 0 00.217 1.088.668.668 0 00.513 0 .666.666 0 00.217-.148l3.773-3.766a.666.666 0 000-.98z" fill="currentColor" opacity=".5" data-v-475d246d=""></path></svg>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default PostTypeSelectOption