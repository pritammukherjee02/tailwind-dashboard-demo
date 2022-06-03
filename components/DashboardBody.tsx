import React from 'react'

//Components
import Content from './DashboardBody/Content'
import SideBar from './DashboardBody/SideBar'

function DashboardBody() {
  return (
    <div className='overflow-hidden'>
        <div className='max-w-[100rem] mx-auto px-4 sm:px-6 md:px-8'>

            <SideBar />
            <Content />

        </div>
    </div>
  )
}

export default DashboardBody