import React from 'react'

//Components
import SearchArea from './SideBarComponents/SearchArea'
import TopLevelLinks from './SideBarComponents/TopLevelLinks'

interface Props {
    showSearch: Boolean
}

function SideBar({ showSearch }: Props) {
    return (
        <div className='w-80 hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px, calc(50%-45rem))] right-auto pb-10 px-8 overflow-y-auto'>
            <nav className='lg:text-sm lg:leading-6 relative'>

                {/* Search Area */}
                {showSearch ? <SearchArea /> : ''}

                {/* TopLevelLinks */}
                <div className="h-8 bg-gradient-to-b from-white"></div>
                <TopLevelLinks currentPage='Documentation' />

            </nav>
        </div>
    )
}

export default SideBar