import React from 'react'

interface Props {
    name: String,
    link: string,
    currentPage: Boolean
}

function SubCategoryLink({ name, link, currentPage }: Props) {
  return (
    <li>
        <a className={'block border-l pl-4 -ml-px ' + (currentPage ? 'text-sky-500 border-current font-medium' : 'border-transparent font-thin hover:border-slate-400 text-slate-700 hover:text-slate-900')} href={link}>{name}</a>
    </li>
  )
}

export default SubCategoryLink