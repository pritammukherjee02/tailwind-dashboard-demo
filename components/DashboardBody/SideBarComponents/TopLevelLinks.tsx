import React from 'react'

//Components
import ListItem from './TopLevelLinksComponents/ListItem'
import SubCategoryLink from './TopLevelLinksComponents/SubCategoryLink'

const topLevelLinks = [
    {
        name: 'Documentation',
        svg: (<svg className="h-6 w-6" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 7c1.093 0 2.117.27 3 .743V17a6.345 6.345 0 0 0-3-.743c-1.093 0-2.617.27-3.5.743V7.743C5.883 7.27 7.407 7 8.5 7Z" className="fill-sky-200 group-hover:fill-sky-500 dark:fill-sky-300 dark:group-hover:fill-sky-300"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 7c1.093 0 2.617.27 3.5.743V17c-.883-.473-2.407-.743-3.5-.743s-2.117.27-3 .743V7.743a6.344 6.344 0 0 1 3-.743Z" className="fill-sky-400 group-hover:fill-sky-500 dark:fill-sky-200 dark:group-hover:fill-sky-200"></path></svg>),
        href: '/'
    },
    {
        name: 'Components',
        svg: (<svg className="h-6 w-6" viewBox="0 0 24 24" fill="none"><path d="m6 9 6-3 6 3v6l-6 3-6-3V9Z" className="fill-indigo-100 group-hover:fill-indigo-200"></path><path d="m6 9 6 3v7l-6-3V9Z" className="fill-indigo-300 group-hover:fill-indigo-400"></path><path d="m18 9-6 3v7l6-3V9Z" className="fill-indigo-400 group-hover:fill-indigo-500"></path></svg>),
        href: '/'
    },
    {
        name: 'Screencasts',
        svg: (<svg className="h-6 w-6" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" className="fill-pink-400 group-hover:fill-pink-500"></path><path d="M11.082 9.107a.685.685 0 0 0-.72-.01.757.757 0 0 0-.362.653v4.5c0 .27.138.52.362.653.224.133.5.13.72-.01l3.571-2.25A.758.758 0 0 0 15 12a.758.758 0 0 0-.347-.643l-3.571-2.25Z" className="fill-pink-50 group-hover:fill-pink-100"></path></svg>),
        href: '/'
    },
    {
        name: 'Playground',
        svg: (<svg className="h-6 w-6" viewBox="0 0 24 24" fill="none"><path d="M4 12a7 7 0 0 1 7-7h2a7 7 0 1 1 0 14h-2a7 7 0 0 1-7-7Z" className="fill-blue-400 group-hover:fill-blue-500"></path><path d="M10.25 9.75 7.75 12l2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="stroke-blue-50"></path><path d="m13.75 9.75 2.5 2.25-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="stroke-blue-200"></path></svg>),
        href: '/'
    },
    {
        name: 'Resources',
        svg: (<svg className="h-6 w-6" viewBox="0 0 24 24" fill="none"><path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-purple-400 group-hover:fill-purple-500"></path><path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-purple-200 group-hover:fill-purple-300"></path><path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-purple-400 group-hover:fill-purple-500"></path></svg>),
        href: '/'
    },
    {
        name: 'Community',
        svg: (<svg className="h-6 w-6" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 5a6 6 0 0 0-4.687 9.746c.215.27.315.62.231.954l-.514 2.058a1 1 0 0 0 1.485 1.1l2.848-1.71c.174-.104.374-.15.576-.148H13a6 6 0 0 0 0-12h-2Z" className="fill-violet-400 group-hover:fill-violet-500"></path><circle cx="12" cy="11" r="1" className="fill-white"></circle><circle cx="9" cy="11" r="1" className="fill-violet-200"></circle><circle cx="15" cy="11" r="1" className="fill-violet-200"></circle></svg>),
        href: '/'
    },
]

const subCategoryLinks = [
    {
        name: 'Installation',
        href: '/'
    },
    {
        name: 'Editor Setup',
        href: '/'
    },
    {
        name: 'Using with Preprocessors',
        href: '/'
    },
    {
        name: 'Optimizing for Production',
        href: '/'
    },
    {
        name: 'Browser Support',
        href: '/'
    },
    {
        name: 'Upgrade Guide',
        href: '/'
    },
]

interface Props {
    currentPage: String
}

function TopLevelLinks({ currentPage }: Props) {
  return (
    <ul>
        {topLevelLinks.map(link => <ListItem name={link.name} svg={link.svg} link={link.href} currentPage={link.name == currentPage} />)}

        {/* Getting Started */}
        <li className='mt-12 lg:mt-8'>

            <h5 className='mb-8 lg:mb-3 font-medium text-slate-900'>Getting Started</h5>
            <ul className='space-y-6 lg:space-y-2 border-l border-slate-100'>
                {subCategoryLinks.map(subCategoryLink => <SubCategoryLink name={subCategoryLink.name} link={subCategoryLink.href} currentPage={subCategoryLink.name == 'Installation'} />)}
            </ul>

        </li>

    </ul>
  )
}

export default TopLevelLinks