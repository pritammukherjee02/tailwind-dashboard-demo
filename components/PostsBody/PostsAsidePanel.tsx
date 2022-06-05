import React from 'react'

//Components
import NewPostBtn from './PostsAsidePanelComponents/NewPostBtn'

function PostsAsidePanel() {
  return (
    <div className='w-[19.5rem] hidden lg:block fixed z-20 inset-0 aside-panel left-auto top-[3.8125rem] overflow-y-auto'>
        <NewPostBtn />
    </div>
  )
}

export default PostsAsidePanel