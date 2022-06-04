import React from 'react'

interface Props {
    svg: any,
    name: String,
    link: string
    currentPage: Boolean
}

function ListItem({ svg, name, link, currentPage }:Props) {
  return (
    <li>
        <a href={link} className={'group flex items-center lg:text-sm lg:leading-6 mb-4 ' + (currentPage ? 'text-sky-500 font-medium' : 'text-black font-normal')}>
            <div className='mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 group-hover:shadow-sky-200'>
                {svg}
            </div>

            {name}
        </a>
    </li>
  )
}

export default ListItem