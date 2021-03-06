import React from 'react'

//Components
import SideBar from './DashboardBody/SideBar'
import PostsAsidePanel from './PostsBody/PostsAsidePanel'
import PostsBodyContent from './PostsBody/PostsBodyContent'

interface Props {
  
}

function DashboardBody({  }: Props) {
  return (
    <div className='overflow-hidden'>
        <div className='max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8'>

            <SideBar currentPage='Posts' showSearch={false} />
            <PostsBodyContent />
            <PostsAsidePanel />

        </div>
    </div>
  )
}

export default DashboardBody