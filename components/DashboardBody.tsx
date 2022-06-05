import React from 'react'

//Components
import Content from './DashboardBody/Content'
import SideBar from './DashboardBody/SideBar'

interface Props {
  showSearch: Boolean
}

function DashboardBody({ showSearch }: Props) {
  return (
    <div className='overflow-hidden'>
        <div className='max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8'>

            <SideBar currentPage='Documentation' showSearch={showSearch} />
            <Content />

        </div>
    </div>
  )
}

export default DashboardBody