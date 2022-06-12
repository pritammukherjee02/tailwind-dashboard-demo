import React from 'react'

function Notification() {
  return (
    <div className="fixed bottom-[30px] left-1/2 -translate-x-1/2 z-50 flex-col">
        <div className="py-4 px-5 bg-gray-900 text-white rounded-full">
            <div className="flex justify-between items-center gap-4">
                <svg viewBox="0 0 24 24" height="15" width="15" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className=''><rect width="24" height="24" fill="none"></rect><path d="M6 13c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm6-10C9.8 3 8 4.8 8 7s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm6 10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"></path></svg>
                <span>Notification</span> 
            </div>
        </div>
    </div>
  )
}

export default Notification