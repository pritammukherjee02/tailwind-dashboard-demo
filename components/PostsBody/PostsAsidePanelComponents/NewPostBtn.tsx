import Link from 'next/link'
import React from 'react'

function NewPostBtn() {
	return (
		<Link href='/new'>
			<div className='rounded-xl text-body !font-semibold bg-blue-500 hover:bg-blue-600 cursor-pointer text-white flex items-center justify-center w-56 mx-auto mt-8 h-[42px] p-3'>
				Create a new Post
			</div>
		</Link>
	)
}

export default NewPostBtn