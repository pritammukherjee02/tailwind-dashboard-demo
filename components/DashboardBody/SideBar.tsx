import React from 'react'

//Components
import SearchArea from './SideBarComponents/SearchArea'
import TopLevelLinks from './SideBarComponents/TopLevelLinks'

interface Props {
    showSearch: Boolean,
    currentPage: string
}

function SideBar({ showSearch, currentPage }: Props) {
    return (
        <div className='w-[19.5rem] hidden lg:block fixed z-20 inset-0 top-[3.8125rem] sidebar right-auto pb-10 px-8 overflow-y-auto'>
            <nav className='lg:text-sm lg:leading-6 relative'>

                {/* Search Area */}
                {showSearch ? <SearchArea /> : ''}

                {/* TopLevelLinks */}
                <div className="h-8 bg-gradient-to-b from-white"></div>
                <TopLevelLinks currentPage={currentPage} />

            </nav>
        </div>
    )
}

export default SideBar