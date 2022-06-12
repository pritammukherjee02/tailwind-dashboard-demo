import React from 'react'

interface Props {
    labelTag: String,
    icon?: any,
    link?: string
}

const defaultIcon = (<svg viewBox="0 0 24 24" height="15" width="15" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className=''><rect width="24" height="24" fill="none"></rect><path d="M6 13c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm6-10C9.8 3 8 4.8 8 7s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm6 10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"></path></svg>)

function SideNavbarLink({ labelTag, icon = defaultIcon, link='/' }: Props) {
  return (
    <a href={link}>
        <div className='flex hover:bg-gray-100 items-center justify-between rounded-md cursor-pointer text-sm font-medium py-2 px-4 mx-5'>
            <div className='mr-[10px] justify-center items-center'>

                {icon}

            </div>
            <div className='flex-1 whitespace-nowrap items-center'>
                {labelTag}
            </div>
        </div>
    </a>
  )
}

export default SideNavbarLink