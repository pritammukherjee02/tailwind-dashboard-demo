import React from 'react'

interface Props {
    name: string,
    autoComplete: string,
    labelTag: String,
    type?: string,
	description: String,
    setState?: any
}

function TextField2({ name, autoComplete, labelTag, description, type = 'text', setState = () => {} }: Props) {
  return (
    <div className='text-body'>
        <label htmlFor={name} className="block font-semibold text-sm mb-2 leading-6 text-gray-700">
            {labelTag}
        </label>
        <input
            type={type}
            name={name}
            id={name}
            onChange={(e) => {setState(e.target.value)}}
            autoComplete={autoComplete}
            className="mt-1 font-[300] leading-6 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
        <p className="mt-2 text-sm text-gray-500">
            {description}
        </p>
    </div>
  )
}

export default TextField2