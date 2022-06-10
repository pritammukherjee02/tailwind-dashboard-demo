import React from 'react'

interface Props {
  problemNumber: any
}

function RoundQuestion({ problemNumber }: Props) {
  return (
    <div className='bg-gray-100 p-2 h-12'>
        <h3 className='text-subheading'>Problem {problemNumber}</h3>
    </div>
  )
}

export default RoundQuestion